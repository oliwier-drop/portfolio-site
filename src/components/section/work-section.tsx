/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/context";
import type { ResumeData } from "@/data/resume";
import { Badge } from "@/components/ui/badge";

type WorkEntry = ResumeData["work"][number];

function LogoImage({
  src,
  alt,
  scale = 1,
}: {
  src: string;
  alt: string;
  scale?: number;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden flex-none flex items-center justify-center bg-background">
      <img
        src={src}
        alt={alt}
        className="object-contain"
        style={{ width: `${scale * 100}%`, height: `${scale * 100}%` }}
        onError={() => setImageError(true)}
      />
    </div>
  );
}

function ExpandIcons() {
  return (
    <span className="relative inline-flex items-center w-3.5 h-3.5">
      <ChevronRight
        className={cn(
          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
          "translate-x-0 opacity-0",
          "group-hover:translate-x-1 group-hover:opacity-100",
          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0",
        )}
      />
      <ChevronDown
        className={cn(
          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
          "opacity-0 rotate-0",
          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180",
        )}
      />
    </span>
  );
}

function formatRange(
  start: string,
  end: string | undefined,
  presentLabel: string,
) {
  return `${start} - ${end ?? presentLabel}`;
}

function groupByCompany(work: readonly WorkEntry[]) {
  const groups: { company: string; items: WorkEntry[] }[] = [];
  for (const item of work) {
    const last = groups[groups.length - 1];
    if (last && last.company === item.company) {
      last.items.push(item);
    } else {
      groups.push({ company: item.company, items: [item] });
    }
  }
  return groups;
}

export default function WorkSection() {
  const { data } = useI18n();
  const presentLabel = data.sections.work.presentLabel;
  const groups = groupByCompany(data.work);

  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {groups.map((group) => {
        const first = group.items[0];

        return (
          <AccordionItem
            key={group.company}
            value={group.company}
            className="w-full border-b-0 grid gap-2"
          >
            <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
              <div className="flex items-start gap-x-3 w-full text-left">
                <LogoImage
                  src={first.logoUrl}
                  alt={first.company}
                  scale={"logoScale" in first ? first.logoScale : 1}
                />
                <div className="flex-1 min-w-0 grid gap-2">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {first.company}
                    <ExpandIcons />
                  </div>

                  {group.items.map((work) => (
                    <div
                      key={`${work.title}-${work.start}`}
                      className="grid gap-1"
                    >
                      <div className="flex items-center justify-between gap-x-3">
                        <div className="font-sans text-sm text-muted-foreground min-w-0 flex items-center gap-2">
                          <span className="shrink-0">{work.title}</span>
                          {work.badges.length > 0 && (
                            <div className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-200 ease-out group-data-[state=open]:grid-cols-[1fr]">
                              <div className="overflow-hidden min-w-0">
                                <div className="flex gap-1 pl-0.5">
                                  {work.badges.map((badge) => (
                                    <Badge
                                      key={badge}
                                      variant="outline"
                                      className="text-[10px] font-medium h-5 px-1.5 border-border whitespace-nowrap"
                                    >
                                      {badge}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                          {formatRange(work.start, work.end, presentLabel)}
                        </div>
                      </div>
                      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-out group-data-[state=open]:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <p className="text-xs sm:text-sm text-muted-foreground pt-1">
                            {work.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionTrigger>

            {/* Keeps Radix accordion state wired; content animates under each role above */}
            <AccordionContent className="hidden" />
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
