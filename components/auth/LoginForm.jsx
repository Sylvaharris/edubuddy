"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "../../context/AuthContext";

import Button from "../ui/Button";

import { HiOutlineEnvelope, HiOutlineLockClosed } from "react-icons/hi2";

const LoginForm = () => {
  const router = useRouter();

  const { login } = useAuth();

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "teacher@edubuddy.com",
    password: "123456",
    remember: false,
  });

  /**
   * =================================
   * Handle input changes
   * =================================
   */

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /**
   * =================================
   * Login submit
   * =================================
   */

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const result = login(formData.email, formData.password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    router.push("/teacher/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email */}

      <div>
        <label className="text-sm font-medium text-gray-700">
          Email Address
        </label>

        <div
          className="
          mt-2

          flex
          items-center

          border
          border-gray-200

          rounded-2xl

          px-4
          py-3

          focus-within:border-gray-400
          transition-all
          "
        >
          <HiOutlineEnvelope
            className="
            text-gray-400
            text-xl
            "
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="the.blaccink+14@gmail.com"
            className="
            flex-1
            ml-3
            outline-none
            bg-transparent
            "
          />
        </div>
      </div>

      {/* Password */}

      <div>
        <label className="text-sm font-medium text-gray-700">Password</label>

        <div
          className="
          mt-2

          flex
          items-center

          border
          border-gray-200

          rounded-2xl

          px-4
          py-3
          "
        >
          <HiOutlineLockClosed
            className="
            text-gray-400
            text-xl
            "
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="
            flex-1
            ml-3
            outline-none
            bg-transparent
            "
          />
        </div>
      </div>

      {/* Remember + forgot */}

      <div
        className="
        flex
        items-center
        justify-between
        text-sm
        "
      >
        <label
          className="
          flex
          items-center
          gap-2
          text-gray-600
          "
        >
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
          Remember me
        </label>

        <Link
          href="/forgot-password"
          className="
          text-primary
          hover:underline
          "
        >
          Forgot Password?
        </Link>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button title="Login" type="submit" fullWidth />

      {/* Footer */}

      <div className="text-center">
        <p className="text-gray-500 text-sm">
          Don&apos;t have an Account?{" "}
          <Link
            href="/register"
            className="
            font-semibold
            text-primary
            "
          >
            Sign Up
          </Link>
        </p>
      </div>

      <p
        className="
        text-xs
        text-center
        text-gray-400
        leading-relaxed
        "
      >
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  );
};

export default LoginForm;
