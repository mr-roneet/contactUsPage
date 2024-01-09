import styles from "./Navigation.module.css";

export default function Navigation() {
  // console.log(styles);
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}
