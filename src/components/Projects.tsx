import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {  Code, Layout } from "lucide-react";
import { useTranslation } from "react-i18next";

// Project data
const projectsData = [
  {
    id: 1,
    title: "Bluvi Fitness App",
    description:
      "Хиймэл оюунд суурилсан эрүүл мэндийн апп. Хэрэглэгчийн дасгал, хоол тэжээл, нойр, усны хэрэглээг хянадаг.",
    image: "/zurag.png",
    tags: ["React Native", "MongoDB", "TypeScript", "Tailwind CSS", "AI"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "AI дасгал төлөвлөгөө",
      "Хоолны зөвлөмж",
      "Нойр болон усны хяналт",
      "Прогрессийн тайлан",
    ],
  },
  {
    id: 2,
    title: "StartUp Platform",
    description:
      "Залуу энтрепренерүүд стартапаа нийтлэх, танилцуулах, дэмжүүлэх боломжтой платформ.",
    image: "zurag1.png",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "Стартап нийтлэх",
      "Ангиллаар шүүх",
      "Сэтгэгдэл, лайк",
      "Админ хяналт",
    ],
  },
  {
    id: 3,
    title: "UI/UX Design Resources Platform",
    description:
      "UI/UX загвар, вэб болон апп дизайн хийхэд зориулсан нөөц, жишээ, загваруудыг нэг дороос үзэх боломжтой платформ.",
    image: "zurag2.png",
    tags: ["Figma", "UI Kits", "UX Design", "Templates"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "UI/UX дизайн загварууд татах",
      "Өөрийн төсөлд тохируулах шаблонууд",
      "Дизайнеруудын бүтээлүүдээс санаа авах",
      "Интерактив dashboard загварууд",
    ],
  },
  {
    id: 4,
    title: "Cryptocurrency Dashboard",
    description:
      "Крипто валютын үнэ ханш, график, болон худалдааны мэдээллийг харуулдаг веб апп.",
    image: "zurag3.png",
    tags: ["React", "CoinGecko API", "Chart.js", "Tailwind CSS", "Node.js"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "Реалтайм крипто үнэ ханш",
      "Өдөр тутмын график",
      "Валютын харьцуулалт",
      "Хэрэглэгчийн дуртай крипто жагсаалт",
    ],
  },
  {
    id: 5,
    title: "E-Commerce Mobile App",
    description:
      "Онлайн дэлгүүрийн апп. Бараа үзэх, сагслах, захиалах үйлдлүүдтэй.",
    image: "zurag4.png",
    tags: ["React Native", "Firebase", "Redux", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "Бараа жагсаалт",
      "Сагсны систем",
      "Төлбөрийн интеграци",
      "Realtime захиалга хяналт",
    ],
  },
  {
    id: 6,
    title: "Coffee Shop Website",
    description:
      "Кофены дэлгүүрийн цэс, байрлал, захиалгын мэдээлэл бүхий вэб сайт.",
    image: "zurag5.png",
    tags: ["React", "Tailwind CSS", "Firebase", "Stripe"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "Цэс үзэх: кофены төрөл, үнэ",
      "Онлайн захиалга хийх боломж",
      "Хэрэглэгчийн сэтгэгдэл, үнэлгээ",
      "Газрын байршил болон цагийн мэдээлэл",
    ],
  },
  {
    id: 7,
    title: "AI Video Creation Platform",
    description:
      "Хэрэглэгчид AI ашиглан текстээс видео үүсгэж, засварлах боломжтой платформ.",
    image: "zurag6.png",
    tags: ["Next.js", "TensorFlow.js", "Tailwind CSS", "Firebase"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "Текст орж AI-аар видео үүсгэх",
      "Видео засварлах хэрэгсэл",
      "Видео хадгалах болон хуваалцах боломж",
      "Хэрэглэгчийн бүртгэл ба эрхийн удирдлага",
    ],
  },

  {
    id: 8,
    title: "Restaurant Menu Website",
    description:
      "Ресторан, кафе, хоолны цэсийг харуулах, захиалга авах боломжтой вэб сайт.",
    image: "zurag7.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    demoUrl: "#",
    codeUrl: "#",
    features: [
      "Хоол, ундааны төрөл бүрийн цэс",
      "Зурагтай бүтээгдэхүүн харуулах",
      "Онлайн захиалга хийх боломж",
      "Хэрэглэгчийн сэтгэгдэл үлдээх хэсэг",
    ],
  },
];

// Filter categories
const categories = ["All", "React", "Node.js", "TypeScript", "Next.js"];

export function Projects() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(activeCategory));

  return (
    <section
      id="projects"
      ref={ref}
      className="section bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {t("projects.title")}
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("projects.subtitle")}
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-muted/20 hover:bg-muted/40"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-bold truncate">
                        {project.title}
                      </h4>
                      {/* <div className="flex space-x-2">
                        <a
                          href={project.demoUrl}
                          className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="View demo"
                        >
                          <ExternalLink size={16} className="text-white" />
                        </a>
                        <a
                          href={project.codeUrl}
                          className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="View code"
                        >
                          <Github size={16} className="text-white" />
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted/20 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {projectsData.find((p) => p.id === selectedProject) && (
                <>
                  <div className="relative h-[300px]">
                    <img
                      src={
                        projectsData.find((p) => p.id === selectedProject)!
                          .image
                      }
                      alt={
                        projectsData.find((p) => p.id === selectedProject)!
                          .title
                      }
                      className="w-full h-full object-cover"
                    />
                    <button
                      className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full transition-colors"
                      onClick={() => setSelectedProject(null)}
                      aria-label="Close"
                    >
                      <X size={20} className="text-white" />
                    </button>
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">
                      {
                        projectsData.find((p) => p.id === selectedProject)!
                          .title
                      }
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      {
                        projectsData.find((p) => p.id === selectedProject)!
                          .description
                      }
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Layout size={18} className="mr-2" />{" "}
                        {t("projects.features")}
                      </h3>
                      <ul className="ml-6 space-y-2 list-disc text-slate-600 dark:text-slate-400">
                        {projectsData
                          .find((p) => p.id === selectedProject)!
                          .features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Code size={18} className="mr-2" />{" "}
                        {t("projects.technologies")}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {projectsData
                          .find((p) => p.id === selectedProject)!
                          .tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-muted/20 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* <div className="flex space-x-4">
                      <a
                        href={
                          projectsData.find((p) => p.id === selectedProject)!
                            .demoUrl
                        }
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <ExternalLink size={16} className="ml-2" />
                      </a>
                      <a
                        href={
                          projectsData.find((p) => p.id === selectedProject)!
                            .codeUrl
                        }
                        className="btn btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code <Github size={16} className="ml-2" />
                      </a>
                    </div> */}
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

// X icon component for the modal close button
function X(props: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  );
}
