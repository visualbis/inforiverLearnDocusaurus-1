import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "A",
    src: "img/featured-training.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "B",
    src: "img/featured-documentation.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "C",
    src: "img/featured-cert.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: "D",
    src: "img/featured-documentation.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "E",
    src: "img/featured-cert.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "F",
    src: "img/featured-training.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx("col col--4", styles.featureCard)}>
      <div class="card__image">
        <img className={styles.cardImage} src={src} alt="card-image" />
      </div>
      <div class="card__body">
        <h3 className={styles.title}>{title}</h3>
        <p>{description}</p>
      </div>
      <div class="card__footer">
        <Link className="button button--primary button--block" to={`learn/modules/module-${title.toLowerCase()}`}>
          <div className={styles.learnBtn}>Learn {title}</div>
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.featureBox}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
