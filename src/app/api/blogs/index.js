import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
    const client = await clientPromise;
    const db = client.db('blog');

    switch (req.method) {
        case 'POST':
            const { title, content, imageUrl } = req.body;
            let blog = await db.collection('blogs').insertOne({
                title,
                content,
                imageUrl,
                createdAt: new Date()
            });
            res.json(blog.ops[0]);
            break;
        case 'GET':
            const blogs = await db.collection('blogs').find({}).toArray();
            res.json(blogs);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
};
