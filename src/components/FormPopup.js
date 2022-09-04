import styles from "./FormPopup.module.css";

const FormPopup = ({ onClose }) => {
  return (
    <div className={styles.formPopupDiv}>
      <div className={styles.frameDiv}>
        <div className={styles.titleDiv}>
          <div className={styles.frameDiv1}>
            <div className={styles.iconGRIDSTARCUSTOMStudy}>
              <div className={styles.rectangleDiv} />
              <b className={styles.mCPB}>--</b>
            </div>
            <div className={styles.titleDiv1}>Study</div>
          </div>
          <div
            className={styles.descriptionDiv}
          >{`Enter the workflow details before saving. `}</div>
        </div>
        <div className={styles.actionBarDiv}>
          <div className={styles.divider} />
        </div>
        <div className={styles.frameDiv2}>
          <div className={styles.inputBoxDiv}>
            <div className={styles.assetsInputLabel}>
              <div className={styles.labelDiv}>Name</div>
            </div>
            <div className={styles.assetsInputBox}>
              <input
                className={styles.inputAutoLayout}
                type="text"
                placeholder="Main Circuit Parameters"
              />
            </div>
          </div>
          <div className={styles.inputBoxDiv1}>
            <div className={styles.assetsInputLabel}>
              <div className={styles.labelDiv}>Short Name</div>
            </div>
            <div className={styles.assetsInputBox}>
              <input
                className={styles.inputAutoLayout}
                type="text"
                placeholder="MCP"
              />
            </div>
          </div>
        </div>
        <div className={styles.textAreaDiv}>
          <div className={styles.assetsInputLabel2}>
            <div className={styles.labelDiv}>Description</div>
          </div>
          <div className={styles.assetsTextAreaInput}>
            <textarea
              className={styles.inputTextarea}
              placeholder="The tasks and workflows required to define the parameters for the main circuit. "
            />
            <img className={styles.icon} alt="" src="../icon.svg" />
          </div>
        </div>
        <div className={styles.frameDiv3}>
          <div className={styles.labelDiv}>Tags</div>
          <div className={styles.tagsDiv1}>
            <div className={styles.tagDiv}>
              <div className={styles.labelDiv3}>Study: MCP</div>
            </div>
            <div className={styles.buttonDiv}>
              <button className={styles.iconControlsAdd}>
                <img className={styles.shapeIcon} alt="" src="../shape2.svg" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.actionBarDiv}>
          <div className={styles.divider} />
        </div>
        <div className={styles.buttonsAutoLayout}>
          <button className={styles.button1} onClick={onClose}>
            <div className={styles.labelDiv4}>Cancel</div>
          </button>
          <button className={styles.button2} onClick={onClose}>
            <div className={styles.labelDiv5}>Submit</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
