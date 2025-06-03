import { ArrowRight } from "lucide-react";

// Data lowongan pekerjaan
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

export default function Careers() {
  return (
    <>
      <section className="w-full mx-auto lg:px-44 md:pl-20">
        <h1 className="my-2 text-3xl font-bold text-left text-[var(--color-primary)]">
          Current Jobs Openings
        </h1>
        <h2 className="text-start text-justify text-[var(--color-text)]">
          Join a team committed to continuous improvement and lasting success. See our current openings below.
        </h2>
        <div className="text-[var(--color-text)]">
          {jobOpenings.map((job, index) => (
            <div key={index} className="flex justify-between items-center py-4 border-b-2 border-[var(--color-text25)]">
              <div>
                <h3 className="text-lg font-semibold my-4">{job.title}</h3>
                <p className="text-md text-[var(--color-text)]">
                  <span className="font-semibold">Category:</span> {job.category} |{" "}
                  <span className="font-semibold">Min Education:</span> {job.education} |{" "}
                  <span className="font-semibold">Work Experience:</span> {job.experience} |{" "}
                  <span className="font-semibold">Location:</span> {job.location}
                </p>
              </div>
              <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                <ArrowRight
                  size={50}
                  className="text-[var(--color-primary)] cursor-pointer hover:scale-110 transition-transform"
                />
              </a>
            </div>
          ))}

          {/* Additional CV submission section */}
          <div className="flex justify-between items-center mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Didn&apos;t find a role that fits?
              </h3>
              <p className="text-md text-[var(--color-text)]">
                Submit your CV for future opportunities.
              </p>
            </div>
            <a
              href="https://forms.gle/nKeUJ9zDHuUkokQ96"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowRight
                size={50}
                className="text-[var(--color-primary)] cursor-pointer hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
