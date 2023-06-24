import React from 'react';
import styles from './friendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ data }) => {
  let { avatar, name, isOnline } = data;
  FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.status : styles.isOnline}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
