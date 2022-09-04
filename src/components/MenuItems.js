import MenuItem1 from "../components/MenuItem1";
import styles from "./MenuItems.module.css";

const MenuItems = () => {
  return (
    <div className={styles.itemsDiv}>
      <MenuItem1 short="ISO" name="Insulation Coordination" />
      <MenuItem1 short="MCP" name="Main Circuit Parameters" />
    </div>
  );
};

export default MenuItems;
