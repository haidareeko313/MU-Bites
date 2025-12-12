import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword = true }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();
    post("/login", {
      onFinish: () => reset("password"),
    });
  };

  return (
    <>
      <Head title="Login" />

      <div className="min-h-screen w-full bg-slate-950 text-slate-900">
        {/* Background */}
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
            {/* Left: Login */}
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
                Welcome back
              </h1>
              <p className="mt-2 text-sm text-white/70">
                Sign in to browse today’s menu, offers, and meal details.
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
                      ✉️
                    </span>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => setData("email", e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-10 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-yellow-300/40 focus:bg-white/10"
                      placeholder="numbers@mu.edu.lb"
                      autoComplete="username"
                    />
                  </div>
                  {errors.email && (
                    <div className="mt-2 text-sm text-red-300">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Password
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-white/40">
                      🔒
                    </span>
                    <input
                      type="password"
                      value={data.password}
                      onChange={(e) => setData("password", e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-10 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-yellow-300/40 focus:bg-white/10"
                      placeholder="••••••••"
                      autoComplete="current-password"
                    />
                  </div>
                  {errors.password && (
                    <div className="mt-2 text-sm text-red-300">
                      {errors.password}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-white/75">
                    <input
                      type="checkbox"
                      checked={data.remember}
                      onChange={(e) => setData("remember", e.target.checked)}
                      className="h-4 w-4 rounded border-white/20 bg-white/10 text-yellow-400 focus:ring-yellow-300/40"
                    />
                    Keep me logged in
                  </label>

                  {canResetPassword && (
                    <Link
                      href="/forgot-password"
                      className="text-sm text-yellow-200/90 underline-offset-4 hover:underline"
                    >
                      Forgot password?
                    </Link>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="group relative w-full overflow-hidden rounded-2xl bg-yellow-400 px-4 py-3 font-semibold text-slate-950 shadow-lg shadow-yellow-400/20 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="relative z-10">
                    {processing ? "Signing in..." : "Log in"}
                  </span>
                  <span className="absolute inset-y-0 right-0 w-20 translate-x-10 bg-white/30 blur-xl transition group-hover:translate-x-0" />
                </button>

                {/* Register  */}
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/70">
                  <span>New student?</span>
                  <Link
                    href="/register"
                    className="font-semibold text-yellow-200 underline-offset-4 hover:underline"
                  >
                    Create an account
                  </Link>
                </div>
              </form>

              <div className="mt-10 text-xs text-white/50">
                © {new Date().getFullYear()} Developed & Designed @ Al Maaref University
              </div>
            </div>

            {/* MU watermark */}
            <div className="relative hidden overflow-hidden xl:block">
              <div
                className="absolute inset-0 bg-center bg-no-repeat opacity-[0.10]"
                style={{
                  backgroundImage: "url('/images/mu-logo.png')",
                  backgroundSize: "520px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/30 via-indigo-950/50 to-slate-950/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

              <div className="relative flex h-full flex-col justify-between p-10">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-white/90">
                    MU • Student Menu
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
                    Campus Dining
                  </div>
                </div>

                <div className="max-w-md">
                  <h2 className="text-3xl font-semibold tracking-tight text-white">
                    Delicious meals, made easy.
                  </h2>
                  <p className="mt-2 text-sm text-white/75">
                    Explore categories, daily specials, and meal details — all in one place.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["🍳 Breakfast", "🍔 Lunch", "🍕 Dinner", "☕ Coffee", "🍰 Desserts", "🥤 Drinks"].map(
                      (t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10"
                        >
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 text-sm text-white/80 ring-1 ring-white/10 backdrop-blur">
                  <span className="font-semibold text-yellow-200">Quick tip:</span>{" "}
                  Use search and filters to find meals faster (halal, vegetarian, spicy, etc.).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
