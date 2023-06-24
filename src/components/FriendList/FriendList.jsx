import React from 'react';
import styles from './friendList.module.css';
import friends from '../../data/friends.json';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = () => {
  return (
    <ul className={styles.friendList}>
      {friends.map(item => {
        return <FriendListItem key={item.id} data={item} />;
      })}
    </ul>
  );
};

export default FriendList;
