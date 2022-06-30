import { NavItem } from "./NavItem";

const items = [
  {
    id: 1,
    title: "Overview",
    iconName: "ai/AiOutlineAppstore",
    path: "/overview",
  },
  {
    id: 2,
    title: "Tasks",
    iconName: "ai/AiOutlineCalendar",
    path: "/tasks",
  },
  {
    id: 3,
    title: "Documents",
    iconName: "cg/CgFileDocument",
    path: "/documents",
  },
  {
    id: 4,
    title: "Notes",
    iconName: "fa/FaRegStickyNote",
    path: "/notes",
  },
];

const HeaderNavigation = () => {
  return (
    <div className="flex gap-4 items-center h-16 bg-[#6A61BF] px-8">
      <div className="w-8 h-8 rounded-full bg-[#8881D8]"></div>
      <div className="w-4/6 h-2 rounded-full bg-[#8881D8]"></div>
    </div>
  );
};
// TODO: Read post about animations https://www.joshwcomeau.com/animation/css-transitions/

export default function Navigation() {
  return (
    <nav className="h-screen gap-4 pb-4 text-white bg-[#8881D8] w-72">
      <HeaderNavigation />
      <ul className="box-border flex flex-row flex-wrap gap-2 px-0 py-4">
        {items.map((item) => (
          <NavItem key={item.id} {...item} />
        ))}
      </ul>
    </nav>
  );
}
