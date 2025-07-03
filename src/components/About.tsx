import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { User, Code, Briefcase, GraduationCap, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const timeline = [
  {
    year: "2025 - Одоог хүртэл",
    title: "МТ-ийн Паспорт шалгалт",
    company: `ITPEC, ITpark Mongolia,
МОНГОЛ УЛСЫН
ЦАХИМ ХӨГЖИЛ, ИННОВАЦИ,
ХАРИЛЦАА ХОЛБООНЫ ЯАМ`,
    description:
      "Мэдээллийн технологийн инженерийн шалгалт (МТИШ) нь 1969 оноос эхтэй Японы системд суурилсан, 12 оронд харилцан хүлээн зөвшөөрөгдсөн олон улсын шалгалт юм.",
    icon: <Briefcase className="h-6 w-6" />,
    image: "/image.png",
  },
  {
    year: "2025",
    title: "Frontend Developer",
    company: "Meta",
    description:
      "Олон төрлийн вэб сайт бүтээж, орчин үеийн UI/UX дизайн, mobile responsive шийдлүүдийг хэрэгжүүлсэн.",
    icon: <Code className="h-6 w-6" />,
    link: "https://coursera.org/share/151bfdd99665c84d0e90d616a782440f",
  },
  {
    year: "2024-2025",
    title: "IBM Back-End Development Certificate",
    company: "IBM",
    description:
      "Практик даалгавруудаар дамжуулан API сервер хөгжүүлэх, authentication шийдэл, хэрэглэгчийн систем болон блог платформ бүтээх чадвар эзэмшсэн.",
    icon: <Code className="h-6 w-6" />,
    link: "https://coursera.org/share/0a162c9cc5285ee69da4a3e221be4b3e",
  },
  {
    year: "2024",
    title: "Google UX Design Certificate",
    company: "Google",
    description:
      "UX дизайны үндсэн ойлголт, хэрэглэгчийн судалгаа, wireframe болон прототип бүтээх аргачлал судалсан.",
    icon: <GraduationCap className="h-6 w-6" />,
  },
];

export function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

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
          {/* Profile хэсэг */}
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
                  className="w-full h-full object-cover"
                />
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
              <p>{t("about.bio.part1")}</p>
              <p>{t("about.bio.part2")}</p>
              <p>{t("about.bio.part3")}</p>
            </div>
          </motion.div>

          {/* Timeline хэсэг */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative pl-8 before:content-[''] before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-muted"
          >
            <h3 className="text-2xl font-bold mb-6">{t("about.timeline")}</h3>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative group ${
                    item.link ? "cursor-pointer hover:opacity-80" : ""
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  onClick={() => {
                    if (item.link) window.open(item.link, "_blank");
                  }}
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

                  {item.image && (
                    <button
                      className="mt-2 text-sm text-blue-500 hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalImage(item.image);
                      }}
                    >
                      Харах
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal зураг */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={modalImage}
              alt="Enlarged"
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white"
              onClick={() => setModalImage(null)}
            >
              <X className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
