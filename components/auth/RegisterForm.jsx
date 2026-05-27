"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";

import {
  HiOutlineAcademicCap,
  HiOutlineBuildingOffice2,
  HiOutlineEnvelope,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineLockClosed,
  HiOutlineUser,
  HiOutlineUsers,
} from "react-icons/hi2";

const roles = [
  { label: "Teacher", value: "teacher", icon: HiOutlineAcademicCap },
  { label: "Student", value: "student", icon: HiOutlineUser },
  { label: "Parent", value: "parent", icon: HiOutlineUsers },
  {
    label: "School Admin",
    value: "school-admin",
    icon: HiOutlineBuildingOffice2,
  },
];

const RegisterForm = () => {
  const router = useRouter();
  const { register } = useAuth();

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "teacher",
  });

  const isValid =
    formData.fullName.trim() && formData.email.trim() && formData.password;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Registration is handled by AuthContext/authService so this component
    // stays focused on form state and redirect decisions.
    const result = register(formData);

    if (!result.success) {
      setError(result.message);
      return;
    }

    // Guided-onboarding roles continue immediately into setup. Other roles are
    // created and sent back to login until their own onboarding exists.
    if (result.user.role === "teacher") {
      router.push("/onboarding/teacher");
      return;
    }

    if (result.user.role === "school-admin") {
      router.push("/onboarding/admin");
      return;
    }

    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="text-sm font-medium text-gray-700">Full Name</label>
        <div className="mt-2 flex items-center border border-gray-200 rounded-2xl px-4 py-3 focus-within:border-gray-400 transition-all">
          <HiOutlineUser className="text-gray-400 text-xl" />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Sylva Harris"
            className="flex-1 ml-3 outline-none bg-transparent"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <div className="mt-2 flex items-center border border-gray-200 rounded-2xl px-4 py-3 focus-within:border-gray-400 transition-all">
          <HiOutlineEnvelope className="text-gray-400 text-xl" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="teacher@edubuddy.com"
            className="flex-1 ml-3 outline-none bg-transparent"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Password</label>
        <div className="mt-2 flex items-center border border-gray-200 rounded-2xl px-4 py-3 focus-within:border-gray-400 transition-all">
          <HiOutlineLockClosed className="text-gray-400 text-xl" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a secure password"
            className="flex-1 ml-3 outline-none bg-transparent"
          />

          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            className="ml-3 text-gray-400 hover:text-gray-700 transition"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <HiOutlineEyeSlash className="text-xl" />
            ) : (
              <HiOutlineEye className="text-xl" />
            )}
          </button>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Role</label>
        <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {roles.map((role) => {
            const isActive = formData.role === role.value;
            const Icon = role.icon;

            return (
              <button
                key={role.value}
                type="button"
                onClick={() =>
                  setFormData((current) => ({
                    ...current,
                    role: role.value,
                  }))
                }
                className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "text-white border-transparent shadow-sm"
                    : "text-gray-600 border-gray-200 hover:bg-gray-50"
                }`}
                style={{
                  background: isActive ? "var(--primary-solid)" : "white",
                }}
              >
                <Icon className="mx-auto mb-1 text-lg" />
                <span>{role.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button
        title="Create Account"
        type="submit"
        fullWidth
        disabled={!isValid}
      />

      {!isValid && (
        <p className="text-xs text-gray-400 text-center">
          Complete all fields to continue.
        </p>
      )}

      <div className="text-center">
        <p className="text-gray-500 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary">
            Sign In
          </Link>
        </p>
      </div>

      <p className="text-xs text-center text-gray-400 leading-relaxed">
        By continuing, you agree to our{" "}
        <Link href="/terms" className="text-primary font-semibold hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="text-primary font-semibold hover:underline"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
};

export default RegisterForm;
