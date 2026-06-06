import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--forest-green)]/20 bg-[var(--forest-green)]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.svg"
            alt="Shivam logo"
            width={36}
            height={36}
          />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--cream)]">
              Shivam Kumar
            </p>
          </div>
        </div>

        <p className="text-xs text-[var(--cream)]/70">
          © 2024 Shivam Kumar. All Rights Reserved.
        </p>

        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.2em] text-[var(--cream)]/70">
          <Link href="#" className="transition hover:text-[var(--cream)]">
            Privacy Policy
          </Link>
          <Link href="#" className="transition hover:text-[var(--cream)]">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
