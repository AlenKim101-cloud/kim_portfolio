import { Link } from "react-router-dom";
import { ArrowRight } from "../components/Icons";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.3em] text-accent">// Error 404</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
        Signal lost.
      </h1>
      <p className="mt-4 max-w-md text-base text-muted">
        The page you're looking for doesn't exist — or the system never produced it.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Return to base <ArrowRight />
      </Link>
    </div>
  );
}
