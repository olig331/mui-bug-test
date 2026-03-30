import { useTranslation } from "react-i18next";

const useI18nDir = () => {
  const { i18n } = useTranslation();

  const dir = i18n.dir(i18n.language);
  const layoutDirection: "left" | "right" = dir === "rtl" ? "right" : "left";

  return { textDirection: dir, layoutDirection };
};

export default useI18nDir;
