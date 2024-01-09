import styles from "./Button.module.css";
export default function Button({ isOutline, icon, text }) {
  return (
    <button className={isOutline ? styles.outline_btn : styles.primery_btn}>
      {icon}
      {text}
    </button>
  );
}
