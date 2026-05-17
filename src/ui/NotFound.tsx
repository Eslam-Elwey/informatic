import { ArrowLeft, AlertTriangle } from "lucide-react";
import { useMoveBack } from "../hooks/useMoveBack";

export default function NotFound() {
  const moveBack = useMoveBack();

  return (
    <section className="min-h-screen flex items-center justify-center bg-bg-base px-4">
      <div className="w-full max-w-md text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 text-red-500">
          <AlertTriangle className="h-10 w-10" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-text-heading">
          404 - Page Not Found
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-text-muted">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Card */}
        <div className="mt-8 rounded-2xl border border-border-subtle bg-bg-surface p-6 shadow-lg">
          <p className="text-sm text-text-body">
            You might have typed the wrong URL or followed a broken link.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <button
              onClick={moveBack}
              className="flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-white transition hover:opacity-90"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>

            <a
              href="/"
              className="rounded-xl border border-border-subtle bg-bg-surface px-4 py-2.5 text-center text-text-body transition hover:bg-neutral-100 dark:hover:bg-accent-light"
            >
              Go Home
            </a>
          </div>
        </div>

        {/* Footer hint */}
        <p className="mt-6 text-xs text-text-muted">
          If you believe this is a mistake, contact support.
        </p>
      </div>
    </section>
  );
}
