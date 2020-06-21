import React from 'react';
import cx from 'classnames';
import styles from './styles.module.css';
import Github from '../icons/Github';
import {shell} from 'electron';
import Twitter from '../icons/Twitter';
import RoadMap from '../icons/RoadMap';

const Spacer = ({width = 10}) => (
  <div className={styles.link} style={{width}}></div>
);

const StatusBar = () => {
  return (
    <div className={styles.statusBar}>
      <div className={styles.section}>
        <div
          className={styles.link}
          onClick={() =>
            shell.openExternal('https://github.com/manojVivek/responsively-app')
          }
        >
          <Github width={14} className={styles.linkIcon} />
        </div>
        <div
          className={styles.link}
          onClick={() =>
            shell.openExternal(
              'https://twitter.com/intent/follow?original_referer=app&ref_src=twsrc%5Etfw&region=follow_link&screen_name=ResponsivelyApp&tw_p=followbutton'
            )
          }
        >
          <Twitter width={14} className={styles.linkIcon} />
        </div>
        <Spacer />
        <div
          className={cx('roadMapLink', styles.link)}
          onClick={() =>
            shell.openExternal(
              'https://github.com/manojVivek/responsively-app/projects/12?fullscreen=true'
            )
          }
        >
          <RoadMap width={14} color="grey" className={styles.linkIcon} />
          <span className={cx('roadMapLink', styles.linkText)}>RoadMap</span>
        </div>
        <Spacer />
        <div
          className={styles.link}
          onClick={() =>
            shell.openExternal('https://headwayapp.co/responsively-changelog')
          }
        >
          <span className={cx('changeLogLink', styles.linkText)}>
            Changelog
          </span>
        </div>
      </div>
      <div className={styles.section}>
        <div
          className={styles.link}
          onClick={() =>
            shell.openExternal(
              'https://github.com/manojVivek/responsively-app/issues/new?labels=enhancement&title=[Feature%20Suggestion]'
            )
          }
        >
          <span className={cx('featureSuggestionLink', styles.linkText)}>
            Have a feature suggestion? Let us know! 🚀
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
