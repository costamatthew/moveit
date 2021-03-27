import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/50969934?s=400&u=251c463f00fd699dadc5e4761f8f9229155f013c&v=4"
        alt="Mateus Costa"
      />
      <div>
        <strong>Mateus Costa</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
