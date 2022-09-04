import styles from "./StateListWorkspaces.module.css";

const StateListWorkspaces = ({ onClose }) => {
  return (
    <div className={styles.stateListWorkspaces}>
      <div className={styles.assetsList}>
        <div className={styles.assetsListItem}>
          <img
            className={styles.iconToolsEdit}
            alt=""
            src="../icon--tools--edit4.svg"
          />
          <b className={styles.label}>Configuring</b>
        </div>
        <div className={styles.assetsListItem1}>
          <img
            className={styles.iconToolsEdit}
            alt=""
            src="../icon--controls--play.svg"
          />
          <b className={styles.label}>Active</b>
        </div>
        <div className={styles.assetsListItem2}>
          <img
            className={styles.iconToolsEdit}
            alt=""
            src="../icon--selector--completedstep.svg"
          />
          <b className={styles.label}>Completed</b>
        </div>
        <div className={styles.assetsListItem3}>
          <img
            className={styles.iconGRIDSTARCUSTOMClose}
            alt=""
            src="../icon--actions--close-small.svg"
          />
          <b className={styles.label}>Abandoned</b>
        </div>
      </div>
    </div>
  );
};

export default StateListWorkspaces;
