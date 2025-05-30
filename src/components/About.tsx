import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  User,
  Code,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { useTranslation } from "react-i18next";
const timeline = [
  {
    year: "2025 - Одоог хүртэл",
    title: "AI суурьтай Fitness App хөгжүүлэлт",
    company: "Багийн төсөл",
    description:
      "AI ашиглан хүний биеийн онцлогт тохирсон хоол, дасгал, ус, нойрыг санал болгодог аппликейшн бүтээсэн. React Native, Tailwind, i18n ашигласан.",
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    year: "2025",
    title: "Frontend хөгжүүлэлт",
    company: "HTML, CSS, React, Tailwind,  ...",
    description:
      "Олон төрлийн вэбсайт бүтээж, орчин үеийн UI дизайн, хариу үйлдэлтэй хуудас зохион бүтээв. Tailwind CSS ашиглан хурдан хөгжүүлэлтийг хийсэн.",
    icon: <Code className="h-6 w-6" />,
  },
  {
    year: "2024-2025",
    title: "Backend хөгжүүлэлт",
    company: "Node.js, Prisma, MySQL, MongoDB, Next.js, ...",
    description:
      "API server үүсгэж, хэрэглэгчийн нэвтрэлт, authentication, блог систем зэрэг backend шийдлүүдийг хөгжүүлсэн. Prisma ORM болон MySQL/MongoDB ашигласан.",
    icon: <Code className="h-6 w-6" />,
  },
  {
    year: "2024",
    title: "JavaScript болон Python судалгаа",
    company: "spoj, hackerrank, leetcode, ...",
    description:
      "JavaScript болон Python хэл дээр олон бодлого бодож, жижиг тоглоомууд хийж туршсан. Тоглоомын логик, DOM interaction, canvas ашигласан.",
    icon: <GraduationCap className="h-6 w-6" />,
  },
];


export function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  // const [image, setImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImage(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <section
      id="about"
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
            {t("about.title")}
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("about.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <User size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t("about.whoIAm")}</h3>
            </div>

            <div className="relative group mb-8">
              <motion.div
                className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={"./hero.jpg"}
                  alt="Profile"
                  className="w-full h-full object-cover "
                />

                {/* <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                >
                  <label
                    htmlFor="photo-upload"
                    className="cursor-pointer flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <Upload size={16} />
                    <span>Change Photo</span>
                  </label>
                  <input
                    type="file"
                    id="photo-upload"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </motion.div> */}
              </motion.div>

              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl -z-10 opacity-0 blur-xl"
                animate={{
                  opacity: isHovered ? 0.3 : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                {t("about.bio.part1")}
              </p>
              <p>
                {t("about.bio.part2")}
              </p>
              <p>
                {t("about.bio.part3")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative pl-8 before:content-[''] before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-muted"
          >
            <h3 className="text-2xl font-bold mb-6">{t("about.timeline")}	</h3>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="absolute -left-12 bg-white dark:bg-slate-800 rounded-full p-1.5 border-4 border-muted text-primary">
                    {item.icon}
                  </div>
                  <div className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                    {item.year}
                  </div>
                  <h4 className="text-lg font-semibold">
                    {item.title}
                    <span className="text-primary ml-2">@</span>
                    <span className="text-primary ml-1">{item.company}</span>
                  </h4>
                  <p className="mt-2 text-slate-700 dark:text-slate-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
