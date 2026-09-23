import { Fragment, type ReactNode } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import PhotosSection from "@/components/section/photos-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";
import { LocaleProvider, useI18n } from "@/i18n/context";
import type { Locale } from "@/i18n/config";

const BLUR_FADE_DELAY = 0.04;

function HomePageContent() {
  const { data, ui } = useI18n();
  const firstName = data.name.split(" ")[0];

  const sectionComponents: Record<string, ReactNode> = {
    about: (
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">{data.sections.about.heading}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{data.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
    ),
    work: (
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{data.sections.work.heading}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
    ),
    education: (
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{data.sections.education.heading}</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {data.education.map((education, index) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
                <a
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-x-3 group"
                >
                  {education.logoUrl ? (
                    <div className="size-8 md:size-10 p-1 border border-border rounded-full shadow ring-2 ring-border overflow-hidden flex-none flex items-center justify-center bg-white dark:border-white/50 dark:ring-white/40">
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="object-contain"
                        style={{
                          width: `${("logoScale" in education ? education.logoScale ?? 1 : 1) * 100}%`,
                          height: `${("logoScale" in education ? education.logoScale ?? 1 : 1) * 100}%`,
                        }}
                      />
                    </div>
                  ) : (
                    <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                  )}
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-x-3">
                      <div className="font-semibold leading-snug flex items-center gap-2 text-pretty">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="text-xs tabular-nums text-muted-foreground sm:text-right sm:shrink-0 sm:whitespace-nowrap">
                        <span>{education.start} - {education.end}</span>
                      </div>
                    </div>
                    <div className="font-sans text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
                      <span>{education.major}</span>
                      {education.degree.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-md border border-border px-1.5 h-5 text-[10px] font-medium text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    ),
    skills: (
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{data.sections.skills.heading}</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, id) => {
              const iconSrc =
                "iconUrl" in skill && skill.iconUrl
                  ? skill.iconUrl
                  : "slug" in skill && skill.slug
                    ? `https://cdn.simpleicons.org/${skill.slug}`
                    : undefined;

              return (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {iconSrc && (
                    <img
                      src={iconSrc}
                      alt=""
                      className="size-4 rounded overflow-hidden object-contain"
                    />
                  )}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
    ),
    projects: (
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
    ),
    hackathons: (
      <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section>
    ),
    photos: <PhotosSection />,
    contact: (
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    ),
  };

  const orderedSections = Object.entries(data.sections)
    .filter(([, s]) => s.enabled)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key);

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={ui.greeting(firstName)}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={data.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage
                  alt={data.name}
                  src={data.avatarUrl}
                  className="object-cover scale-[1.45] origin-center translate-y-6"
                />
                <AvatarFallback>{data.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      {orderedSections.map((key) => (
        <Fragment key={key}>
          {sectionComponents[key]}
        </Fragment>
      ))}
    </main>
  );
}

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <HomePageContent />
    </LocaleProvider>
  );
}
