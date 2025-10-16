import { useState, useEffect } from "react";

export default function ImageWithSideList({
  items = [],
  selectedKey,
  onSelect,
  minH = 480,
  titleRender = (k) => k,
  imageHeight = 290,
}) {
  const [sel, setSel] = useState(selectedKey ?? items[0]?.key);
  useEffect(() => setSel(selectedKey ?? items[0]?.key), [selectedKey, items]);

  const cur = items.find((i) => i.key === sel) || items[0] || {};
  const handleSelect = (k) => {
    setSel(k);
    onSelect?.(k);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:items-stretch">
      {/* SIDELIST */}
      <aside className="md:col-span-4">
        <div
          className="border border-[var(--color-text25)]/40 bg-white"
          style={{ minHeight: `min(100%, ${minH}px)` }}
        >
          <ul className="h-full overflow-auto divide-y divide-[var(--color-text5)]">
            {items.map(({ key }) => {
              const active = key === sel;
              return (
                <li key={key}>
                  <button
                    onClick={() => handleSelect(key)}
                    className={`w-full text-left px-4 py-3.5 flex items-center justify-between gap-3
                                transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30
                                ${active
                                  ? "text-[var(--color-primary)] font-semibold bg-[var(--color-primary)]/[0.06] border-l-4 border-[var(--color-primary)]"
                                  : "text-[var(--color-text)] hover:bg-[var(--color-text5)] border-l-4 border-transparent"}`}
                    aria-current={active ? "true" : "false"}
                  >
                    <span className="text-[15px] leading-[1.35] truncate">
                      {titleRender(key)}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-4 w-4 transition ${active ? "opacity-100 text-[var(--color-primary)]" : "opacity-0 group-hover:opacity-60"}`}
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* PREVIEW */}
      <div className="md:col-span-8">
        <article
          className="border border-[var(--color-text25)]/40 bg-white"
          style={{ minHeight: `min(100%, ${minH}px)` }}
        >
          {/* gambar tinggi tetap */}
          <div
            className="relative w-full"
            style={{ height: `${imageHeight}px` }}
          >
            {cur?.image ? (
              <img
                src={cur.image}
                alt={cur.key || "preview"}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-text5)]">
                <span className="text-[13px] text-[var(--color-text)]/70">
                  No image
                </span>
              </div>
            )}
          </div>

          {/* deskripsi tidak mengubah tinggi gambar; scroll jika panjang */}
          {cur?.description && (
            <div className="border-t border-[var(--color-text25)]/50 p-4 md:p-5 bg-white max-h-[calc(100%-var(--imgH))]">
              <p className="text-[14.5px] leading-relaxed text-[var(--color-darker)]">
                {cur.description}
              </p>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}