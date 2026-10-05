import { notFound } from "next/navigation";

import { privacyPoliciesData  } from "@/app/components/data/privacyPoliciesData";
import PrivacyPolicy from "@/app/components/PrivacyPolicy";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const privacyPolicy = privacyPoliciesData.find(
    (item) => item.slug === slug
  );

  if (!privacyPolicy) {
    return {};
  }

  return {
    title: `${privacyPolicy.appName} Privacy Policy`,
    description: `Read the privacy policy for ${privacyPolicy.appName}.`,
  };
}

export default async function PrivacyPolicyPage({ params }) {
  const { slug } = await params;

  const privacyPolicy = privacyPoliciesData.find(
    (item) => item.slug === slug
  );

  if (!privacyPolicy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f4f7fb] px-4 py-1 mt-10">
      <PrivacyPolicy data={privacyPolicy} />
    </div>
  );
}