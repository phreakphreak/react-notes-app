import { Link } from "react-router-dom";
import DynamicIcon from "./DynamicIcon";

export function NavItem({ title, iconName, path }) {
  return (
    <Link to={path}>
      <li className="flex flex-row w-full gap-4 px-8 py-4 text-lg text-white ">
        <DynamicIcon
          className="h-full text-3xl text-white "
          iconName={iconName}
        />
        {title}
      </li>
    </Link>
  );
}
