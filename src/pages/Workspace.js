import { useState, useCallback } from "react";
import StateListWorkspaces from "../components/StateListWorkspaces";
import PortalPopup from "../components/PortalPopup";
import ConfigVariableProperty from "../components/ConfigVariableProperty";
import styles from "./Workspace.module.css";

const Workspace = () => {
  const [isStateListWorkspacesOpen, setStateListWorkspacesOpen] =
    useState(false);
  const [isConfigVariablePropertyOpen, setConfigVariablePropertyOpen] =
    useState(false);
  const [isConfigVariableProperty1Open, setConfigVariableProperty1Open] =
    useState(false);
  const [isConfigVariableProperty2Open, setConfigVariableProperty2Open] =
    useState(false);

  const openStateListWorkspaces = useCallback(() => {
    setStateListWorkspacesOpen(true);
  }, []);

  const closeStateListWorkspaces = useCallback(() => {
    setStateListWorkspacesOpen(false);
  }, []);

  const onFrameContainer32Click = useCallback(() => {
    // Please sync "1920 - Workspace " to the project
  }, []);

  const openConfigVariableProperty = useCallback(() => {
    setConfigVariablePropertyOpen(true);
  }, []);

  const closeConfigVariableProperty = useCallback(() => {
    setConfigVariablePropertyOpen(false);
  }, []);

  const openConfigVariableProperty1 = useCallback(() => {
    setConfigVariableProperty1Open(true);
  }, []);

  const closeConfigVariableProperty1 = useCallback(() => {
    setConfigVariableProperty1Open(false);
  }, []);

  const openConfigVariableProperty2 = useCallback(() => {
    setConfigVariableProperty2Open(true);
  }, []);

  const closeConfigVariableProperty2 = useCallback(() => {
    setConfigVariableProperty2Open(false);
  }, []);

  return (
    <>
      <div className={styles.workspaceDiv}>
        <div className={styles.frameDiv}>
          <div className={styles.titlebarWorkspaceDiv}>
            <div className={styles.rectangleDiv} />
            <select className={styles.frameSelect}>
              <option value="Expert group">1</option>
              <option value="Tender">2</option>
            </select>
            <div className={styles.frameDiv1}>
              <button className={styles.button}>
                <img
                  className={styles.iconActionsSave}
                  alt=""
                  src="../icon--actions--save.svg"
                />
                <div className={styles.labelDiv}>Save</div>
              </button>
              <div
                className={styles.stateDropdownDiv}
                onClick={openStateListWorkspaces}
              >
                <div className={styles.assetsDropDownField}>
                  <div className={styles.inputAutoLayout}>
                    <b className={styles.label}>Configuring</b>
                    <img
                      className={styles.iconActionsSave}
                      alt=""
                      src="../icon-directions--dropdown1.svg"
                    />
                  </div>
                </div>
                <img
                  className={styles.iconToolsEdit}
                  alt=""
                  src="../icon--tools--edit2.svg"
                />
              </div>
            </div>
            <div className={styles.frameDiv2}>
              <img
                className={styles.iconActionsSave}
                alt=""
                src="../icon--tools--edit2.svg"
              />
            </div>
          </div>
          <div className={styles.frameDiv3}>
            <div className={styles.mCPV3Div}>
              <div className={styles.groupDiv}>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="../frame-2681837.svg"
                />
                <div className={styles.groupDiv1}>
                  <div className={styles.workflowNoYesDefaultConfigDiv}>
                    <div className={styles.rectangleDiv1} />
                    <div className={styles.frameDiv4}>
                      <div className={styles.workflowNameThatIsLong}>
                        MCP v1.2
                      </div>
                      <div className={styles.v4Div}>v.4</div>
                    </div>
                    <img className={styles.iconGRIDSTARCUSTOMNodes} alt="" />
                    <div className={styles.frameDiv5}>
                      <button className={styles.button1}>
                        <img className={styles.iconActionsSave} alt="" />
                      </button>
                      <button className={styles.button1}>
                        <img
                          className={styles.iconGRIDSTARCUSTOMSetti}
                          alt=""
                        />
                      </button>
                      <div className={styles.buttonDiv}>
                        <img className={styles.iconActionsSave} alt="" />
                      </div>
                      <div className={styles.buttonDiv}>
                        <img
                          className={styles.iconGRIDSTARCUSTOMSetti}
                          alt=""
                        />
                      </div>
                    </div>
                    <img className={styles.connectingPointsIcon} alt="" />
                    <div className={styles.connectingPointsDiv}>
                      <div className={styles.rectangleDiv2} />
                      <img className={styles.rectangleIcon} alt="" />
                    </div>
                  </div>
                  <img className={styles.vectorIcon} alt="" />
                  <img className={styles.vectorIcon1} alt="" />
                  <div className={styles.stationDiv}>
                    <div className={styles.workflowNoYesDefaultConfigDiv1}>
                      <div className={styles.rectangleDiv1} />
                      <div className={styles.frameDiv4}>
                        <div className={styles.workflowNameThatIsLong}>
                          Station 1
                        </div>
                        <div className={styles.v4Div}>v.4</div>
                      </div>
                      <img className={styles.iconGRIDSTARCUSTOMNodes} alt="" />
                      <div className={styles.frameDiv5}>
                        <div className={styles.buttonDiv}>
                          <img className={styles.iconActionsSave} alt="" />
                        </div>
                        <div className={styles.buttonDiv}>
                          <img
                            className={styles.iconGRIDSTARCUSTOMSetti}
                            alt=""
                          />
                        </div>
                        <div className={styles.buttonDiv}>
                          <img className={styles.iconActionsSave} alt="" />
                        </div>
                        <div className={styles.buttonDiv}>
                          <img
                            className={styles.iconGRIDSTARCUSTOMSetti}
                            alt=""
                          />
                        </div>
                      </div>
                      <img className={styles.connectingPointsIcon1} alt="" />
                      <div className={styles.connectingPointsDiv1}>
                        <div className={styles.rectangleDiv2} />
                        <img className={styles.rectangleIcon} alt="" />
                      </div>
                    </div>
                    <img className={styles.vectorIcon2} alt="" />
                    <img className={styles.vectorIcon3} alt="" />
                    <div className={styles.groupDiv2}>
                      <div className={styles.groupDiv3}>
                        <div className={styles.ratingCalcDiv}>
                          <div
                            className={styles.workflowNoYesDefaultConfigDiv2}
                          >
                            <div className={styles.rectangleDiv1} />
                            <div className={styles.frameDiv4}>
                              <div className={styles.workflowNameThatIsLong}>
                                Rating Calc
                              </div>
                              <div className={styles.v4Div}>v.4</div>
                            </div>
                            <img
                              className={styles.iconGRIDSTARCUSTOMNodes}
                              alt=""
                            />
                            <div className={styles.frameDiv5}>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconActionsSave}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconGRIDSTARCUSTOMSetti}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconActionsSave}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconGRIDSTARCUSTOMSetti}
                                  alt=""
                                />
                              </div>
                            </div>
                            <img
                              className={styles.connectingPointsIcon1}
                              alt=""
                            />
                            <div className={styles.connectingPointsDiv1}>
                              <div className={styles.rectangleDiv2} />
                              <img className={styles.rectangleIcon} alt="" />
                            </div>
                          </div>
                          <div className={styles.groupDiv4}>
                            <img className={styles.connectorIcon} alt="" />
                            <div className={styles.taskDiv}>
                              <div className={styles.taskNameThatIsLonger}>
                                Rt Rating Tuning
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon1} alt="" />
                            <div className={styles.taskDiv1}>
                              <div className={styles.taskNameThatIsLonger1}>
                                Pdc = PdcPrecalc Rating
                              </div>
                              <div className={styles.rectangleDiv9} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon4}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon6}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                            </div>
                            <div className={styles.connectorDiv}>
                              <img className={styles.vectorIcon4} alt="" />
                              <div className={styles.textDiv}>
                                Pdc != PdcPrecalc Nominal
                              </div>
                            </div>
                            <div className={styles.taskDiv2}>
                              <div className={styles.taskNameThatIsLonger}>
                                TCP Tuning
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon2} alt="" />
                            <div className={styles.taskDiv3}>
                              <div className={styles.taskNameThatIsLonger1}>
                                Plot Optimised?
                              </div>
                              <div className={styles.rectangleDiv9} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon4}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon6}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                            </div>
                            <div className={styles.groupDiv5}>
                              <img className={styles.vectorIcon5} alt="" />
                              <img className={styles.vectorIcon6} alt="" />
                              <img className={styles.vectorIcon7} alt="" />
                              <div className={styles.plotNotOptimized}>
                                Pdc != PdcPrecalc Nominal
                              </div>
                            </div>
                            <div className={styles.groupDiv6}>
                              <img className={styles.vectorIcon8} alt="" />
                              <img className={styles.vectorIcon9} alt="" />
                              <img className={styles.vectorIcon10} alt="" />
                              <div className={styles.plotNotOptimized}>
                                Plot not optimized
                              </div>
                            </div>
                            <div className={styles.connectorDiv1}>
                              <img className={styles.vectorIcon4} alt="" />
                              <div className={styles.textDiv}>
                                Plot optimized
                              </div>
                            </div>
                            <div className={styles.taskDiv4}>
                              <div className={styles.taskNameThatIsLonger}>
                                Rating Table
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <div className={styles.iconGRIDSTARCUSTOMNodes3}>
                                <div className={styles.rectangleDiv16} />
                                <img className={styles.shapeIcon} alt="" />
                              </div>
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                            </div>
                            <div className={styles.frameDiv10}>
                              <img className={styles.connectorIcon3} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className={styles.ratingCalcDiv1}>
                          <div
                            className={styles.workflowNoYesDefaultConfigDiv2}
                          >
                            <div className={styles.rectangleDiv1} />
                            <div className={styles.frameDiv4}>
                              <div className={styles.workflowNameThatIsLong}>
                                Rating Calc
                              </div>
                              <div className={styles.v4Div}>v.4</div>
                            </div>
                            <img
                              className={styles.iconGRIDSTARCUSTOMNodes}
                              alt=""
                            />
                            <div className={styles.frameDiv5}>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconActionsSave}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconGRIDSTARCUSTOMSetti}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconActionsSave}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconGRIDSTARCUSTOMSetti}
                                  alt=""
                                />
                              </div>
                            </div>
                            <img
                              className={styles.connectingPointsIcon1}
                              alt=""
                            />
                            <div className={styles.connectingPointsDiv1}>
                              <div className={styles.rectangleDiv2} />
                              <img className={styles.rectangleIcon} alt="" />
                            </div>
                          </div>
                          <div className={styles.groupDiv4}>
                            <img className={styles.connectorIcon} alt="" />
                            <div className={styles.taskDiv}>
                              <div className={styles.taskNameThatIsLonger}>
                                Rt Rating Tuning
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon1} alt="" />
                            <div className={styles.taskDiv1}>
                              <div className={styles.taskNameThatIsLonger1}>
                                Pdc = PdcPrecalc Rating
                              </div>
                              <div className={styles.rectangleDiv9} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon4}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon6}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                            </div>
                            <div className={styles.connectorDiv}>
                              <img className={styles.vectorIcon4} alt="" />
                              <div className={styles.textDiv}>
                                Pdc != PdcPrecalc Nominal
                              </div>
                            </div>
                            <div className={styles.taskDiv2}>
                              <div className={styles.taskNameThatIsLonger}>
                                TCP Tuning
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon2} alt="" />
                            <div className={styles.taskDiv3}>
                              <div className={styles.taskNameThatIsLonger1}>
                                Plot Optimised?
                              </div>
                              <div className={styles.rectangleDiv9} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon4}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon6}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                            </div>
                            <div className={styles.groupDiv5}>
                              <img className={styles.vectorIcon5} alt="" />
                              <img className={styles.vectorIcon6} alt="" />
                              <img className={styles.vectorIcon7} alt="" />
                              <div className={styles.plotNotOptimized}>
                                Pdc != PdcPrecalc Nominal
                              </div>
                            </div>
                            <div className={styles.groupDiv6}>
                              <img className={styles.vectorIcon8} alt="" />
                              <img className={styles.vectorIcon9} alt="" />
                              <img className={styles.vectorIcon10} alt="" />
                              <div className={styles.plotNotOptimized}>
                                Plot not optimized
                              </div>
                            </div>
                            <div className={styles.connectorDiv1}>
                              <img className={styles.vectorIcon4} alt="" />
                              <div className={styles.textDiv}>
                                Plot optimized
                              </div>
                            </div>
                            <div className={styles.taskDiv4}>
                              <div className={styles.taskNameThatIsLonger}>
                                Rating Table
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <div className={styles.iconGRIDSTARCUSTOMNodes3}>
                                <div className={styles.rectangleDiv16} />
                                <img className={styles.shapeIcon} alt="" />
                              </div>
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                            </div>
                            <div className={styles.frameDiv10}>
                              <img className={styles.connectorIcon3} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.groupDiv10}>
                        <div className={styles.workflowNoYesDefaultConfigDiv4}>
                          <div className={styles.rectangleDiv1} />
                          <div className={styles.frameDiv4}>
                            <div className={styles.workflowNameThatIsLong}>
                              Nominal Calculation
                            </div>
                            <div className={styles.v4Div}>v.4</div>
                          </div>
                          <img
                            className={styles.iconGRIDSTARCUSTOMNodes}
                            alt=""
                            src="../icon--gridstar-custom--nodes20.svg"
                          />
                          <div className={styles.frameDiv5}>
                            <div className={styles.buttonDiv}>
                              <img className={styles.iconActionsSave} alt="" />
                            </div>
                            <div className={styles.buttonDiv}>
                              <img
                                className={styles.iconGRIDSTARCUSTOMSetti}
                                alt=""
                              />
                            </div>
                            <div className={styles.buttonDiv}>
                              <img className={styles.iconActionsSave} alt="" />
                            </div>
                            <div className={styles.buttonDiv}>
                              <img
                                className={styles.iconGRIDSTARCUSTOMSetti}
                                alt=""
                              />
                            </div>
                          </div>
                          <img
                            className={styles.connectingPointsIcon1}
                            alt=""
                          />
                          <div className={styles.connectingPointsDiv1}>
                            <div className={styles.rectangleDiv2} />
                            <img
                              className={styles.rectangleIcon14}
                              alt=""
                              src="../rectangle-6721.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.nominalCalcRect}>
                          <div className={styles.workflowNoYesDefaultPublisDiv}>
                            <img
                              className={styles.rectangleIcon15}
                              alt=""
                              src="../rectangle-6519.svg"
                            />
                            <div className={styles.frameDiv16}>
                              <div className={styles.workflowNameThatIsLong}>
                                Nominal Calc Rectifier with Utn Tuning
                              </div>
                              <div className={styles.v4Div}>v.4</div>
                            </div>
                            <img
                              className={styles.iconGRIDSTARCUSTOMNodes15}
                              alt=""
                              src="../icon--gridstar-custom--nodes20.svg"
                            />
                            <div className={styles.frameDiv17}>
                              <div className={styles.buttonDiv18}>
                                <img
                                  className={styles.iconActionsSave}
                                  alt=""
                                />
                              </div>
                              <div className={styles.watchInputDiv}>
                                <div className={styles.buttonDiv18}>
                                  <img
                                    className={styles.iconActionsSave}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className={styles.buttonDiv18}>
                                <img
                                  className={styles.iconActionsSave}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv18}>
                                <img
                                  className={styles.iconGRIDSTARCUSTOMSetti}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.connectingPointsDiv15}>
                              <div className={styles.rectangleDiv2} />
                              <img
                                className={styles.rectangleIcon}
                                alt=""
                                src="../rectangle-67211.svg"
                              />
                            </div>
                            <img
                              className={styles.groupIcon}
                              alt=""
                              src="../group-2681497.svg"
                            />
                            <div className={styles.frameDiv18}>
                              <div className={styles.oUTDiv}>
                                <div className={styles.rectangleDiv34} />
                                <img
                                  className={styles.iconGRIDSTARCUSTOMAddS}
                                  alt=""
                                  src="../icon--gridstar-custom--add-small.svg"
                                />
                              </div>
                              <div className={styles.oUTDiv1}>
                                <div className={styles.rectangleDiv35} />
                                <b className={styles.b}>3</b>
                              </div>
                              <div className={styles.oUTDiv}>
                                <div className={styles.rectangleDiv36} />
                                <b className={styles.b}>2</b>
                              </div>
                              <div className={styles.oUTDiv}>
                                <div className={styles.rectangleDiv36} />
                                <b className={styles.b}>1</b>
                              </div>
                            </div>
                            <div className={styles.frameDiv19}>
                              <div className={styles.iNDiv}>
                                <div className={styles.rectangleDiv38} />
                                <img
                                  className={styles.iconGRIDSTARCUSTOMAddS1}
                                  alt=""
                                  src="../icon--gridstar-custom--add-small1.svg"
                                />
                              </div>
                              <div className={styles.iNDiv1}>
                                <div className={styles.rectangleDiv39} />
                                <b className={styles.b3}>2</b>
                              </div>
                              <div className={styles.iNDiv}>
                                <div className={styles.rectangleDiv40} />
                                <b className={styles.b3}>1</b>
                              </div>
                              <div className={styles.iNDiv3}>
                                <div className={styles.rectangleDiv41} />
                                <b className={styles.b3}>4</b>
                              </div>
                            </div>
                            <b className={styles.dRAFTB}>DRAFT</b>
                          </div>
                          <div className={styles.groupDiv11}>
                            <div className={styles.groupDiv12}>
                              <img
                                className={styles.connectorIcon8}
                                alt=""
                                src="../connector.svg"
                              />
                              <div className={styles.taskDiv10}>
                                <div className={styles.taskNameThatIsLonger}>
                                  Tune Utn
                                </div>
                                <div className={styles.rectangleDiv7} />
                                <img
                                  className={styles.iconGRIDSTARCUSTOMNodes3}
                                  alt=""
                                  src="../icon--gridstar-custom--nodes22.svg"
                                />
                                <img
                                  className={styles.connectingPointsIcon3}
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <div className={styles.connectingPointsDiv3}>
                                  <div className={styles.rectangleDiv2} />
                                  <img
                                    className={styles.rectangleIcon14}
                                    alt=""
                                    src="../rectangle-6721.svg"
                                  />
                                </div>
                                <div className={styles.badgeDiv}>
                                  <div className={styles.labelDiv1}>New</div>
                                </div>
                              </div>
                              <img
                                className={styles.connectorIcon9}
                                alt=""
                                src="../connector1.svg"
                              />
                              <div className={styles.taskDiv11}>
                                <div className={styles.taskNameThatIsLonger} />
                                <img
                                  className={styles.rectangleIcon18}
                                  alt=""
                                  src="../rectangle-6526.svg"
                                />
                                <div className={styles.rectangleDiv9} />
                                <img
                                  className={styles.iconGRIDSTARCUSTOMNodes3}
                                  alt=""
                                  src="../icon--gridstar-custom--nodes23.svg"
                                />
                                <img
                                  className={styles.connectingPointsIcon4}
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <img
                                  className={styles.connectingPointsIcon3}
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <img
                                  className={styles.connectingPointsIcon6}
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <img
                                  className={styles.connectingPointsIcon27}
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <div className={styles.connectingPointsDiv3}>
                                  <div className={styles.rectangleDiv2} />
                                  <img
                                    className={styles.rectangleIcon14}
                                    alt=""
                                    src="../rectangle-6721.svg"
                                  />
                                </div>
                              </div>
                              <div className={styles.connectorDiv4}>
                                <img
                                  className={styles.vectorIcon20}
                                  alt=""
                                  src="../vector-437.svg"
                                />
                                <div className={styles.textDiv}>TCP~=0</div>
                              </div>
                              <div className={styles.taskDiv12}>
                                <div className={styles.taskNameThatIsLonger}>
                                  Tune rpn
                                </div>
                                <div className={styles.rectangleDiv7} />
                                <img
                                  className={styles.iconGRIDSTARCUSTOMNodes3}
                                  alt=""
                                  src="../icon--gridstar-custom--nodes22.svg"
                                />
                                <img
                                  className={styles.connectingPointsIcon3}
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <div className={styles.connectingPointsDiv3}>
                                  <div className={styles.rectangleDiv2} />
                                  <img
                                    className={styles.rectangleIcon14}
                                    alt=""
                                    src="../rectangle-6721.svg"
                                  />
                                </div>
                                <div className={styles.badgeDiv}>
                                  <div className={styles.labelDiv1}>New</div>
                                </div>
                              </div>
                              <img
                                className={styles.connectorIcon10}
                                alt=""
                                src="../connector1.svg"
                              />
                              <div className={styles.taskDiv13}>
                                <div className={styles.taskNameThatIsLonger}>
                                  Calc Average
                                </div>
                                <div className={styles.rectangleDiv7} />
                                <img
                                  className={styles.iconGRIDSTARCUSTOMNodes3}
                                  alt=""
                                  src="../icon--gridstar-custom--nodes22.svg"
                                />
                                <img
                                  className={styles.connectingPointsIcon3}
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <div className={styles.connectingPointsDiv3}>
                                  <div className={styles.rectangleDiv2} />
                                  <img
                                    className={styles.rectangleIcon14}
                                    alt=""
                                    src="../rectangle-6721.svg"
                                  />
                                </div>
                                <div className={styles.badgeDiv}>
                                  <div className={styles.labelDiv1}>New</div>
                                </div>
                              </div>
                              <img
                                className={styles.connectorIcon11}
                                alt=""
                                src="../connector1.svg"
                              />
                              <div className={styles.taskDiv14}>
                                <div className={styles.taskNameThatIsLonger}>
                                  Tune Rt
                                </div>
                                <div className={styles.rectangleDiv7} />
                                <img
                                  className={styles.iconGRIDSTARCUSTOMNodes3}
                                  alt=""
                                  src="../icon--gridstar-custom--nodes22.svg"
                                />
                                <img
                                  className={styles.connectingPointsIcon3}
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <div className={styles.connectingPointsDiv3}>
                                  <div className={styles.rectangleDiv2} />
                                  <img
                                    className={styles.rectangleIcon14}
                                    alt=""
                                    src="../rectangle-6721.svg"
                                  />
                                </div>
                                <div className={styles.badgeDiv}>
                                  <div className={styles.labelDiv1}>New</div>
                                </div>
                              </div>
                              <img
                                className={styles.connectorIcon12}
                                alt=""
                                src="../connector1.svg"
                              />
                              <div className={styles.taskDiv15}>
                                <div className={styles.taskNameThatIsLonger1}>
                                  Pdc=PdcPrecalc Nominal
                                </div>
                                <div className={styles.rectangleDiv9} />
                                <img
                                  className={styles.iconGRIDSTARCUSTOMNodes3}
                                  alt=""
                                  src="../icon--gridstar-custom--nodes23.svg"
                                />
                                <img
                                  className={styles.connectingPointsIcon4}
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <img
                                  className={styles.connectingPointsIcon3}
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <img
                                  className={styles.connectingPointsIcon27}
                                  alt=""
                                  src="../group-2681497.svg"
                                />
                                <div className={styles.connectingPointsDiv3}>
                                  <div className={styles.rectangleDiv2} />
                                  <img
                                    className={styles.rectangleIcon14}
                                    alt=""
                                    src="../rectangle-6721.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.connectorDiv5}>
                              <img
                                className={styles.vectorIcon21}
                                alt=""
                                src="../vector-4371.svg"
                              />
                              <img
                                className={styles.vectorIcon22}
                                alt=""
                                src="../vector-438.svg"
                              />
                              <img
                                className={styles.vectorIcon23}
                                alt=""
                                src="../vector-439.svg"
                              />
                              <div className={styles.textDiv7}>TCP!=0</div>
                            </div>
                            <div className={styles.groupDiv13}>
                              <img
                                className={styles.vectorIcon24}
                                alt=""
                                src="../vector-4372.svg"
                              />
                              <img
                                className={styles.vectorIcon25}
                                alt=""
                                src="../vector-4381.svg"
                              />
                              <img
                                className={styles.vectorIcon26}
                                alt=""
                                src="../vector-4391.svg"
                              />
                              <div className={styles.plotNotOptimized}>
                                Pdc == PdcPrecalc Nominal
                              </div>
                            </div>
                            <div className={styles.groupDiv14}>
                              <img
                                className={styles.vectorIcon27}
                                alt=""
                                src="../vector.svg"
                              />
                              <div className={styles.pdcPdcPrecalcNominal1}>
                                Pdc != PdcPrecalc Nominal
                              </div>
                            </div>
                            <div className={styles.groupDiv15}>
                              <img
                                className={styles.vectorIcon28}
                                alt=""
                                src="../vector-4382.svg"
                              />
                              <div
                                className={styles.pdcPdcPrecalcTCP0}
                              >{`pdc = pdc_precalc & TCP ~= 0`}</div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.nominalCalcInv}>
                          <div
                            className={styles.workflowNoYesDefaultPublisDiv1}
                          >
                            <img
                              className={styles.rectangleIcon24}
                              alt=""
                              src="../rectangle-65191.svg"
                            />
                            <div className={styles.frameDiv16}>
                              <div className={styles.workflowNameThatIsLong}>
                                Nominal Calc Inverter without Utn Tuning
                              </div>
                              <div className={styles.v4Div}>v.4</div>
                            </div>
                            <img
                              className={styles.iconGRIDSTARCUSTOMNodes15}
                              alt=""
                              src="../icon--gridstar-custom--nodes20.svg"
                            />
                            <div className={styles.frameDiv17}>
                              <div className={styles.buttonDiv18}>
                                <img
                                  className={styles.iconActionsSave}
                                  alt=""
                                />
                              </div>
                              <div className={styles.watchInputDiv}>
                                <div className={styles.buttonDiv18}>
                                  <img
                                    className={styles.iconActionsSave}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className={styles.buttonDiv18}>
                                <img
                                  className={styles.iconActionsSave}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv18}>
                                <img
                                  className={styles.iconGRIDSTARCUSTOMSetti}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className={styles.connectingPointsDiv22}>
                              <div className={styles.rectangleDiv2} />
                              <img
                                className={styles.rectangleIcon}
                                alt=""
                                src="../rectangle-67211.svg"
                              />
                            </div>
                            <img className={styles.groupIcon1} alt="" />
                            <div className={styles.frameDiv18}>
                              <div className={styles.oUTDiv}>
                                <div className={styles.rectangleDiv34} />
                                <img
                                  className={styles.iconGRIDSTARCUSTOMAddS}
                                  alt=""
                                />
                              </div>
                              <div className={styles.oUTDiv1}>
                                <div className={styles.rectangleDiv35} />
                                <b className={styles.b}>3</b>
                              </div>
                              <div className={styles.oUTDiv}>
                                <div className={styles.rectangleDiv36} />
                                <b className={styles.b}>2</b>
                              </div>
                              <div className={styles.oUTDiv}>
                                <div className={styles.rectangleDiv36} />
                                <b className={styles.b}>1</b>
                              </div>
                            </div>
                            <div className={styles.frameDiv23}>
                              <div className={styles.iNDiv}>
                                <div className={styles.rectangleDiv38} />
                                <img
                                  className={styles.iconGRIDSTARCUSTOMAddS1}
                                  alt=""
                                  src="../icon--gridstar-custom--add-small1.svg"
                                />
                              </div>
                              <div className={styles.iNDiv1}>
                                <div className={styles.rectangleDiv39} />
                                <b className={styles.b3}>2</b>
                              </div>
                              <div className={styles.iNDiv}>
                                <div className={styles.rectangleDiv40} />
                                <b className={styles.b3}>1</b>
                              </div>
                              <div className={styles.iNDiv3}>
                                <div className={styles.rectangleDiv41} />
                                <b className={styles.b3}>4</b>
                              </div>
                            </div>
                          </div>
                          <b className={styles.dRAFTB1}>DRAFT</b>
                          <div className={styles.groupDiv16}>
                            <img
                              className={styles.connectorIcon13}
                              alt=""
                              src="../connector5.svg"
                            />
                            <div className={styles.taskDiv16}>
                              <div className={styles.taskNameThatIsLonger}>
                                Tune rpn
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                                src="../icon--gridstar-custom--nodes29.svg"
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                                src="../connecting-points11.svg"
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img
                                  className={styles.rectangleIcon14}
                                  alt=""
                                  src="../rectangle-67219.svg"
                                />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img
                              className={styles.connectorIcon14}
                              alt=""
                              src="../connector6.svg"
                            />
                            <div className={styles.taskDiv17}>
                              <div className={styles.taskNameThatIsLonger} />
                              <div className={styles.rectangleDiv9} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                                src="../icon--gridstar-custom--nodes30.svg"
                              />
                              <img
                                className={styles.connectingPointsIcon35}
                                alt=""
                                src="../connecting-points11.svg"
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                                src="../connecting-points11.svg"
                              />
                              <img
                                className={styles.connectingPointsIcon6}
                                alt=""
                                src="../connecting-points11.svg"
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img
                                  className={styles.rectangleIcon14}
                                  alt=""
                                  src="../rectangle-67219.svg"
                                />
                              </div>
                            </div>
                            <div className={styles.connectorDiv6}>
                              <img
                                className={styles.vectorIcon20}
                                alt=""
                                src="../vector-4373.svg"
                              />
                              <div className={styles.textDiv}>
                                rpn(n) != rpn(n-1)
                              </div>
                            </div>
                            <div className={styles.taskDiv18}>
                              <div className={styles.taskNameThatIsLonger}>
                                Calc Average
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                                src="../icon--gridstar-custom--nodes29.svg"
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                                src="../connecting-points11.svg"
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img
                                  className={styles.rectangleIcon14}
                                  alt=""
                                  src="../rectangle-67219.svg"
                                />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img
                              className={styles.connectorIcon15}
                              alt=""
                              src="../connector6.svg"
                            />
                            <div className={styles.taskDiv19}>
                              <div className={styles.taskNameThatIsLonger}>
                                Tune Rt
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img
                                  className={styles.rectangleIcon14}
                                  alt=""
                                  src="../rectangle-67219.svg"
                                />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon16} alt="" />
                            <div className={styles.taskDiv20}>
                              <div className={styles.taskNameThatIsLonger} />
                              <div className={styles.rectangleDiv9} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon4}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon6}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                            </div>
                            <img
                              className={styles.vectorIcon30}
                              alt=""
                              src="../vector1.svg"
                            />
                            <img
                              className={styles.vectorIcon31}
                              alt=""
                              src="../vector-4383.svg"
                            />
                            <div className={styles.rpnnRpnn1}>
                              rpn(n) = rpn(n-1)
                            </div>
                            <div className={styles.pdcPdcPrecalc}>
                              Pdc == PdcPrecalc
                            </div>
                            <div className={styles.groupDiv17}>
                              <img
                                className={styles.vectorIcon32}
                                alt=""
                                src="../vector2.svg"
                              />
                              <div className={styles.pdcPdcPrecalc1}>
                                Pdc != PdcPrecalc
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={styles.connectorIO}
                          alt=""
                          src="../connector-io.svg"
                        />
                        <img className={styles.connectorIO1} alt="" />
                        <img
                          className={styles.connectorIO2}
                          alt=""
                          src="../connector-io1.svg"
                        />
                        <img className={styles.connectorIO3} alt="" />
                        <img className={styles.connectorIO4} alt="" />
                        <img className={styles.connectorIO5} alt="" />
                        <img className={styles.connectorIO6} alt="" />
                        <img className={styles.connectorIO7} alt="" />
                        <img
                          className={styles.connectorIO8}
                          alt=""
                          src="../connector-io2.svg"
                        />
                        <img
                          className={styles.connectorIO9}
                          alt=""
                          src="../connector-io3.svg"
                        />
                      </div>
                      <div className={styles.groupDiv18}>
                        <div className={styles.precalcDiv}>
                          <div
                            className={styles.workflowNoYesDefaultConfigDiv5}
                          >
                            <div className={styles.rectangleDiv1} />
                            <div className={styles.frameDiv4}>
                              <div className={styles.workflowNameThatIsLong}>
                                Precalculation Rectifier
                              </div>
                              <div className={styles.v4Div}>v.4</div>
                            </div>
                            <img
                              className={styles.iconGRIDSTARCUSTOMNodes}
                              alt=""
                            />
                            <div className={styles.frameDiv5}>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconActionsSave}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconGRIDSTARCUSTOMSetti}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconActionsSave}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconGRIDSTARCUSTOMSetti}
                                  alt=""
                                />
                              </div>
                            </div>
                            <img
                              className={styles.connectingPointsIcon}
                              alt=""
                              src="../group-2681497.svg"
                            />
                            <div className={styles.connectingPointsDiv}>
                              <div className={styles.rectangleDiv2} />
                              <img className={styles.rectangleIcon} alt="" />
                            </div>
                          </div>
                          <div className={styles.groupDiv19}>
                            <img className={styles.connectorIcon17} alt="" />
                            <div className={styles.taskDiv10}>
                              <div className={styles.taskNameThatIsLonger}>
                                Cables
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon18} alt="" />
                            <div className={styles.taskDiv11}>
                              <div className={styles.taskNameThatIsLonger}>
                                Power Defined
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon19} alt="" />
                            <div className={styles.taskDiv12}>
                              <div className={styles.rectangleDiv79} />
                              <div className={styles.taskNameThatIsLonger}>
                                Reactive Power Constraints
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes31}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon20} alt="" />
                            <div className={styles.taskDiv13}>
                              <div className={styles.taskNameThatIsLonger}>
                                Corners PQ
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon21} alt="" />
                            <div className={styles.taskDiv14}>
                              <div className={styles.taskNameThatIsLonger}>
                                Transformer Rating
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon22} alt="" />
                            <div className={styles.taskDiv15}>
                              <div className={styles.taskNameThatIsLonger}>
                                Converter Reactor
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon23} alt="" />
                            <div className={styles.taskDiv27}>
                              <div className={styles.taskNameThatIsLonger}>
                                Transformer Impedance
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes35}
                                alt=""
                                src="../icon--gridstar-custom--nodes32.svg"
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                                src="../group-2681497.svg"
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img
                              className={styles.connectorIcon24}
                              alt=""
                              src="../connector1.svg"
                            />
                            <div className={styles.taskDiv28}>
                              <div className={styles.taskNameThatIsLonger}>
                                Voltage Variations
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                                src="../icon--gridstar-custom--nodes22.svg"
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                                src="../group-2681497.svg"
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img
                                  className={styles.rectangleIcon14}
                                  alt=""
                                  src="../rectangle-6721.svg"
                                />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img
                              className={styles.connectorIcon25}
                              alt=""
                              src="../connector1.svg"
                            />
                            <div className={styles.taskDiv29}>
                              <div className={styles.taskNameThatIsLonger}>
                                AC Cable Data
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                                src="../icon--gridstar-custom--nodes22.svg"
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                                src="../group-2681497.svg"
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img
                                  className={styles.rectangleIcon14}
                                  alt=""
                                  src="../rectangle-6721.svg"
                                />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img
                              className={styles.connectorIcon26}
                              alt=""
                              src="../connector1.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.precalcDiv1}>
                          <div
                            className={styles.workflowNoYesDefaultConfigDiv5}
                          >
                            <div className={styles.rectangleDiv1} />
                            <div className={styles.frameDiv4}>
                              <div className={styles.workflowNameThatIsLong}>
                                Precalculation Inverter
                              </div>
                              <div className={styles.v4Div}>v.4</div>
                            </div>
                            <img
                              className={styles.iconGRIDSTARCUSTOMNodes}
                              alt=""
                            />
                            <div className={styles.frameDiv5}>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconActionsSave}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconGRIDSTARCUSTOMSetti}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconActionsSave}
                                  alt=""
                                />
                              </div>
                              <div className={styles.buttonDiv}>
                                <img
                                  className={styles.iconGRIDSTARCUSTOMSetti}
                                  alt=""
                                />
                              </div>
                            </div>
                            <img
                              className={styles.connectingPointsIcon}
                              alt=""
                              src="../group-2681497.svg"
                            />
                            <div className={styles.connectingPointsDiv}>
                              <div className={styles.rectangleDiv2} />
                              <img className={styles.rectangleIcon} alt="" />
                            </div>
                          </div>
                          <div className={styles.groupDiv19}>
                            <img className={styles.connectorIcon17} alt="" />
                            <div className={styles.taskDiv10}>
                              <div className={styles.taskNameThatIsLonger}>
                                Cables
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon18} alt="" />
                            <div className={styles.taskDiv11}>
                              <div className={styles.taskNameThatIsLonger}>
                                Power Defined
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon19} alt="" />
                            <div className={styles.taskDiv12}>
                              <div className={styles.taskNameThatIsLonger}>
                                Reactive Power Constraints
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon20} alt="" />
                            <div className={styles.taskDiv13}>
                              <div className={styles.taskNameThatIsLonger}>
                                Corners PQ
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon21} alt="" />
                            <div className={styles.taskDiv14}>
                              <div className={styles.taskNameThatIsLonger}>
                                Transformer Rating
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon22} alt="" />
                            <div className={styles.taskDiv15}>
                              <div className={styles.taskNameThatIsLonger}>
                                Converter Reactor
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img className={styles.connectorIcon23} alt="" />
                            <div className={styles.taskDiv27}>
                              <div className={styles.taskNameThatIsLonger}>
                                Transformer Impedance
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes35}
                                alt=""
                                src="../icon--gridstar-custom--nodes32.svg"
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                                src="../group-2681497.svg"
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img
                              className={styles.connectorIcon24}
                              alt=""
                              src="../connector1.svg"
                            />
                            <div className={styles.taskDiv28}>
                              <div className={styles.taskNameThatIsLonger}>
                                Voltage Variations
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                                src="../icon--gridstar-custom--nodes22.svg"
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                                src="../group-2681497.svg"
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img
                                  className={styles.rectangleIcon14}
                                  alt=""
                                  src="../rectangle-6721.svg"
                                />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img
                              className={styles.connectorIcon25}
                              alt=""
                              src="../connector1.svg"
                            />
                            <div className={styles.taskDiv29}>
                              <div className={styles.taskNameThatIsLonger}>
                                AC Cable Data
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes3}
                                alt=""
                                src="../icon--gridstar-custom--nodes22.svg"
                              />
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                                src="../group-2681497.svg"
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img
                                  className={styles.rectangleIcon14}
                                  alt=""
                                  src="../rectangle-6721.svg"
                                />
                              </div>
                              <div className={styles.badgeDiv}>
                                <div className={styles.labelDiv1}>New</div>
                              </div>
                            </div>
                            <img
                              className={styles.connectorIcon26}
                              alt=""
                              src="../connector1.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.connectorIO10}
                        alt=""
                        src="../connector-io4.svg"
                      />
                      <img
                        className={styles.connectorIO11}
                        alt=""
                        src="../connector-io5.svg"
                      />
                      <img
                        className={styles.connectorIO12}
                        alt=""
                        src="../connector-io6.svg"
                      />
                      <img
                        className={styles.connectorIO13}
                        alt=""
                        src="../connector-io7.svg"
                      />
                      <div className={styles.postProcessingDiv}>
                        <div className={styles.workflowNoYesDefaultConfigDiv7}>
                          <div className={styles.rectangleDiv1} />
                          <div className={styles.frameDiv4}>
                            <div className={styles.workflowNameThatIsLong}>
                              Post Processing
                            </div>
                            <div className={styles.v4Div}>v.4</div>
                          </div>
                          <img
                            className={styles.iconGRIDSTARCUSTOMNodes}
                            alt=""
                          />
                          <div className={styles.frameDiv5}>
                            <div className={styles.buttonDiv}>
                              <img className={styles.iconActionsSave} alt="" />
                            </div>
                            <div className={styles.buttonDiv}>
                              <img
                                className={styles.iconGRIDSTARCUSTOMSetti}
                                alt=""
                              />
                            </div>
                            <div className={styles.buttonDiv}>
                              <img className={styles.iconActionsSave} alt="" />
                            </div>
                            <div className={styles.buttonDiv}>
                              <img
                                className={styles.iconGRIDSTARCUSTOMSetti}
                                alt=""
                              />
                            </div>
                          </div>
                          <img
                            className={styles.connectingPointsIcon1}
                            alt=""
                          />
                          <div className={styles.connectingPointsDiv1}>
                            <div className={styles.rectangleDiv2} />
                            <img className={styles.rectangleIcon} alt="" />
                          </div>
                        </div>
                        <div className={styles.groupDiv21}>
                          <img className={styles.connectorIcon37} alt="" />
                          <div className={styles.taskDiv39}>
                            <div className={styles.taskNameThatIsLonger}>
                              Vector Generation
                            </div>
                            <div className={styles.rectangleDiv7} />
                            <img
                              className={styles.iconGRIDSTARCUSTOMNodes3}
                              alt=""
                            />
                            <img
                              className={styles.connectingPointsIcon3}
                              alt=""
                            />
                            <div className={styles.connectingPointsDiv3}>
                              <div className={styles.rectangleDiv2} />
                              <img className={styles.rectangleIcon} alt="" />
                            </div>
                            <div className={styles.badgeDiv}>
                              <div className={styles.labelDiv1}>New</div>
                            </div>
                          </div>
                          <img className={styles.connectorIcon38} alt="" />
                          <div className={styles.taskDiv40}>
                            <div className={styles.taskNameThatIsLonger}>
                              Post Processing
                            </div>
                            <div className={styles.rectangleDiv7} />
                            <img
                              className={styles.iconGRIDSTARCUSTOMNodes3}
                              alt=""
                            />
                            <img
                              className={styles.connectingPointsIcon3}
                              alt=""
                            />
                            <div className={styles.connectingPointsDiv3}>
                              <div className={styles.rectangleDiv2} />
                              <img className={styles.rectangleIcon} alt="" />
                            </div>
                            <div className={styles.badgeDiv}>
                              <div className={styles.labelDiv1}>New</div>
                            </div>
                          </div>
                          <img className={styles.groupIcon2} alt="" />
                          <div className={styles.frameDiv30}>
                            <div className={styles.taskDiv41}>
                              <div className={styles.taskNameThatIsLonger}>
                                General
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <div className={styles.iconGRIDSTARCUSTOMNodes3}>
                                <div className={styles.rectangleDiv121} />
                                <img className={styles.shapeIcon} alt="" />
                              </div>
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                            </div>
                            <div className={styles.frameDiv31}>
                              <div className={styles.taskDiv41}>
                                <div className={styles.taskNameThatIsLonger}>
                                  Rating
                                </div>
                                <div className={styles.rectangleDiv7} />
                                <div
                                  className={styles.iconGRIDSTARCUSTOMNodes3}
                                >
                                  <div className={styles.rectangleDiv16} />
                                  <img className={styles.shapeIcon} alt="" />
                                </div>
                                <img
                                  className={styles.connectingPointsIcon3}
                                  alt=""
                                />
                                <div className={styles.connectingPointsDiv3}>
                                  <div className={styles.rectangleDiv2} />
                                  <img
                                    className={styles.rectangleIcon}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <img className={styles.connectorIcon39} alt="" />
                              <div className={styles.taskDiv41}>
                                <div className={styles.taskNameThatIsLonger}>
                                  Add Tolerances
                                </div>
                                <div className={styles.rectangleDiv7} />
                                <div
                                  className={styles.iconGRIDSTARCUSTOMNodes3}
                                >
                                  <div className={styles.rectangleDiv127} />
                                  <img className={styles.unionIcon1} alt="" />
                                </div>
                                <img
                                  className={styles.connectingPointsIcon3}
                                  alt=""
                                />
                                <div className={styles.connectingPointsDiv3}>
                                  <div className={styles.rectangleDiv2} />
                                  <img
                                    className={styles.rectangleIcon}
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.taskDiv41}>
                              <div className={styles.taskNameThatIsLonger}>
                                Loss Points
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <div className={styles.iconGRIDSTARCUSTOMNodes3}>
                                <div className={styles.rectangleDiv16} />
                                <img className={styles.shapeIcon} alt="" />
                              </div>
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                            </div>
                            <div className={styles.taskDiv41}>
                              <div className={styles.taskNameThatIsLonger}>
                                Filter Points
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <div className={styles.iconGRIDSTARCUSTOMNodes3}>
                                <div className={styles.rectangleDiv16} />
                                <img className={styles.shapeIcon} alt="" />
                              </div>
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                            </div>
                            <div className={styles.taskDiv41}>
                              <div className={styles.taskNameThatIsLonger}>
                                TSI Points
                              </div>
                              <div className={styles.rectangleDiv7} />
                              <div className={styles.iconGRIDSTARCUSTOMNodes3}>
                                <div className={styles.rectangleDiv16} />
                                <img className={styles.shapeIcon} alt="" />
                              </div>
                              <img
                                className={styles.connectingPointsIcon3}
                                alt=""
                              />
                              <div className={styles.connectingPointsDiv3}>
                                <div className={styles.rectangleDiv2} />
                                <img className={styles.rectangleIcon} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mCPStationDiv}>
                    <div className={styles.workflowNonoDefaultConfigDiv}>
                      <div className={styles.workflowNameThatIsLong10}>
                        Station 2
                      </div>
                      <div className={styles.rectangleDiv1} />
                      <img
                        className={styles.iconGRIDSTARCUSTOMNodes57}
                        alt=""
                      />
                      <div className={styles.buttonDiv38}>
                        <img className={styles.iconActionsSave} alt="" />
                      </div>
                      <div className={styles.buttonDiv39}>
                        <img className={styles.iconActionsSave} alt="" />
                      </div>
                      <div className={styles.connectingPointsDiv57}>
                        <div className={styles.rectangleDiv2} />
                        <img className={styles.rectangleIcon} alt="" />
                      </div>
                      <img className={styles.connectingPointsIcon1} alt="" />
                    </div>
                  </div>
                  <img className={styles.connectorIO14} alt="" />
                  <img
                    className={styles.connectorIO15}
                    alt=""
                    src="../connector-io8.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.controlPanelConfiguration}>
            <div
              className={styles.frameDiv32}
              onClick={onFrameContainer32Click}
            >
              <div className={styles.buttonDiv40}>
                <img
                  className={styles.iconDirectionsBackwards}
                  alt=""
                  src="../icon--directions--backwards.svg"
                />
              </div>
              <div className={styles.frameDiv33}>
                <img
                  className={styles.iconGRIDSTARCUSTOMSetti}
                  alt=""
                  src="../icon--gridstar-custom--nodes38.svg"
                />
                <div className={styles.tuneUtnDiv}>Tune utn</div>
              </div>
            </div>
            <div className={styles.frameDiv34}>
              <div className={styles.frameDiv35}>
                <div className={styles.frameDiv36}>
                  <img
                    className={styles.iconGRIDSTARCUSTOMSetti}
                    alt=""
                    src="../icon--gridstar-custom--nodes39.svg"
                  />
                  <input
                    className={styles.inputBox}
                    type="text"
                    placeholder="Flow Control  Trafo"
                  />
                </div>
                <div className={styles.frameDiv37}>
                  <button className={styles.button3}>
                    <img
                      className={styles.iconActionsSave}
                      alt=""
                      src="../icon--actions--save.svg"
                    />
                    <div className={styles.labelDiv32}>Save</div>
                  </button>
                  <div className={styles.frameDiv38}>
                    <div className={styles.divider} />
                  </div>
                  <button className={styles.button4}>
                    <img
                      className={styles.iconActionsSave}
                      alt=""
                      src="../icon1.svg"
                    />
                  </button>
                  <button className={styles.button4}>
                    <img
                      className={styles.iconGRIDSTARCUSTOMSetti}
                      alt=""
                      src="../icon--gridstar-custom--min-maximise.svg"
                    />
                  </button>
                  <button className={styles.button4}>
                    <img
                      className={styles.iconActionsSave}
                      alt=""
                      src="../icon--actions--close.svg"
                    />
                  </button>
                </div>
              </div>
              <div className={styles.frameInnerDiv}>
                <div className={styles.dataManipulationTaskPopup}>
                  <div className={styles.frameDiv39}>
                    <div className={styles.expressionBuilder1}>
                      <div className={styles.sectionTitleDiv}>
                        Rule Expressions
                      </div>
                      <div className={styles.frameDiv40}>
                        <div className={styles.labelDiv33}>1.</div>
                        <div className={styles.frameDiv41}>
                          <input
                            className={styles.inputBox1}
                            type="text"
                            placeholder="@MCP.S1.Rectifier.NominalCalc.TuneutnOut.TCP != 0
