import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found — Aswanth Chandran"
        description="This page doesn't exist."
        path="/404"
      />
      <main className="min-h-screen flex items-center justify-center px-6 text-center">
        <div>
          <p className="font-mono text-signal text-sm mb-4">error 404</p>
          <pre className="font-mono text-ink-soft text-sm leading-6 inline-block text-left bg-surface border border-line rounded-xl p-6 mb-8">
{`$ curl ${typeof window !== "undefined" ? window.location.pathname : "/this-page"}
< HTTP/1.1 404 Not Found
< this route doesn't exist yet`}
          </pre>
          <h1 className="font-display font-semibold text-2xl text-ink mb-3">
            That page took a wrong turn.
          </h1>
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-ink text-paper text-sm font-medium px-6 py-3 hover:bg-signal transition-colors"
          >
            Take me home
          </Link>
        </div>
      </main>
    </>
  );
}
