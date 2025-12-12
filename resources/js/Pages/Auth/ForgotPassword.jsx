import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post("/forgot-password");
  };

  return (
    <>
      <Head title="Forgot Password" />

      <div className="min-h-screen w-full bg-slate-950">
        {/* background */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-48 -right-48 h-[620px] w-[620px] rounded-full bg-yellow-400/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-4 py-10">
          <div className="grid w-full grid-cols-1 overflow-hidden rounded-3xl bg-white/5 shadow-2xl ring-1 ring-white/10 backdrop-blur xl:grid-cols-2">
            {/* Left card */}
            <div className="relative p-8 sm:p-12">
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-white/20">
                  <img
                    src="/images/mu-logo.png"
                    alt="MU"
                    className="h-full w-full object-contain p-1.5"
                  />
                </div>

                <div>
                  <div className="text-lg font-semibold text-white">
                    Maaref University
                  </div>
                  <div className="text-sm text-white/60">
                    Student Menu • Cafeteria & Dining
                  </div>
                </div>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-white">
                Reset your password
              </h1>
              <p className="mt-2 text-sm text-white/70">
                Enter your email and we’ll send you a reset link.
              </p>

              {status && (
                <div className="mt-6 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200 ring-1 ring-emerald-400/20">
                  {status}
                </div>
              )}

              <form onSubmit={submit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Email
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-white/40">
                      @
                    </span>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => setData("email", e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-10 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-yellow-300/40 focus:bg-white/10"
                      placeholder="name@mu.edu.sa"
                      autoComplete="email"
                    />
                  </div>

                  {errors.email && (
                    <div className="mt-2 text-sm text-red-300">
                      {errors.email}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="group relative w-full overflow-hidden rounded-2xl bg-yellow-400 px-4 py-3 font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="relative z-10">
                    {processing ? "Sending..." : "Email password reset link"}
                  </span>
                  <span className="absolute inset-y-0 right-0 w-20 translate-x-10 bg-white/30 blur-xl transition group-hover:translate-x-0" />
                </button>

                <div className="flex items-center justify-center">
                  <Link
                    href="/login"
                    className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
                  >
                    Back to login
                  </Link>
                </div>
              </form>

              <div className="mt-10 text-xs text-white/50">
                © {new Date().getFullYear()} Developed & Designed @ Al Maaref University
              </div>
            </div>

            {/* Right side */}
            <div className="relative hidden overflow-hidden xl:block">
              {/* MUwatermark */}
              <div
                className="absolute inset-0 bg-center bg-no-repeat opacity-[0.10]"
                style={{
                  backgroundImage: "url('/images/mu-logo.png')",
                  backgroundSize: "520px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/30 via-indigo-950/50 to-slate-950/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

              <div className="relative flex h-full flex-col justify-end p-10">
                <div className="rounded-2xl bg-white/10 p-4 text-sm text-white/80 ring-1 ring-white/10 backdrop-blur">
                  <span className="font-semibold text-yellow-200">Quick tip:</span>{" "}
                  Use your university email so you receive the link instantly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
