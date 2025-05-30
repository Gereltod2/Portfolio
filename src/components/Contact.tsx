import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send} from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" ref={ref} className="section">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {t("contact.title")}
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("contact.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-6">
                {t("contact.info.title")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      {t("contact.info.email")}
                    </h4>
                    <a
                      href="mailto:ogee1228@gmail.com"
                      className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                    >
                      ogee1228@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      {t("contact.info.phone")}
                    </h4>
                    <a
                      href="tel:+15555555555"
                      className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                    >
                      +(976) 91621228
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">
                      {t("contact.info.location")}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Ulaanbaatar, UB, Mongolia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold mb-6">
                {t("contact.availability.title")}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {t("contact.availability.description")}
              </p>
              <div className="flex items-center space-x-2 text-secondary">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                </span>
                <span className="font-medium">{t("contact.availability.status")}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-6">{t("contact.form.title")}</h3>

              <form className="space-y-6 contact-form" action="https://formsubmit.co/ogee1228@gmail.com" method="POST" >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.form.name")}  
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 bg-transparent"
                      placeholder={t("contact.form.name")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 bg-transparent"
                      placeholder={t("contact.form.email")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 bg-transparent"
                    placeholder={t("contact.form.subject")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 bg-transparent resize-none"
                    placeholder={t("contact.form.message")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full sm:w-auto"
                >
                  {t("contact.form.send")} <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
