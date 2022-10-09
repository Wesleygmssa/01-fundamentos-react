import styles from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar(props: AvatarProps) {
  const hasBorder = props.hasBorder !== false;
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={props.src}
      alt=""
    />
  );
}
