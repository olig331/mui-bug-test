import { useTranslation } from "react-i18next";
import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import useI18nDir from "./useI18nDir";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const cacheLtr = createCache({ key: "ltr" });

const DirectionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { i18n } = useTranslation(["main"]);
  const { textDirection } = useI18nDir();

  useEffect(() => {
    document.dir = textDirection;
  }, [textDirection, i18n]);

  return (
    <CacheProvider value={textDirection === "ltr" ? cacheLtr : cacheRtl}>
      {children}
    </CacheProvider>
  );
};

export default DirectionProvider;
