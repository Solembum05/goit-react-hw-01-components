import css from './FriendItem.module.css';
import PropTypes from 'prop-types';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
