import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Github as GitHub, Linkedin, Instagram, ArrowRight, Download } from "lucide-react";
import { SuperRobot } from "./3d/SuperRobot";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  // Роботын хэмжээг дэлгэцийн өргөнөөр тохируулах state
  const [robotScale, setRobotScale] = useState(3.2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setRobotScale(2.4);  // Утасны дэлгэцэнд томруулсан
      } else if (window.innerWidth < 1024) {
        setRobotScale(2.8);
      } else {
        setRobotScale(3.3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-20 flex items-center">
      <div className="absolute inset-0 bg-hero-pattern -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="block text-secondary">{t("hero.greeting")}</span>
              <TypeWriter text={t("hero.role")} delay={100} />
            </h1>

            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-lg">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn btn-primary">
                {t("hero.contact")} <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="#" className="btn btn-outline">
                {t("hero.resume")} <Download size={16} className="ml-2" />
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Gereltod2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/odonbaatar-gerelt-od-314298358/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/gerlt_odd/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[450px] sm:h-[650px] md:h-[700px] lg:h-[700px]"
          >
            <Canvas>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <SuperRobot position={[0, 0, 0]} scale={robotScale} />
              </Float>

              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// 🟢 2 удаа бичээд зогсдог TypeWriter компонент
function TypeWriter({ text, delay = 100 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loopCount, setLoopCount] = useState(0);
  const maxLoops = 2;

  useEffect(() => {
    if (loopCount >= maxLoops) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else if (loopCount < maxLoops - 1) {
      const pauseTimeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
        setLoopCount((prev) => prev + 1);
      }, 3000);
      return () => clearTimeout(pauseTimeout);
    } else {
      setLoopCount((prev) => prev + 1);
    }
  }, [currentIndex, text, delay, loopCount]);

  return (
    <span className="relative">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {displayText}
      </span>
      {loopCount < maxLoops && (
        <span className="absolute -right-1 top-0 h-full w-0.5 bg-secondary animate-pulse"></span>
      )}
    </span>
  );
}