"
                          />
                          <div className={styles.frameDiv41}>
                            <div className={styles.frameDiv31}>
                              <img
                                className={styles.connectorIcon40}
                                alt=""
                                src="../connector14.svg"
                              />
                            </div>
                            <div
                              className={styles.selectTargetnodeDiv}
                              onClick={openConfigVariableProperty}
                            >
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes60}
                                alt=""
                                src="../icon--gridstar-custom--nodes40.svg"
                              />
                              <select className={styles.dropDownInput}>
                                <option value="@MCP.S1.Rectifier.NominalCalc.Tuneutn">
                                  1
                                </option>
                                <option value="@MCP.S1.Rectifier.NominalCalc.xxx">
                                  2
                                </option>
                                <option value="@MCP.S1.Rectifier.NominalCalc">
                                  3
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <button className={styles.button7}>
                          <img
                            className={styles.iconGRIDSTARCUSTOMSetti}
                            alt=""
                            src="../icon--actions--close-small.svg"
                          />
                        </button>
                      </div>
                      <div className={styles.frameDiv40}>
                        <div className={styles.labelDiv33}>2.</div>
                        <div className={styles.frameDiv45}>
                          <input className={styles.inputBox2} type="text" />
                          <div className={styles.frameDiv31}>
                            <div className={styles.frameDiv31}>
                              <img
                                className={styles.connectorIcon40}
                                alt=""
                                src="../connector14.svg"
                              />
                            </div>
                            <div
                              className={styles.selectTargetnodeDiv}
                              onClick={openConfigVariableProperty1}
                            >
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes60}
                                alt=""
                                src="../icon--gridstar-custom--nodes41.svg"
                              />
                              <select className={styles.dropDownInput}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <button className={styles.button7}>
                          <img
                            className={styles.iconGRIDSTARCUSTOMSetti}
                            alt=""
                            src="../icon--actions--close-small.svg"
                          />
                        </button>
                      </div>
                      <div className={styles.frameDiv40}>
                        <div className={styles.labelDiv33}>3.</div>
                        <div className={styles.frameDiv45}>
                          <input
                            className={styles.inputBox2}
                            type="text"
                            placeholder={`@MCp.S1.Rectifier.NominalCalc.TuneUtN.out.pdc = S1.Rectifier.Precalc.PowerDefined.out.pdc & S1.Rectifier.NominalCalc.TuneUtN.out.TCP  ~= 0`}
                          />
                          <div className={styles.frameDiv31}>
                            <div className={styles.frameDiv31}>
                              <img
                                className={styles.connectorIcon40}
                                alt=""
                                src="../connector14.svg"
                              />
                            </div>
                            <div
                              className={styles.selectTargetnodeDiv}
                              onClick={openConfigVariableProperty2}
                            >
                              <img
                                className={styles.iconGRIDSTARCUSTOMNodes62}
                                alt=""
                                src="../icon--gridstar-custom--nodes42.svg"
                              />
                              <select className={styles.dropDownInput}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <button className={styles.button7}>
                          <img
                            className={styles.iconGRIDSTARCUSTOMSetti}
                            alt=""
                            src="../icon--actions--close-small.svg"
                          />
                        </button>
                      </div>
                      <button className={styles.button10}>
                        <img
                          className={styles.iconGRIDSTARCUSTOMSetti}
                          alt=""
                          src="../icon--actions--new.svg"
                        />
                        <div className={styles.labelDiv32}>New Expression</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv52}>
              <div className={styles.frameDiv53}>
                <div className={styles.buttonDiv40}>
                  <img
                    className={styles.iconDirectionsBackwards}
                    alt=""
                    src="../icon--directions--backwards.svg"
                  />
                </div>
                <div className={styles.frameDiv33}>
                  <img
                    className={styles.iconGRIDSTARCUSTOMSetti}
                    alt=""
                    src="../icon--gridstar-custom--nodes38.svg"
                  />
                  <div className={styles.tuneUtnDiv1}>Tune utn</div>
                </div>
              </div>
              <div className={styles.frameDiv55}>
                <div className={styles.buttonDiv40}>
                  <img
                    className={styles.iconDirectionsBackwards}
                    alt=""
                    src="../icon--directions--backwards.svg"
                  />
                </div>
                <img
                  className={styles.iconGRIDSTARCUSTOMNodes64}
                  alt=""
                  src="../icon--gridstar-custom--nodes38.svg"
                />
                <div className={styles.tuneRtnDiv}>Tune rtn</div>
              </div>
              <div className={styles.frameDiv55}>
                <div className={styles.buttonDiv40}>
                  <img
                    className={styles.iconDirectionsBackwards}
                    alt=""
                    src="../icon--directions--backwards.svg"
                  />
                </div>
                <img
                  className={styles.iconGRIDSTARCUSTOMNodes64}
                  alt=""
                  src="../icon--gridstar-custom--nodes38.svg"
                />
                <div className={styles.tuneRtnDiv}>Output</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.horizontalNavigationDiv}>
          <div className={styles.highlightDiv} />
          <div className={styles.menuBarDiv}>
            <div className={styles.frameDiv57}>
              <div className={styles.groupDiv22}>
                <div className={styles.buttonDiv44}>
                  <div className={styles.labelDiv37}>Clear</div>
                </div>
                <div className={styles.groupDiv23}>
                  <img
                    className={styles.component1Icon}
                    alt=""
                    src="../component-11.svg"
                  />
                  <div className={styles.gridStarDiv}>
                    <div className={styles.gridstarDiv}>Gridstar</div>
                  </div>
                </div>
              </div>
              <img className={styles.borderIcon} alt="" src="../border.svg" />
              <div className={styles.frameDiv58}>
                <div className={styles.horizontalNavigationDiv1}>
                  <div className={styles.itemAutoLayout}>
                    <img
                      className={styles.iconGRIDSTARCUSTOMSetti}
                      alt=""
                      src="../icon--gridstar-custom--projects-all.svg"
                    />
                  </div>
                </div>
                <div className={styles.horizontalNavigationDiv2}>
                  <div className={styles.frameDiv59}>
                    <div className={styles.itemAutoLayout1}>
                      <div className={styles.iconGRIDSTARCUSTOMSetti}>
                        <div className={styles.rectangleDiv140} />
                        <b className={styles.gLB}>GL</b>
                        <img
                          className={styles.gLIcon}
                          alt=""
                          src="../gl1.svg"
                        />
                      </div>
                      <div className={styles.textDiv9}>GridLink</div>
                    </div>
                    <div className={styles.buttonDiv18}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMSetti}
                        alt=""
                        src="../close-small.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.horizontalNavigationDiv3}>
                  <div className={styles.frameDiv31}>
                    <div className={styles.itemAutoLayout2}>
                      <div className={styles.iconGRIDSTARCUSTOMSetti}>
                        <div className={styles.rectangleDiv141} />
                        <img
                          className={styles.p1Icon}
                          alt=""
                          src="../p11.svg"
                        />
                      </div>
                      <div className={styles.tuneUtnDiv}>Project 1</div>
                    </div>
                    <div className={styles.buttonDiv18}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMSetti}
                        alt=""
                        src="../close-small.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.horizontalNavigationDiv3}>
                  <div className={styles.frameDiv31}>
                    <div className={styles.itemAutoLayout2}>
                      <div className={styles.iconGRIDSTARCUSTOMSetti}>
                        <div className={styles.rectangleDiv141} />
                        <img
                          className={styles.p2Icon}
                          alt=""
                          src="../p21.svg"
                        />
                      </div>
                      <div className={styles.tuneUtnDiv}>Project 2</div>
                    </div>
                    <div className={styles.buttonDiv18}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMSetti}
                        alt=""
                        src="../close-small.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.horizontalNavigationDiv3}>
                  <div className={styles.frameDiv31}>
                    <div className={styles.itemAutoLayout2}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMSetti}
                        alt=""
                        src="../icon--gridstar-custom--studyicongridstar-customstudy-management2.svg"
                      />
                      <div className={styles.tuneUtnDiv}>Study Management</div>
                    </div>
                    <div className={styles.buttonDiv18}>
                      <img
                        className={styles.iconGRIDSTARCUSTOMSetti}
                        alt=""
                        src="../close-small.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.actionsDiv}>
              <div className={styles.buttonDiv18}>
                <img
                  className={styles.iconGRIDSTARCUSTOMSetti}
                  alt=""
                  src="../icon--gridstar-custom--studyicongridstar-customstudy-management2.svg"
                />
              </div>
              <div className={styles.buttonDiv18}>
                <img
                  className={styles.iconGRIDSTARCUSTOMSetti}
                  alt=""
                  src="../icon--gridstar-custom--settings.svg"
                />
              </div>
              <div className={styles.buttonDiv18}>
                <img
                  className={styles.iconGRIDSTARCUSTOMSetti}
                  alt=""
                  src="../badge.svg"
                />
              </div>
              <div className={styles.buttonDiv18}>
                <div className={styles.iconGRIDSTARCUSTOMSetti}>
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
        <div className={styles.openSelectionArea}>
          <div className={styles.buttonDiv53}>
            <img
              className={styles.iconActionsSave}
              alt=""
              src="../icon--controls--add1.svg"
            />
          </div>
        </div>
        <div className={styles.groupDiv24}>
          <div className={styles.frameDiv63}>
            <div className={styles.buttonDiv18}>
              <img
                className={styles.iconActionsSave}
                alt=""
                src="../icon--controls--zoomin.svg"
              />
            </div>
            <div className={styles.divider1} />
            <div className={styles.buttonDiv18}>
              <img
                className={styles.iconActionsSave}
                alt=""
                src="../icon--controls--zoomout.svg"
              />
            </div>
          </div>
          <div className={styles.frameDiv64}>
            <div className={styles.buttonDiv18}>
              <div className={styles.iconGRIDSTARCUSTOMSetti}>
                <div className={styles.groupDiv25}>
                  <div className={styles.subtractDiv}>
                    <div className={styles.rectangleDiv143} />
                    <div className={styles.rectangleDiv144} />
                    <div className={styles.rectangleDiv145} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isStateListWorkspacesOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeStateListWorkspaces}
        >
          <StateListWorkspaces onClose={closeStateListWorkspaces} />
        </PortalPopup>
      )}
      {isConfigVariablePropertyOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfigVariableProperty}
        >
          <ConfigVariableProperty onClose={closeConfigVariableProperty} />
        </PortalPopup>
      )}
      {isConfigVariableProperty1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfigVariableProperty1}
        >
          <ConfigVariableProperty onClose={closeConfigVariableProperty1} />
        </PortalPopup>
      )}
      {isConfigVariableProperty2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfigVariableProperty2}
        >
          <ConfigVariableProperty onClose={closeConfigVariableProperty2} />
        </PortalPopup>
      )}
    </>
  );
};

export default Workspace;
