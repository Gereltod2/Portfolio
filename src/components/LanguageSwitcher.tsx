import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'mn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-muted/20 transition-colors"
      aria-label="Toggle language"
    >
      <Globe size={20} />
      <span className="text-sm font-medium uppercase">{i18n.language}</span>
    </button>
  );
}