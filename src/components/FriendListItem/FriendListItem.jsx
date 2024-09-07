
import clsx from 'clsx';
import s from "./FriendListItem.module.css"

export default function FriendListItem({avatar, name, isOnline}) {
    return (
        <div className={s.friendWraper}>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <p className={clsx(isOnline ? s.online : s.offline )}>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
}