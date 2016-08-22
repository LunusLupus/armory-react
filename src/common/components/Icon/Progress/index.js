import { PropTypes } from 'react';
import styles from './styles.less';
import sizes from '../styles.less';
import cx from 'classnames';

const ProgressIcon = ({ size, className }) => (
  <svg
    className={cx(styles.spinner, sizes[size], className)}
    viewBox="0 0 66 66"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      className={styles.path}
      fill="none"
      strokeWidth="6"
      strokeLinecap="round"
      cx="33"
      cy="33"
      r="30"
    />
  </svg>
);

ProgressIcon.defaultProps = {
  size: 'mini',
};

ProgressIcon.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
};

export default ProgressIcon;
