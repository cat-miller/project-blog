import React from 'react';

import styles from './DecorativeSwoops.module.css';

function DecorativeSwoops() {
  return (
    <div className={styles.wrapper}>
      <Blocker />
    </div>
  );
}

function Blocker() {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"
           viewBox="0 0 1440 390">
        <defs>
          <linearGradient id="a" x1="50%" x2="50%" y1="100%" y2="0%">
            <stop offset="5%" stopColor="#1c1934"/>
            <stop offset="95%" stopColor="#363763"/>
          </linearGradient>
        </defs>
        <path fill="url(#a)" fillOpacity=".53"
              d="M0 400V100c44.629-27.67 89.257-55.339 136-44 46.743 11.339 95.6 61.685 149 79 53.4 17.315 111.345 1.599 162-8s94.019-13.08 141-7c46.981 6.08 97.579 21.722 150 17 52.421-4.722 106.665-29.81 150-23 43.335 6.81 75.76 45.516 116 30 40.24-15.516 88.295-85.254 144-87 55.705-1.746 119.058 64.501 169 83 49.942 18.499 86.47-10.75 123-40v300H0Z"
              className="transition-all duration-300 ease-in-out delay-150 path-0"/>
        <path fill="url(#a)"
              d="M0 400V233c49.083 26.35 98.166 52.699 152 40 53.834-12.699 112.42-64.446 155-66 42.58-1.554 69.152 47.085 107 66s86.97 8.106 142 1 115.967-10.507 162-13c46.033-2.493 77.164-4.077 132-13s133.379-25.186 182-20c48.621 5.186 67.321 31.82 114 25s121.337-47.091 175-56c53.663-8.909 86.332 13.546 119 36v167H0Z"
              className="transition-all duration-300 ease-in-out delay-150 path-1"/>
      </svg>
  );
}

export default DecorativeSwoops;
