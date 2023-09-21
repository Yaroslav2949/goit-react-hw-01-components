import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

// компонент який створює шаблон кожного друга як окремий елемент списку

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {/*  динамічне встановлення кольору статусу, в залежності від того, чи друг онлайн */}
      <span
        className={
          isOnline ? `${css.status} ${css.green}` : `${css.status} ${css.red}`
        }
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
