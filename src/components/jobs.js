import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const jobOpenings = [
  {
    title: "Quality Control Admin",
    category: "Staff",
    education: "S1",
    experience: "Fresh Graduate",
    location: "Tangerang Selatan",
    applyLink: "https://forms.gle/6oBHQ8t5c2GrQUvB8",
  },
  {
    title: "Finance & Accounting Supervisor",
    category: "Supervisor",
    education: "S1",
    experience: "Min 5 Years",
    location: "Tangerang Selatan",
    applyLink: "https://forms.gle/6oBHQ8t5c2GrQUvB8",
  },
  {
    title: "Supply Chain Manager",
    category: "Manager",
    education: "S1",
    experience: "Min 8 Years",
    location: "Tangerang Selatan",
    applyLink: "https://forms.gle/6oBHQ8t5c2GrQUvB8",
  },
  {
    title: "Forklift Operator",
    category: "Operator",
    education: "SMA/K",
    experience: "Min 2 Years",
    location: "Tangerang Selatan",
    applyLink: "https://forms.gle/6oBHQ8t5c2GrQUvB8",
  },
  {
    title: "Offset Print Operator (SM 74)",
    category: "Operator",
    education: "SMA/K",
    experience: "Min 5 Years",
    location: "Tangerang Selatan",
    applyLink: "https://forms.gle/nKeUJ9zDHuUkokQ96",
  },
  {
    title: "Offset Print Operator (SM 102)",
    category: "Operator",
    education: "SMA/K",
    experience: "Min 5 Years",
    location: "Tangerang Selatan",
    applyLink: "https://forms.gle/nKeUJ9zDHuUkokQ96",
  },
  {
    title: "Graphic Designer Assistant",
    category: "Staff",
    education: "SMA/K",
    experience: "Fresh Graduate",
    location: "Tangerang Selatan",
    applyLink: "https://forms.gle/nKeUJ9zDHuUkokQ96",
  },
  {
    title: "Graphic Designer Assistant",
    category: "Staff",
    education: "SMA/K",
    experience: "Fresh Graduate",
    location: "Tangerang Selatan",
    applyLink: "https://forms.gle/nKeUJ9zDHuUkokQ96",
  },
];

const translations = {
  EN: {
    title: "Current Job Openings",
    subtitle:
      "Join a team committed to continuous improvement and lasting success. See our current openings below.",
    category: "Category",
    education: "Min Education",
    experience: "Work Experience",
    location: "Location",
    notFoundTitle: "Didn't find a role that fits?",
    notFoundSubtitle: "Submit your CV for future opportunities.",
  },
  ID: {
    title: "Lowongan Pekerjaan Saat Ini",
    subtitle:
      "Bergabunglah dengan tim yang berkomitmen pada perbaikan berkelanjutan dan kesuksesan jangka panjang. Lihat lowongan kami di bawah ini.",
    category: "Kategori",
    education: "Pendidikan Min",
    experience: "Pengalaman Kerja",
    location: "Lokasi",
    notFoundTitle: "Tidak menemukan posisi yang sesuai?",
    notFoundSubtitle: "Kirim CV Anda untuk peluang di masa depan.",
  },
};

export default function Jobs() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="w-full px-6 md:px-20 lg:px-44 py-10">
      <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-medium text-left text-[var(--color-primary)]">
        {t.title}
      </h1>
      <h2 className="text-[16px] sm:text-[18px] md:text-[24px] text-justify text-[var(--color-text)] mt-2">
        {t.subtitle}
      </h2>

      <div className="mt-6 text-[var(--color-text)] space-y-6">
        {jobOpenings.map((job, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-2 border-[var(--color-text25)] pb-4"
          >
            <div>
              <h3 className="text-md sm:text-lg font-semibold">{job.title}</h3>
              <p className="text-sm sm:text-base mt-1">
                <span className="font-medium">{t.category}:</span> {job.category} |{" "}
                <span className="font-medium">{t.education}:</span> {job.education} |{" "}
                <span className="font-medium">{t.experience}:</span> {job.experience} |{" "}
                <span className="font-medium">{t.location}:</span> {job.location}
              </p>
            </div>
            <a
              href={job.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="self-end md:self-auto"
            >
              <ArrowRight
                size={40}
                className="text-[var(--color-primary)] cursor-pointer hover:scale-110 transition-transform"
              />
            </a>
          </div>
        ))}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8 border-b-2 border-[var(--color-text25)] pb-4">
          <div>
            <h3 className="text-md sm:text-lg font-semibold mb-1">
              {t.notFoundTitle}
            </h3>
            <p className="text-sm sm:text-base">
              {t.notFoundSubtitle}
            </p>
          </div>
          <a
            href="https://forms.gle/nKeUJ9zDHuUkokQ96"
            target="_blank"
            rel="noopener noreferrer"
            className="self-end md:self-auto"
          >
            <ArrowRight
              size={40}
              className="text-[var(--color-primary)] cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
