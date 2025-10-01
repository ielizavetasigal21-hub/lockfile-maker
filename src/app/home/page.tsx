// src/app/home/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <h1 className="h1">Welcome to FilmSlate</h1>
      <p className="lead">
        Start by creating your taste profile, or jump straight into browsing.
      </p>

      <div className="actions">
        <Link href="/onboarding" className="btn btn-primary">
          Create my taste profile
        </Link>
        <Link href="/signup" className="btn">
          Sign up / Log in
        </Link>
        <Link href="/browse" className="btn">
          Browse films
        </Link>
      </div>
    </main>
  );
}