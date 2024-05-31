import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import clsx from "clsx"

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendsItem}>
        <img className={css.avatar} src={avatar} alt={name} width="48px" />
        <p className={css.name}>{name}</p>
        <p className={clsx(css.isOnline, isOnline === true ? css.online : css.offline)}>{isOnline === true ? "Online" : "Offline"}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;