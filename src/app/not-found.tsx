import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-brand-cream sand-pattern">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">🏜️</div>
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-brand-dark mb-4">404</h1>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-dark mb-4">Lost in the Desert?</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for seems to have drifted into the dunes. Let us guide you back.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/contact" className="btn-primary !bg-brand-dark">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
