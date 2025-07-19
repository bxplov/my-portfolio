"use client";

import { ProjectCard } from "@/components/project-card";
import HeadingBadge from "@/components/heading-badge";
import { FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  Image?: string;
  tags: string[];
  link?: string;
  githubLink?: string;
  
};

const projects: Project[] = [
  {
    id: "1",
    title: "De-Certify",
    description:
      "De-Certify is a dApp that turns certificates into tamper-proof NFTs, giving students ownership and enabling quick, secure verification.",
    imageUrl: "/decertify_logo.png",
    Image: "",
    tags: ["JavaScript", "HTML", "CSS", "Motoko"],
    link: "",
    githubLink: "https://github.com/bxplov/de-certify",
  },

  {
    id: "2",
    title: "SCMS",
    description:
      "SCMS is a smart app that uses facial recognition, cloud, and AI to automate attendance, manage resources, and enhance learning.",
    imageUrl: "/scms_logo.png",
    Image: "",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    link: "",
    githubLink: "https://github.com/bxplov/scms",
  },

  {
    id: "3",
    title: "Visit India",
    description:
      "Visit India is a travel app for exploring curated Indian tour packages, with a responsive design and smooth, device-friendly browsing.",
    imageUrl: "/visitindia_logo.png",
    Image: "",
    tags: ["React", "JavScript", "TailwindCSS"],

    link: "",
    githubLink: "https://github.com/bxplov/visit_india",
  },
];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const initialProjectsToShow = 3;

  const projectsToShow = showAll
    ? projects
    : projects.slice(0, initialProjectsToShow);
  const canShowMore = projects.length > initialProjectsToShow;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section
      id="projects"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge
          title="Projects"
          icon={<FolderGit2 size={14} color="#A21CAF" />}
        />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            My{" "}
            <span className="text-[#08090a] dark:text-slate-200">Projects</span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Things I’ve built and contributed to across learning and
            development
          </p>
        </div>
      </div>

      <div className="w-full space-y-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-1 gap-2 w-full">
          {projects.map((project) => {
            const isVisible = projectsToShow.some((p) => p.id === project.id);
            return (
              <div
                key={project.id}
                className={`transition-all duration-500 ease-in-out transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 h-0 -translate-y-4 overflow-hidden pointer-events-none"
                }`}
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>

        {canShowMore && (
          <div className="flex justify-start w-full">
            <Button
              variant="ghost"
              onClick={toggleShowAll}
              className="relative overflow-hidden h-10 px-4 py-2 rounded-sm border border-gray-200/80 dark:border-gray-500/10 bg-white/50 dark:bg-[#0a0a0a]/50 text-[#737373] dark:text-[#A1A1AA] hover:text-[#08090a] dark:hover:text-slate-200 hover:border-gray-900/30 dark:hover:border-gray-500/20 transition-all duration-300 ease-in-out group cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? "Show Less" : "Show More"}
              </span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
