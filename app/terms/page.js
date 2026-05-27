/**
 * Terms page: placeholder legal terms linked from login and register forms.
 */

import Link from "next/link";

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-10">
      <section className="mx-auto max-w-3xl bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
        <p className="text-sm font-semibold text-orange-500">EduBuddy</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">
          Terms of Service
        </h1>
        <p className="text-gray-500 mt-4 leading-relaxed">
          These placeholder terms describe how schools, teachers, students and
          parents should use EduBuddy responsibly. Replace this page with your
          official legal terms before production launch.
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

export default TermsPage;
