// @flow

import cx from 'classnames';

import styles from './styles.less';
import { prefix } from 'lib/css';
import colours from 'common/styles/colours';

function calcBarStyles (current, max, barColor) {
  const percent = max ? Math.ceil((current / max || 0) * 100) : 0;

  return {
    width: '100%',
    backgroundColor: barColor,
    ...prefix('transform', `translateX(${percent - 100}%)`),
  };
}

type ProgressBarProps = {
  current: number,
  max: number,
  barColor?: string,
  backgroundColor?: string,
  icon?: any,
  small?: boolean,
  label?: string,
};

const ProgressBar = ({
  current,
  max,
  barColor,
  backgroundColor,
  icon,
  small,
  label,
}: ProgressBarProps) => (
  <div className={cx(styles.root, small && styles.small)} style={{ backgroundColor }}>
    <span className={styles.icon}>{icon}</span>
    <span className={styles.bar} style={calcBarStyles(current, max, barColor)} />
    {small || <span className={styles.label}>
      {label || `${current}/${max}`}
    </span>}
  </div>
);

ProgressBar.defaultProps = {
  current: 0,
  max: 0,
  backgroundColor: colours._black,
  barColor: colours._purple,
};

export default ProgressBar;
