import { site, experience, projects, hackathons, tech } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";
import { IconPlaceholder } from "@/components/IconPlaceholder";
import { Intro } from "@/components/Intro";
import { SocialsAndResume } from "@/components/SocialsAndResume";
import { SubtleGridBackground } from "@/components/SubtleGridBackground";
import { ExperienceList } from "@/components/ExperienceList";
import { ProjectCard } from "@/components/ProjectCard";
import { TechFooter } from "@/components/TechFooter";
import { Hackathons } from "@/components/Hackathons";

export default function Home() {
  return (
    <>
      <SubtleGridBackground />
      <ThemeToggle />
      <main className="relative min-h-screen text-[var(--fg)]">
        <div className="relative z-10 mx-auto max-w-[720px] px-6 py-16 md:py-24">
          <div className="space-y-16 md:space-y-24">
            <div className="space-y-8">
              <div className="relative w-fit">
                <IconPlaceholder src={site.avatar} altSrc={site.avatarAlt} alt={site.name} />
                <span
                  aria-hidden
                  className="animate-hint-wiggle pointer-events-none absolute -top-10 left-24 flex flex-col items-start text-[var(--muted)] sm:left-28"
                >
                  <span className="font-hand text-[26px] leading-none whitespace-nowrap">
                    psst - click me
                  </span>
                  <svg
                    width="64"
                    height="46"
                    viewBox="0 0 64 46"
                    fill="none"
                    className="mt-1 -ml-1"
                  >
                    <path
                      d="M54 3 C 40 6, 24 14, 15 34"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 26 L 14.5 35.5 L 23 29"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <Intro name={site.name} lines={site.bio} />
              <SocialsAndResume
                socials={site.socials}
                resumeHref={site.resume.href}
                resumeLabel={site.resume.label}
              />
            </div>

            <section>
              <h2 className="section-label">Experience</h2>
              <ExperienceList items={experience} />
            </section>

            <section>
              <h2 className="section-label">Projects</h2>
              <div className="space-y-12">
                {projects.map((p) => (
                  <ProjectCard key={p.title} {...p} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="section-label">Hackathons</h2>
              <Hackathons items={hackathons} />
            </section>

            <TechFooter items={tech} />
          </div>
        </div>
      </main>
    </>
  );
}
