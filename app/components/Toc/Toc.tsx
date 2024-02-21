"use client";

import styles from "./Toc.module.scss";
import { useEffect } from "react";
import tocbot from "tocbot";

type Props = {
  selector: string;
};

export const Toc = (props: Props) => {
  useEffect(() => {
    tocbot.init({
      tocSelector: `.${styles.toc}`,
      contentSelector: props.selector,
      headingSelector: "h1, h2",
      collapseDepth: 2,
      headingsOffset: 70,
      scrollSmoothOffset: -70,
    });
    return () => tocbot.destroy();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="text-lg font-bold">目次</div>
      <nav
        className={`${styles.toc} ${styles.tocList} text-zinc-400 text-sm`}
      />
    </div>
  );
};
