"use client";

import HeadingBadge from "@/components/heading-badge";
import { SiCplusplus, SiReactrouter, SiVercel } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { Lightbulb } from "lucide-react";

type Skill = {
  name: string;
  icon?: React.ReactNode | string;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", icon: <IoLogoJavascript color="#00599C" /> },
      { name: "HTML", icon: <FaHtml5 color="#F7DF1E" /> },
      { name: "CSS", icon: <FaCss3 color="#E34F26" /> },
      { name: "C++", icon: <SiCplusplus color="#1572B6" /> },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "React Router", icon: <SiReactrouter color="#339933" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill color="#ffffff" /> },
      //{ name: "TailwindCSS", icon: <RiTailwindCssFill color="#06B6D4" /> },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
      { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
      { name: "Vercel", icon: <SiVercel color="#d7d7d7ff" /> },
    ],
  },
  /*{
    name: "Databases",
    skills: [{ name: "MongoDB", icon: <SiMongodb color="#47A248" /> }],
  },*/
];

const SkillTag = ({ name, icon }: Skill) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-sm bg-white dark:bg-[#0a0a0a] border border-gray-200/80 dark:border-slate-500/10 px-3 py-1.5 transition-all duration-300 hover:border-gray-900/30 dark:hover:border-slate-500/10 hover:bg-gray-50 dark:hover:bg-[#111111] cursor-pointer">
      {icon && (
        <span className="flex items-center justify-center size-6 p-1 rounded-sm bg-gray-100 dark:bg-[#191a1a] text-xs font-medium text-[#08090a] dark:text-slate-200">
          {icon}
        </span>
      )}
      <span className="text-sm font-medium text-[#08090a] dark:text-gray-200">
        {name}
      </span>
    </div>
  );
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge
          title="Skills"
          icon={<Lightbulb size={14} color="#2563EB" />}
        />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            <span className="text-[#08090a] dark:text-slate-200">Skills</span> I
            have
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Technologies and tools I&apos;ve worked with and enjoy using
          </p>
        </div>
      </div>

      <div className="w-full space-y-5">
        {skillCategories.map((category) => (
          <div key={category.name} className="space-y-3">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#08090a] dark:bg-slate-100"></span>
              {category.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillTag key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
