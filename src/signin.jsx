import { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { GiMoebiusTriangle } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ phone: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.phone || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/signin", form);
      localStorage.setItem("accessToken", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/chat");
    } catch (err) {
      setError(err.response?.data?.error || "Invalid Phno or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(139,92,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-sm relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mb-4">
            <GiMoebiusTriangle className="text-violet-400 text-2xl" />
          </div>
          <h1 className="text-black text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-gray-700 text-sm mt-1">Sign in to your account</p>
        </div>

        {/* Card */}
        <div className="bg-white border border-black rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* phno */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-gray-500 font-medium tracking-wide uppercase">
                Phone no
              </label>
              <div className="flex items-center gap-3 bg-white/[0.04] border border-black rounded-xl px-4 py-3 focus-within:border-violet-500/50 transition-colors">
                <FaPhoneAlt className="text-gray-600 shrink-0" size={15} />
                <input
                  type="number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="your Phno"
                  className="flex-1 bg-transparent text-sm text-black-200 placeholder-black-600 outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm text-gray-500 font-medium tracking-wide uppercase">
                  Password
                </label>
                <button
                  type="button"
                  className="text-sm text-black-500 hover:text-violet-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
              <div className="flex items-center gap-3 bg-white/[0.04] border border-black rounded-xl px-4 py-3 focus-within:border-violet-500/50 transition-colors">
                <FiLock className="text-gray-600 shrink-0" size={15} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="flex-1 bg-transparent text-sm text-black-500 placeholder-gray-600 outline-none"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="text-gray-600 hover:text-gray-400 transition-colors"
                >
                  {showPassword ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-xl py-3 transition-all duration-200 active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>

        {/* Sign up link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-black-400 hover:text-violet-500 transition-colors font-medium"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};
