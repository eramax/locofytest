import styles from "./MenuItem1.module.css";

const MenuItem1 = ({ short, name }) => {
  return (
    <button className={styles.item0Button}>
      <div className={styles.iconGRIDSTARCUSTOMStudy}>
        <div className={styles.rectangleDiv} />
        <b className={styles.iSOB}>{short}</b>
      </div>
      <div className={styles.textDiv}>{name}</div>
    </button>
  );
};

export default MenuItem1;
