import aws from 'aws-sdk';
import formidable from 'formidable';
import fs from 'fs';

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new aws.S3();

export const config = {
    api: {
        bodyParser: false,
    },
};

const upload = async (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        const file = files.file;
        const stream = fs.createReadStream(file.path);

        const params = {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: file.name,
            Body: stream,
            ContentType: file.type,
            ACL: 'public-read',
        };

        s3.upload(params, (s3Err, data) => {
            if (s3Err) {
                res.status(500).send(s3Err);
                return;
            }
            res.status(200).send({ imageUrl: data.Location });
        });
    });
};

export default upload;
