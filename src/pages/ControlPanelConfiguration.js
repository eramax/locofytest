import styles from "./ControlPanelConfiguration.module.css";

const ControlPanelConfiguration = () => {
  return (
    <div className={styles.controlPanelConfiguration}>
      <div className={styles.frameDiv}>
        <div className={styles.buttonDiv}>
          <img
            className={styles.iconDirectionsBackwards}
            alt=""
            src="../icon--directions--backwards4.svg"
          />
        </div>
        <div className={styles.frameDiv1}>
          <img
            className={styles.iconGRIDSTARCUSTOMNodes}
            alt=""
            src="../icon--gridstar-custom--nodes49.svg"
          />
          <div className={styles.powerDefinedDiv}>Power Defined</div>
        </div>
      </div>
      <div className={styles.frameDiv2}>
        <div className={styles.frameDiv3}>
          <div className={styles.frameDiv4}>
            <img
              className={styles.iconGRIDSTARCUSTOMNodes}
              alt=""
              src="../icon--gridstar-custom--nodes50.svg"
            />
            <div className={styles.inputBoxDiv}>
              <div className={styles.assetsInputLabel}>
                <div className={styles.labelDiv}>Label</div>
              </div>
              <div className={styles.assetsInputBox}>
                <div className={styles.inputAutoLayout}>
                  <div className={styles.labelDiv1}>
                    Reactive Power Constraints
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.inputBoxDiv}>
              <div className={styles.assetsInputLabel}>
                <div className={styles.labelDiv}>Label</div>
              </div>
              <div className={styles.assetsInputBox}>
                <div className={styles.inputAutoLayout}>
                  <div className={styles.labelDiv1}>
                    Define where the power is controlled.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.tagsDiv}>
              <div className={styles.tagDiv}>
                <div className={styles.powerDefinedDiv}>Study: MCP</div>
              </div>
              <div className={styles.tagDiv}>
                <div className={styles.powerDefinedDiv}>Tag: Value</div>
              </div>
              <div className={styles.buttonDiv1}>
                <img
                  className={styles.iconControlsAdd}
                  alt=""
                  src="../icon--controls--add.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameDiv5}>
            <div className={styles.buttonDiv2}>
              <img
                className={styles.iconControlsAdd}
                alt=""
                src="../icon--actions--save2.svg"
              />
              <div className={styles.labelDiv}>Save</div>
            </div>
            <div className={styles.buttonDiv1}>
              <img
                className={styles.iconControlsAdd}
                alt=""
                src="../icon--actions--close1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameDiv6}>
          <div className={styles.inputControlDiv}>
            <div className={styles.frameDiv7}>
              <div className={styles.frameDiv4}>
                <img
                  className={styles.iconControlsAdd}
                  alt=""
                  src="../icon--gridstar-custom--input.svg"
                />
                <div className={styles.labelDiv}>Inputs</div>
              </div>
              <div className={styles.frameDiv9}>
                <div className={styles.searchBoxDiv}>
                  <div className={styles.assetSearchBoxInput}>
                    <div className={styles.assetsInputBox2}>
                      <div className={styles.inputAutoLayout2}>
                        <div className={styles.labelDiv1}>Search</div>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--search1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv10}>
              <div className={styles.groupComponentDiv}>
                <div className={styles.treeNavDiv}>
                  <div className={styles.buttonDiv4}>
                    <img
                      className={styles.iconControlsAdd}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                  <div className={styles.labelDiv}>General</div>
                </div>
              </div>
              <div className={styles.parameterConfigurationDiv}>
                <div className={styles.frameDiv11}>
                  <div className={styles.frameDiv12}>
                    <div className={styles.powerDefinedDiv}>cos_phi_C</div>
                    <div className={styles.dataBindingDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--add-link.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv13}>
                    <img
                      className={styles.iconDirectionsBackwards}
                      alt=""
                      src="../checkbox5.svg"
                    />
                    <div className={styles.dropdownDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>max_uci0</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.assetsInputBox3}>
                      <div className={styles.inputAutoLayout4}>
                        <i className={styles.labelI}>Enter Value</i>
                      </div>
                    </div>
                    <div className={styles.unitDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>Ohm</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv14}>
                  <div className={styles.frameDiv15}>
                    <div className={styles.buttonDiv1}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--actions--moreoptionsvertical.svg"
                      />
                    </div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parameterConfigurationDiv}>
                <div className={styles.frameDiv11}>
                  <div className={styles.frameDiv12}>
                    <div className={styles.powerDefinedDiv}>cos_phi_L</div>
                    <div className={styles.dataBindingDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--add-link.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv13}>
                    <img
                      className={styles.iconDirectionsBackwards}
                      alt=""
                      src="../checkbox5.svg"
                    />
                    <div className={styles.dropdownDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>max_uci0</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.assetsInputBox3}>
                      <div className={styles.inputAutoLayout4}>
                        <i className={styles.labelI}>Enter Value</i>
                      </div>
                    </div>
                    <div className={styles.unitDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>Ohm</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv14}>
                  <div className={styles.frameDiv15}>
                    <div className={styles.buttonDiv1}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--actions--moreoptionsvertical.svg"
                      />
                    </div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parameterConfigurationDiv}>
                <div className={styles.frameDiv11}>
                  <div className={styles.frameDiv12}>
                    <div className={styles.powerDefinedDiv}>RtotTMax</div>
                    <div className={styles.dataBindingDiv2}>
                      <div className={styles.frameDiv23}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--link.svg"
                        />
                        <div className={styles.cablesOutrtotmaxDiv}>
                          @cables_out.rtotmax
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv13}>
                    <img
                      className={styles.iconDirectionsBackwards}
                      alt=""
                      src="../checkbox5.svg"
                    />
                    <div className={styles.dropdownDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>max_uci0</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.valueDiv}>
                      <div className={styles.inputAutoLayout4}>
                        <div className={styles.labelDiv1}>2354</div>
                      </div>
                    </div>
                    <div className={styles.unitDiv2}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>Ohm</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon-directions--dropdown8.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv14}>
                  <div className={styles.frameDiv15}>
                    <div className={styles.buttonDiv1}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--actions--moreoptionsvertical.svg"
                      />
                    </div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parameterConfigurationDiv3}>
                <div className={styles.frameDiv11}>
                  <div className={styles.frameDiv12}>
                    <div className={styles.powerDefinedDiv}>RtotTMin</div>
                    <div className={styles.dataBindingDiv2}>
                      <div className={styles.frameDiv23}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--link.svg"
                        />
                        <div className={styles.cablesOutrtotmaxDiv}>
                          @cables_out.rtotmin
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv13}>
                    <img
                      className={styles.iconDirectionsBackwards}
                      alt=""
                      src="../checkbox5.svg"
                    />
                    <div className={styles.dropdownDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>max_uci0</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.assetsInputBox3}>
                      <div className={styles.inputAutoLayout4}>
                        <div className={styles.labelDiv1}>34</div>
                      </div>
                    </div>
                    <div className={styles.unitDiv3}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>Ohm</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon-directions--dropdown8.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv14}>
                  <div className={styles.frameDiv15}>
                    <div className={styles.buttonDiv1}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--actions--moreoptionsvertical.svg"
                      />
                    </div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parameterConfigurationDiv3}>
                <div className={styles.frameDiv11}>
                  <div className={styles.frameDiv12}>
                    <div className={styles.powerDefinedDiv}>P</div>
                    <div className={styles.dataBindingDiv2}>
                      <div className={styles.frameDiv23}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--link.svg"
                        />
                        <div className={styles.cablesOutrtotmaxDiv}>
                          @cables_out.p
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv13}>
                    <img
                      className={styles.iconDirectionsBackwards}
                      alt=""
                      src="../checkbox5.svg"
                    />
                    <div className={styles.dropdownDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>max_uci0</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.assetsInputBox3}>
                      <div className={styles.inputAutoLayout4}>
                        <div className={styles.labelDiv1}>234.1</div>
                      </div>
                    </div>
                    <div className={styles.unitDiv3}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>Ohm</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon-directions--dropdown8.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv14}>
                  <div className={styles.frameDiv15}>
                    <div className={styles.buttonDiv1}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--actions--moreoptionsvertical.svg"
                      />
                    </div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv39}>
            <div className={styles.frameDiv40}>
              <div className={styles.frameDiv41}>
                <div className={styles.frameDiv4}>
                  <img
                    className={styles.iconControlsAdd}
                    alt=""
                    src="../icon--gridstar-custom--output.svg"
                  />
                  <div className={styles.labelDiv}>Output</div>
                </div>
                <div className={styles.frameDiv9}>
                  <div className={styles.searchBoxDiv}>
                    <div className={styles.assetSearchBoxInput}>
                      <div className={styles.assetsInputBox2}>
                        <div className={styles.inputAutoLayout2}>
                          <div className={styles.labelDiv1}>Search</div>
                          <img
                            className={styles.iconControlsAdd}
                            alt=""
                            src="../icon--actions--search1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv10}>
              <div className={styles.groupComponentDiv}>
                <div className={styles.treeNavDiv}>
                  <div className={styles.buttonDiv4}>
                    <img
                      className={styles.iconControlsAdd}
                      alt=""
                      src="../icon--actions--directions--small.svg"
                    />
                  </div>
                  <div className={styles.labelDiv}>General</div>
                </div>
              </div>
              <div className={styles.parameterConfigurationDiv}>
                <div className={styles.frameDiv11}>
                  <div className={styles.frameDiv12}>
                    <div className={styles.powerDefinedDiv}>radians_C</div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--add-link2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv13}>
                    <img
                      className={styles.iconDirectionsBackwards}
                      alt=""
                      src="../checkbox5.svg"
                    />
                    <div className={styles.dropdownDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>max_uci0</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.valueDiv}>
                      <div className={styles.inputAutoLayout20}>
                        <div className={styles.labelDiv1}>3245</div>
                      </div>
                    </div>
                    <div className={styles.unitDiv}>
                      <div className={styles.inputAutoLayout21}>
                        <div className={styles.labelDiv1}>Ohm</div>
                        <img
                          className={styles.iconDirectionsDropDown13}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv14}>
                  <div className={styles.frameDiv15}>
                    <div className={styles.buttonDiv1}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--actions--moreoptionsvertical.svg"
                      />
                    </div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parameterConfigurationDiv}>
                <div className={styles.frameDiv11}>
                  <div className={styles.frameDiv12}>
                    <div className={styles.powerDefinedDiv}>degrees_C</div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--add-link2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv13}>
                    <img
                      className={styles.iconDirectionsBackwards}
                      alt=""
                      src="../checkbox5.svg"
                    />
                    <div className={styles.dropdownDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>max_uci0</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.valueDiv}>
                      <div className={styles.inputAutoLayout20}>
                        <div className={styles.labelDiv1}>234</div>
                      </div>
                    </div>
                    <div className={styles.unitDiv}>
                      <div className={styles.inputAutoLayout21}>
                        <div className={styles.labelDiv1}>Ohm</div>
                        <img
                          className={styles.iconDirectionsDropDown13}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv14}>
                  <div className={styles.frameDiv15}>
                    <div className={styles.buttonDiv1}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--actions--moreoptionsvertical.svg"
                      />
                    </div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parameterConfigurationDiv}>
                <div className={styles.frameDiv11}>
                  <div className={styles.frameDiv12}>
                    <div className={styles.powerDefinedDiv}>tan_phi_C</div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--add-link2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv13}>
                    <img
                      className={styles.iconDirectionsBackwards}
                      alt=""
                      src="../checkbox5.svg"
                    />
                    <div className={styles.dropdownDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>max_uci0</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.valueDiv}>
                      <div className={styles.inputAutoLayout20}>
                        <div className={styles.labelDiv1}>23</div>
                      </div>
                    </div>
                    <div className={styles.unitDiv}>
                      <div className={styles.inputAutoLayout21}>
                        <div className={styles.labelDiv1}>Ohm</div>
                        <img
                          className={styles.iconDirectionsDropDown13}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv14}>
                  <div className={styles.frameDiv15}>
                    <div className={styles.buttonDiv1}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--actions--moreoptionsvertical.svg"
                      />
                    </div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parameterConfigurationDiv}>
                <div className={styles.frameDiv11}>
                  <div className={styles.frameDiv12}>
                    <div className={styles.powerDefinedDiv}>Q_C</div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--add-link2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv13}>
                    <img
                      className={styles.iconDirectionsBackwards}
                      alt=""
                      src="../checkbox5.svg"
                    />
                    <div className={styles.dropdownDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>max_uci0</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.valueDiv}>
                      <div className={styles.inputAutoLayout20}>
                        <div className={styles.labelDiv1}>4325</div>
                      </div>
                    </div>
                    <div className={styles.unitDiv}>
                      <div className={styles.inputAutoLayout21}>
                        <div className={styles.labelDiv1}>Ohm</div>
                        <img
                          className={styles.iconDirectionsDropDown13}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv14}>
                  <div className={styles.frameDiv15}>
                    <div className={styles.buttonDiv1}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--actions--moreoptionsvertical.svg"
                      />
                    </div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parameterConfigurationDiv}>
                <div className={styles.frameDiv11}>
                  <div className={styles.frameDiv12}>
                    <div className={styles.powerDefinedDiv}>radians_L</div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--add-link2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv13}>
                    <img
                      className={styles.iconDirectionsBackwards}
                      alt=""
                      src="../checkbox5.svg"
                    />
                    <div className={styles.dropdownDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>max_uci0</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.valueDiv}>
                      <div className={styles.inputAutoLayout20}>
                        <div className={styles.labelDiv1}>124.2</div>
                      </div>
                    </div>
                    <div className={styles.unitDiv}>
                      <div className={styles.inputAutoLayout21}>
                        <div className={styles.labelDiv1}>Ohm</div>
                        <img
                          className={styles.iconDirectionsDropDown13}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv14}>
                  <div className={styles.frameDiv15}>
                    <div className={styles.buttonDiv1}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--actions--moreoptionsvertical.svg"
                      />
                    </div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parameterConfigurationDiv}>
                <div className={styles.frameDiv11}>
                  <div className={styles.frameDiv12}>
                    <div className={styles.powerDefinedDiv}>degrees_L</div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--add-link2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv13}>
                    <img
                      className={styles.iconDirectionsBackwards}
                      alt=""
                      src="../checkbox5.svg"
                    />
                    <div className={styles.dropdownDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>max_uci0</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.valueDiv}>
                      <div className={styles.inputAutoLayout20}>
                        <div className={styles.labelDiv1}>123.1</div>
                      </div>
                    </div>
                    <div className={styles.unitDiv}>
                      <div className={styles.inputAutoLayout21}>
                        <div className={styles.labelDiv1}>Ohm</div>
                        <img
                          className={styles.iconDirectionsDropDown13}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv14}>
                  <div className={styles.frameDiv15}>
                    <div className={styles.buttonDiv1}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--actions--moreoptionsvertical.svg"
                      />
                    </div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parameterConfigurationDiv}>
                <div className={styles.frameDiv11}>
                  <div className={styles.frameDiv12}>
                    <div className={styles.powerDefinedDiv}>tan_phi_L</div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--add-link2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv13}>
                    <img
                      className={styles.iconDirectionsBackwards}
                      alt=""
                      src="../checkbox5.svg"
                    />
                    <div className={styles.dropdownDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>max_uci0</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.valueDiv}>
                      <div className={styles.inputAutoLayout20}>
                        <div className={styles.labelDiv1}>34.21</div>
                      </div>
                    </div>
                    <div className={styles.unitDiv}>
                      <div className={styles.inputAutoLayout21}>
                        <div className={styles.labelDiv1}>Ohm</div>
                        <img
                          className={styles.iconDirectionsDropDown13}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv14}>
                  <div className={styles.frameDiv15}>
                    <div className={styles.buttonDiv1}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--actions--moreoptionsvertical.svg"
                      />
                    </div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.parameterConfigurationDiv}>
                <div className={styles.frameDiv11}>
                  <div className={styles.frameDiv12}>
                    <div className={styles.powerDefinedDiv}>Q_L</div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon--actions--add-link2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameDiv13}>
                    <img
                      className={styles.iconDirectionsBackwards}
                      alt=""
                      src="../checkbox5.svg"
                    />
                    <div className={styles.dropdownDiv}>
                      <div className={styles.inputAutoLayout3}>
                        <div className={styles.labelDiv1}>max_uci0</div>
                        <img
                          className={styles.iconDirectionsDropDown1}
                          alt=""
                          src="../icon--actions--directions--small.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.valueDiv}>
                      <div className={styles.inputAutoLayout20}>
                        <div className={styles.labelDiv1}>245</div>
                      </div>
                    </div>
                    <div className={styles.unitDiv}>
                      <div className={styles.inputAutoLayout21}>
                        <div className={styles.labelDiv1}>Ohm</div>
                        <img
                          className={styles.iconDirectionsDropDown13}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv14}>
                  <div className={styles.frameDiv15}>
                    <div className={styles.buttonDiv1}>
                      <img
                        className={styles.iconControlsAdd}
                        alt=""
                        src="../icon--actions--moreoptionsvertical.svg"
                      />
                    </div>
                    <div className={styles.controlCommentBtnDiv}>
                      <div className={styles.buttonDiv1}>
                        <img
                          className={styles.iconControlsAdd}
                          alt=""
                          src="../icon1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv85}>
            <div className={styles.buttonDiv42}>
              <img
                className={styles.iconControlsAdd}
                alt=""
                src="../icon--gridstar-custom--input.svg"
              />
            </div>
            <div className={styles.buttonDiv43}>
              <img
                className={styles.iconControlsAdd}
                alt=""
                src="../icon--gridstar-custom--output1.svg"
              />
            </div>
            <div className={styles.buttonDiv42}>
              <img
                className={styles.iconControlsAdd}
                alt=""
                src="../icon--chartlinechart.svg"
              />
            </div>
            <div className={styles.buttonDiv1}>
              <img
                className={styles.iconControlsAdd}
                alt=""
                src="../icon--tools--doc.svg"
              />
            </div>
            <div className={styles.buttonDiv1}>
              <img
                className={styles.iconControlsAdd}
                alt=""
                src="../icon--actions--list.svg"
              />
            </div>
            <div className={styles.divider1} />
            <div className={styles.buttonDiv1}>
              <img
                className={styles.iconControlsAdd}
                alt=""
                src="../icon--controls--add.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv86}>
        <div className={styles.buttonDiv}>
          <img
            className={styles.iconDirectionsBackwards}
            alt=""
            src="../icon--directions--backwards4.svg"
          />
        </div>
        <div className={styles.frameDiv1}>
          <img
            className={styles.iconGRIDSTARCUSTOMNodes}
            alt=""
            src="../icon--gridstar-custom--nodes49.svg"
          />
          <div className={styles.cornersPQDiv}>Corners PQ</div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanelConfiguration;
