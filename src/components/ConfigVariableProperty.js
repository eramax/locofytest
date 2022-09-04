import styles from "./ConfigVariableProperty.module.css";

const ConfigVariableProperty = ({ onClose }) => {
  return (
    <div className={styles.configVariablePropertyDiv}>
      <div className={styles.frameDiv}>
        <div className={styles.inputBoxDiv}>
          <div className={styles.assetsInputLabel}>
            <div className={styles.labelDiv}>Label</div>
          </div>
          <div className={styles.assetsInputBox}>
            <div className={styles.inputAutoLayout}>
              <div className={styles.labelDiv1}>Search node</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.assetsListItem}>
        <img
          className={styles.iconGRIDSTARCUSTOMNodes}
          alt=""
          src="../icon--gridstar-custom--nodes46.svg"
        />
        <div className={styles.labelDiv2}>
          MCP.S1.Rectifier.NominalCalc.TuneUtn
        </div>
      </div>
      <div className={styles.assetsListItem}>
        <img
          className={styles.iconGRIDSTARCUSTOMNodes}
          alt=""
          src="../icon--gridstar-custom--nodes46.svg"
        />
        <div className={styles.labelDiv2}>
          MCP.S1.Rectifier.NominalCalc.Tunerpn
        </div>
      </div>
      <div className={styles.assetsListItem}>
        <img
          className={styles.iconGRIDSTARCUSTOMNodes}
          alt=""
          src="../icon--gridstar-custom--nodes46.svg"
        />
        <div className={styles.labelDiv2}>
          MCP.S1.Inverter.NominalCalc.Tuneutn
        </div>
      </div>
    </div>
  );
};

export default ConfigVariableProperty;
