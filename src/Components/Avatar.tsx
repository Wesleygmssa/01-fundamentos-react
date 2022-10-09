import styles from "./Avatar.module.css";
import { ImgHTMLAttributes } from "react";

// extendo a interface do HTMLImageElement tag img
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  // const hasBorder = hasBorder !== false;
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props} // Todas propriedades
    />
  );
}
