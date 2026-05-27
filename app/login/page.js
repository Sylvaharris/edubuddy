/**
 * Login page: authenticates existing users and routes them to the correct
 * role dashboard or teacher onboarding flow.
 */

import Image from "next/image";

import LoginForm from "../../components/auth/LoginForm";

import { HiOutlineAcademicCap } from "react-icons/hi2";

const LoginPage = () => {
  return (
    <main
      className="
      min-h-screen
      grid
      lg:grid-cols-2
      bg-white
      "
    >
      {/* =========================
          LEFT SIDE
      ========================== */}

      <section
        className="
        hidden
        lg:flex

        relative
        overflow-hidden
        "
      >
        <Image
          src="/images/login-banner.jpg"
          alt="EduBuddy"
          fill
          priority
          className="object-cover"
        />

        {/* overlay */}

        <div
          className="
          absolute
          inset-0
          bg-black/40
          "
        />

        {/* content */}

        <div
          className="
          absolute
          z-20

          p-12

          bottom-0

          text-white
          "
        >
          <div
            className="
            flex
            items-center
            gap-3
            "
          >
            <div
              className="
              h-14
              w-14

              rounded-2xl

              bg-white/20

              backdrop-blur-sm

              flex
              items-center
              justify-center
              "
            >
              <HiOutlineAcademicCap className="text-3xl" />
            </div>

            <h1
              className="
              text-3xl
              font-bold
              "
            >
              EduBuddy
            </h1>
          </div>

          <h2
            className="
            mt-8
            text-5xl
            font-bold
            max-w-lg
            "
          >
            Empowering Schools Through Smart Learning
          </h2>

          <p
            className="
            mt-5
            text-white/90
            max-w-md
            "
          >
            Manage students, teachers, attendance and school activities from one
            intelligent platform.
          </p>
        </div>
      </section>

      {/* =========================
          RIGHT SIDE
      ========================== */}

      <section
        className="
        flex
        items-center
        justify-center

        px-6
        md:px-10
        "
      >
        <div
          className="
          w-full
          max-w-md
          "
        >
          <div
            className="
            mb-8
            "
          >
            <h1
              className="
              text-4xl
              font-bold
              text-gray-900
              "
            >
              Sign in to your Account
            </h1>

            <p
              className="
              mt-3
              text-gray-500
              "
            >
              Access your school dashboard and continue where you stopped.
            </p>
          </div>

          <LoginForm />
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
