import { site, experience, projects, hackathons, tech } from "@/lib/data";
import { ThemeToggle } from "@/components/ThemeToggle";
import { IconPlaceholder } from "@/components/IconPlaceholder";
import { Intro } from "@/components/Intro";
import { SocialsAndResume } from "@/components/SocialsAndResume";
import { ExperienceList } from "@/components/ExperienceList";
import { ProjectCard } from "@/components/ProjectCard";
import { TechFooter } from "@/components/TechFooter";
import { Hackathons } from "@/components/Hackathons";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
          <div className="space-y-16 md:space-y-24">
            <div className="space-y-8">
              <IconPlaceholder src={site.avatar} alt={site.name} />
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
