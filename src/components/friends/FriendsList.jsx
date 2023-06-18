import css from './FriendsList.module.css';
import PropTypes from 'prop-types';
import { Friend } from 'components/friendsItem/FriendItem';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <Friend key={id} name={name} avatar={avatar} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
