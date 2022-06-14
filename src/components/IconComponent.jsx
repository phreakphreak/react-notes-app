import { IconContext } from "react-icons";

export default function IconComponent({ children, className, Icon }) {
  return (
    <IconContext.Provider value={{ className }}>
      <div>
        {Icon && <Icon />}
        {children}
      </div>
    </IconContext.Provider>
  );
}
