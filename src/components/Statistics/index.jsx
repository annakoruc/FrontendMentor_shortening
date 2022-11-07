import React from "react";
import { InfoCard } from "components";
import styles from "./Statistics.module.scss";

import recognitionIcon from "../../assets/images/icon-brand-recognition.svg";
import recordsIcon from "../../assets/images/icon-detailed-records.svg";
import customizableIcon from "../../assets/images/icon-fully-customizable.svg";

export const Statistics = () => {
  return (
    <div className={styles.statistics}>
      <div className={styles.description}>
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics deshboard
        </p>
      </div>
      <div className={styles.cards}>
        <InfoCard icon={recognitionIcon} title="Brand Recognition">
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instil confidence in your content.
        </InfoCard>
        <InfoCard icon={recordsIcon} title="Detailed Records">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </InfoCard>
        <InfoCard icon={customizableIcon} title="Fully Customizable">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement
        </InfoCard>
      </div>
    </div>
  );
};
