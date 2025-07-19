import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Trophy, GraduationCap } from "lucide-react";

type Education = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Education: Education[] = [
  {
    title: "Birla Institute of Technology, Mesra",
    description:
      "Master of Computer Applications - [Ongoing]",
    icon: <GraduationCap className="w-5 h-5" color="#f5c60bff" />,
  },
  {
    title: "Chatra College, Chatra - Vinoba Bhave University",
    description:
      "Bachelor of Computer Applications",
    icon: <GraduationCap className="w-5 h-5" color="#0bf5caff" />,
  },
  {
    title: "Dayanand Anglo Vedic (DAV) Public School, Hehal",
    description: "AISSCE",
    icon: <GraduationCap className="w-5 h-5" color="#f275f9ff" />,
  },
  {
    title: "Jawahar Navodaya Vidyalaya (JNV), Chatra ",
    description: "AISSE",
    icon: <GraduationCap className="w-5 h-5" color="#ff77a2ff" />,
  },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-10"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge
          title="Education"
          icon={<Trophy size={14} color="#22C55E" />}
        />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            <span className="text-[#08090a] dark:text-slate-200">
              My Education
            </span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            Where I’ve learned, grown, and built strong foundations
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 w-full">
        {Education.map((item, index) => (
          <SpotlightCard
            key={index}
            gradientColor="rgba(100, 116, 139, 0.50)"
            lightGradientColor="rgba(8, 9, 10, 0.2)"
            spotlightSize={350}
            glowEffect={true}
            glowSize={150}
            glowOpacity={0.15}
            className="p-6 rounded-sm border border-gray-200/80 dark:border-gray-500/10 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-gray-500/20 transition-all duration-300"
          >
            <div className="flex flex-col xs:flex-row items-start gap-4">
              <div className="flex-shrink-0 p-2 rounded-md bg-[#f4f4f5] dark:bg-[#1f1f1f]">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#08090a] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-[#525252] dark:text-[#D4D4D8] text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
