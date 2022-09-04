import { useState, useCallback } from "react";
import FormPopup from "../components/FormPopup";
import PortalPopup from "../components/PortalPopup";
import MenuItems from "../components/MenuItems";
import styles from "./List.module.css";

const List = ({ title }) => {
  const [isFormPopupOpen, setFormPopupOpen] = useState(false);

  const openFormPopup = useCallback(() => {
    setFormPopupOpen(true);
  }, []);

  const closeFormPopup = useCallback(() => {
    setFormPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.listDiv}>
        <MenuItems />
        <div className={styles.headerDiv}>
          <div className={styles.studiesDiv}>{title}</div>
          <button
            className={styles.iconToolsArchiveNew}
            onClick={openFormPopup}
          >
            <img className={styles.shapeIcon} alt="" src="../shape.svg" />
          </button>
        </div>
      </div>
      {isFormPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFormPopup}
        >
          <FormPopup onClose={closeFormPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default List;
