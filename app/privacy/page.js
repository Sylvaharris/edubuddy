/**
 * Privacy page: placeholder privacy policy linked from login and register
 * forms.
 */

import Link from "next/link";

const PrivacyPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <section className="mx-auto max-w-3xl bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
        <p className="text-sm font-semibold text-orange-500">EduBuddy</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mt-4 leading-relaxed">
          This placeholder privacy policy explains that EduBuddy stores account
          and onboarding information for the school workspace experience. Replace
          it with your official privacy policy before production launch.
        </p>
        <Link
          href="/register"
          className="inline-flex mt-8 px-5 py-3 rounded-2xl text-white font-semibold"
          style={{ background: "var(--primary-solid)" }}
        >
          Back to Register
        </Link>
      </section>
    </main>
  );
};

export default PrivacyPage;
