import loadable from "@loadable/component";
import { useRef } from "react";
import IconComponent from "./IconComponent";

const DynamicIcon = ({ iconName = "ai/AiOutlineAppstore", className }) => {
  const [library, iconComponentName] = iconName.split("/");
  const ReactIconsRef = useRef();
  if (!library || !iconComponentName) return;
  const lib = library.toLowerCase();
  ReactIconsRef.current = loadable.lib(() => import(`react-icons/ai`));
  if (lib === "bs")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/bs`));
  if (lib === "bi")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/bi`));
  if (lib === "di")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/di`));
  if (lib === "fi")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/fi`));
  if (lib === "fc")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/fc`));
  if (lib === "fa")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/fa`));
  if (lib === "gi")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/gi`));
  if (lib === "go")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/go`));
  if (lib === "gr")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/gr`));
  if (lib === "hi")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/hi`));
  if (lib === "im")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/im`));
  if (lib === "io")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/io`));
  if (lib === "md")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/md`));
  if (lib === "ri")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/ri`));
  if (lib === "si")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/si`));
  if (lib === "ti")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/ti`));
  if (lib === "vsc")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/vsc`));
  if (lib === "wi")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/wi`));
  if (lib === "cg")
    ReactIconsRef.current = loadable.lib(() => import(`react-icons/cg`));

  // TODO: Add support for other libraries. and refactor, useRef is not the best way to do this...I think.
  return (
    <ReactIconsRef.current>
      {({ [iconComponentName]: Icon }) =>
        Icon && (
          <IconComponent className={className}>
            <Icon />
          </IconComponent>
        )
      }
    </ReactIconsRef.current>
  );
};

export default DynamicIcon;
