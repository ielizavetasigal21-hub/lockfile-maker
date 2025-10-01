// src/app/home/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight">Welcome to FilmSlate</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Start by creating your taste profile, or jump straight into browsing.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/onboarding" // ← change if your onboarding route is different
          className="rounded-md bg-black px-5 py-3 text-white hover:opacity-90"
        >
          Create my taste profile
        </Link>

        <Link
          href="/signup" // or /auth/sign-up if that’s your auth route
          className="rounded-md border px-5 py-3 hover:bg-muted"
        >
          Sign up / Log in
        </Link>

        <Link
          href="/browse"
          className="rounded-md border px-5 py-3 hover:bg-muted"
        >
          Browse films
        </Link>
      </div>
    </main>
  );
}