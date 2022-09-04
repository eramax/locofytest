import List from "../components/List";
import styles from "./StudyManagement.module.css";

const StudyManagement = () => {
  return (
    <div className={styles.studyManagementDiv}>
      <div className={styles.frameDiv}>
        <List title="Studies" />
        <div className={styles.frameDiv1}>
          <div className={styles.titlebarTempalateLists}>
            <div className={styles.frameDiv2}>
              <div className={styles.frameDiv3}>
                <div className={styles.frameDiv4}>
                  <div className={styles.iconGRIDSTARCUSTOMStudy}>
                    <div className={styles.rectangleDiv} />
                    <b className={styles.mCPB}>MCP</b>
                  </div>
                  <div className={styles.mainCircuitParameters}>
                    Main Circuit Parameters
                  </div>
                  <div className={styles.tagsDiv}>
                    <div className={styles.tagDiv}>
                      <div className={styles.labelDiv}>Study: MCP</div>
                    </div>
                    <div className={styles.tagDiv}>
                      <div className={styles.labelDiv}>Tag: Value</div>
                    </div>
                    <div className={styles.buttonDiv}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--controls--add.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--tools--edit.svg"
                    />
                  </div>
                </div>
                <div className={styles.descriptionOfTheWorkflowAn}>
                  Description of the workflow and what it does. This is a longer
                  description to show what it looks like to break line.
                </div>
              </div>
              <div className={styles.frameDiv5}>
                <div className={styles.buttonDiv2}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../icon--user--people.svg"
                  />
                  <div className={styles.groupDiv}>Study Members</div>
                </div>
              </div>
            </div>
            <div className={styles.divider} />
          </div>
          <div className={styles.frameDiv6}>
            <List title="Groups" />
            <div className={styles.divider1} />
            <div className={styles.frameDiv7}>
              <div className={styles.titlebarTempalateLists1}>
                <div className={styles.frameDiv2}>
                  <div className={styles.frameDiv3}>
                    <div className={styles.frameDiv4}>
                      <img
                        className={styles.iconToolsEdit}
                        alt=""
                        src="../icon--tools--archive.svg"
                      />
                      <div className={styles.groupDiv}>Precalc</div>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconToolsEdit}
                          alt=""
                          src="../icon--tools--edit.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.descriptionOfTheWorkflowAn1}>
                      Description of the workflow and what it does. This is a
                      longer description to show what it looks like to break
                      line.
                    </div>
                  </div>
                  <div className={styles.frameDiv11}>
                    <div className={styles.frameDiv12}>
                      <b className={styles.selectedB}>2 Selected</b>
                      <div className={styles.buttonDiv4}>
                        <img
                          className={styles.iconToolsEdit}
                          alt=""
                          src="../icon--actions--moreoptionsvertical.svg"
                        />
                        <div className={styles.groupDiv}>Action</div>
                      </div>
                    </div>
                    <div className={styles.divider1} />
                    <div className={styles.newItemButton}>
                      <div className={styles.buttonDiv5}>
                        <img
                          className={styles.iconToolsEdit}
                          alt=""
                          src="../icon--controls--add1.svg"
                        />
                        <div className={styles.groupDiv}>New Item</div>
                      </div>
                      <img
                        className={styles.iconDirectionsDropDown}
                        alt=""
                        src="../icon-directions--dropdown.svg"
                      />
                    </div>
                    <div className={styles.searchAndFilter}>
                      <div className={styles.frameDiv13}>
                        <div className={styles.labelDiv5}>225 items</div>
                        <div className={styles.assetSearchBoxInput}>
                          <div className={styles.assetsInputBox}>
                            <div className={styles.inputAutoLayout}>
                              <div className={styles.mCTDiv}>Search</div>
                              <img
                                className={styles.iconToolsEdit}
                                alt=""
                                src="../icon--actions--search.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className={styles.assetsFilterGroupInput}>
                          <img
                            className={styles.iconToolsEdit}
                            alt=""
                            src="../icon--actions--filters.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divider} />
              </div>
              <div className={styles.tableDiv}>
                <div className={styles.tableRowListAccess}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <b className={styles.labelDiv}>ID</b>
                    </div>
                    <div className={styles.frameDiv16}>
                      <b className={styles.labelDiv}>Name</b>
                    </div>
                    <div className={styles.frameDiv16}>
                      <b className={styles.labelDiv}>Type</b>
                    </div>
                    <div className={styles.frameDiv16}>
                      <b className={styles.labelDiv}>State</b>
                    </div>
                  </div>
                  <div className={styles.buttonDiv6}>
                    <img className={styles.iconToolsEdit} alt="" />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>1</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes.svg"
                      />
                      <div className={styles.mCTDiv}>Precalc</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>1</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes1.svg"
                      />
                      <div className={styles.mCTDiv}>Cables</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>Cables In</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>Cables Out</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox5.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes1.svg"
                      />
                      <div className={styles.mCTDiv}>Power Defined</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>Power Defined In</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>Power Defined Out</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes1.svg"
                      />
                      <div className={styles.mCTDiv7}>
                        Reactive Power Constraints
                      </div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>
                        Reactive Power Constraints In
                      </div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>
                        Reactive Power Constraints Out
                      </div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox5.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>4</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes1.svg"
                      />
                      <div className={styles.mCTDiv}>Corners PQ</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes2.svg"
                      />
                      <div className={styles.mCTDiv}>Corners PQ In</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes12.svg"
                      />
                      <div className={styles.mCTDiv}>Corners PQ Out</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>5</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes13.svg"
                      />
                      <div className={styles.mCTDiv7}>Transformer Rating</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes12.svg"
                      />
                      <div className={styles.mCTDiv}>Transformer Rating In</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes12.svg"
                      />
                      <div className={styles.mCTDiv}>
                        Transformer Rating Out
                      </div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>6</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes13.svg"
                      />
                      <div className={styles.mCTDiv7}>Converter Reactor</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes12.svg"
                      />
                      <div className={styles.mCTDiv}>Converter Reactor In</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes12.svg"
                      />
                      <div className={styles.mCTDiv}>Converter Reactor Out</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img
                    className={styles.iconToolsEdit}
                    alt=""
                    src="../checkbox20.svg"
                  />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>7</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMStudy}
                        alt=""
                        src="../icon--gridstar-custom--nodes19.svg"
                      />
                      <div className={styles.mCTDiv7}>
                        Transformer Impedance
                      </div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconToolsEdit}
                      alt=""
                      src="../icon--actions--directions--small19.svg"
                    />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img className={styles.iconToolsEdit} alt="" />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img className={styles.iconGRIDSTARCUSTOMStudy} alt="" />
                      <div className={styles.mCTDiv}>
                        Transformer Impedance In
                      </div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img className={styles.iconToolsEdit} alt="" />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img className={styles.iconToolsEdit} alt="" />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img className={styles.iconGRIDSTARCUSTOMStudy} alt="" />
                      <div className={styles.mCTDiv}>
                        Transformer Impedance Out
                      </div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img className={styles.iconToolsEdit} alt="" />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img className={styles.iconToolsEdit} alt="" />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>8</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img className={styles.iconGRIDSTARCUSTOMStudy} alt="" />
                      <div className={styles.mCTDiv7}>Voltage Variations</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img className={styles.iconToolsEdit} alt="" />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img className={styles.iconToolsEdit} alt="" />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img className={styles.iconGRIDSTARCUSTOMStudy} alt="" />
                      <div className={styles.mCTDiv}>Voltage Variations In</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img className={styles.iconToolsEdit} alt="" />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img className={styles.iconToolsEdit} alt="" />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img className={styles.iconGRIDSTARCUSTOMStudy} alt="" />
                      <div className={styles.mCTDiv}>
                        Voltage Variations Out
                      </div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img className={styles.iconToolsEdit} alt="" />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img className={styles.iconToolsEdit} alt="" />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>9</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img className={styles.iconGRIDSTARCUSTOMStudy} alt="" />
                      <div className={styles.mCTDiv7}>AC Cable Data</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img className={styles.iconToolsEdit} alt="" />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img className={styles.iconToolsEdit} alt="" />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>2</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img className={styles.iconGRIDSTARCUSTOMStudy} alt="" />
                      <div className={styles.mCTDiv}>AC Cable Data In</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img className={styles.iconToolsEdit} alt="" />
                  </div>
                </div>
                <div className={styles.tableRowListAccess1}>
                  <img className={styles.iconToolsEdit} alt="" />
                  <div className={styles.frameDiv14}>
                    <div className={styles.frameDiv15}>
                      <div className={styles.labelDiv}>3</div>
                    </div>
                    <div className={styles.frameDiv21}>
                      <img className={styles.iconGRIDSTARCUSTOMStudy} alt="" />
                      <div className={styles.mCTDiv}>AC Cable Data Out</div>
                    </div>
                    <div className={styles.frameDiv16}>
                      <div className={styles.labelDiv}>Computing Task</div>
                    </div>
                    <div className={styles.frameDiv23}>
                      <div className={styles.labelDiv}>Published</div>
                    </div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img className={styles.iconToolsEdit} alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv159}>
                <div className={styles.paginationDiv}>
                  <div className={styles.visibilityDiv}>
                    <div className={styles.labelDiv}>Show</div>
                    <div className={styles.assetsDropDownField}>
                      <div className={styles.labelDiv}>10</div>
                      <img className={styles.iconToolsEdit} alt="" />
                    </div>
                    <div className={styles.labelDiv}>rows</div>
                  </div>
                  <div className={styles.controlsDiv}>
                    <div className={styles.buttonDiv1}>
                      <img className={styles.iconToolsEdit} alt="" />
                    </div>
                    <div className={styles.buttonDiv1}>
                      <img className={styles.iconToolsEdit} alt="" />
                    </div>
                    <div className={styles.assetsInputBox1}>
                      <div className={styles.inputAutoLayout1}>
                        <div className={styles.mCTDiv}>10</div>
                      </div>
                    </div>
                    <div className={styles.suffixDiv1}>/ 200</div>
                    <div className={styles.buttonDiv1}>
                      <img className={styles.iconToolsEdit} alt="" />
                    </div>
                    <img className={styles.iconToolsEdit} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.horizontalNavigationDiv}>
        <div className={styles.highlightDiv} />
        <div className={styles.menuBarDiv}>
          <div className={styles.frameDiv160}>
            <div className={styles.groupDiv1}>
              <div className={styles.buttonDiv38}>
                <div className={styles.labelDiv5}>Clear</div>
              </div>
              <div className={styles.groupDiv2}>
                <img
                  className={styles.component1Icon}
                  alt=""
                  src="../component-1.svg"
                />
                <div className={styles.gridStarDiv}>
                  <div className={styles.gridstarDiv}>Gridstar</div>
                </div>
              </div>
            </div>
            <img className={styles.borderIcon} alt="" src="../border.svg" />
            <div className={styles.frameDiv161}>
              <div className={styles.horizontalNavigationDiv1}>
                <div className={styles.itemAutoLayout}>
                  <img
                    className={styles.iconGRIDSTARCUSTOMStudy}
                    alt=""
                    src="../icon--gridstar-custom--projects-all.svg"
                  />
                </div>
              </div>
              <div className={styles.horizontalNavigationDiv2}>
                <div className={styles.frameDiv162}>
                  <div className={styles.itemAutoLayout1}>
                    <div className={styles.iconGRIDSTARCUSTOMStudy}>
                      <div className={styles.rectangleDiv1} />
                      <b className={styles.gLB}>GL</b>
                      <img className={styles.gLIcon} alt="" src="../gl.svg" />
                    </div>
                    <div className={styles.textDiv}>GridLink</div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconGRIDSTARCUSTOMStudy}
                      alt=""
                      src="../close-small.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.horizontalNavigationDiv3}>
                <div className={styles.frameDiv162}>
                  <div className={styles.itemAutoLayout1}>
                    <div className={styles.iconGRIDSTARCUSTOMStudy}>
                      <div className={styles.rectangleDiv1} />
                      <img className={styles.p1Icon} alt="" src="../p1.svg" />
                    </div>
                    <div className={styles.labelDiv}>Project 1</div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconGRIDSTARCUSTOMStudy}
                      alt=""
                      src="../close-small.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.horizontalNavigationDiv3}>
                <div className={styles.frameDiv162}>
                  <div className={styles.itemAutoLayout1}>
                    <div className={styles.iconGRIDSTARCUSTOMStudy}>
                      <div className={styles.rectangleDiv1} />
                      <img className={styles.p2Icon} alt="" src="../p2.svg" />
                    </div>
                    <div className={styles.labelDiv}>Project 2</div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconGRIDSTARCUSTOMStudy}
                      alt=""
                      src="../close-small.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.horizontalNavigationDiv5}>
                <div className={styles.frameDiv165}>
                  <div className={styles.itemAutoLayout4}>
                    <img
                      className={styles.iconGRIDSTARCUSTOMStudy}
                      alt=""
                      src="../icon--gridstar-custom--studyicongridstar-customstudy-management.svg"
                    />
                    <div className={styles.groupDiv}>Study Management</div>
                  </div>
                  <div className={styles.buttonDiv1}>
                    <img
                      className={styles.iconGRIDSTARCUSTOMStudy}
                      alt=""
                      src="../close-small.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.actionsDiv}>
            <div className={styles.buttonDiv1}>
              <img
                className={styles.iconGRIDSTARCUSTOMStudy}
                alt=""
                src="../icon--gridstar-custom--studyicongridstar-customstudy-management1.svg"
              />
            </div>
            <div className={styles.buttonDiv1}>
              <img
                className={styles.iconGRIDSTARCUSTOMStudy}
                alt=""
                src="../icon--gridstar-custom--settings.svg"
              />
            </div>
            <div className={styles.buttonDiv1}>
              <img
                className={styles.iconGRIDSTARCUSTOMStudy}
                alt=""
                src="../badge.svg"
              />
            </div>
            <div className={styles.buttonDiv1}>
              <div className={styles.iconGRIDSTARCUSTOMStudy}>
                <img
                  className={styles.image3Icon}
                  alt=""
                  src="../image-3@2x.png"
                />
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src="../ellipse-218@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.highlightDiv1} />
      </div>
    </div>
  );
};

export default StudyManagement;
