import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

// компонент який приймає друзів в якості пропсів і повертає вже весь список (<ul/>) далі на рендер
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
    
      {friends.map(friend => {
       
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
