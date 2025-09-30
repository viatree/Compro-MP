import Link from "next/link";

function CleanCallout({ href = "/contact", children, cta = "Contact us" }) {
  return (
    <aside
      role="note"
      aria-label="Custom solutions notice"
      className="
        mt-8 w-full border border-[var(--color-primary)]/20
        bg-[var(--color-primary)]/6 px-4 py-4 sm:px-5 sm:py-4
      "
    >
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-[var(--color-text)] sm:flex-1">
          {children}
        </p>

        <Link
          href={href}
          className="
            inline-flex items-center gap-2
            bg-[var(--color-primary)] px-3.5 py-2
            text-white text-[13px] sm:text-[14px] font-medium
            hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-0
            focus:ring-[var(--color-primary)]/40 active:opacity-85 transition
          "
        >
          {cta}
          
        </Link>
      </div>
    </aside>
  );
}

export default CleanCallout;
