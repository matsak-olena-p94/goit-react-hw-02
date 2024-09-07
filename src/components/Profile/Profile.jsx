import s from "./Profile.module.css"
export default function Profile(props) {
    return (
    <div className={s.mainWraper}>
      <div className={s.centeredWraper}>
        <img
          src={props.image}
          alt="User avatar"
          className={s.userImage}
        />
        <p className={s.name}>{props.name}</p>
        <p className={s.subInfo}>@{props.tag}</p>
        <p className={s.subInfo}>{props.location}</p>
      </div>
    
      <ul className={s.statsList}>
        <li className={s.statsItem}>
          <span>Followers</span>
          <span className={s.stats}>{props.stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span>Views</span>
          <span className={s.stats}>{props.stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span>Likes</span>
          <span className={s.stats}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>)
}