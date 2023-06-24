import React from 'react';
import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
  };
  return (
    <section className={styles.statistics}>
      <h2 className="title">{title}</h2>
      <ul className={styles.statlist}>
        {stats.map(stat => {
          return (
            <li
              key={stat.id}
              className={styles.item}
              style={{
                backgroundColor:
                  '#' + Math.floor(Math.random() * 16777215).toString(16),
              }}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
