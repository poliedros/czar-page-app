import * as IconsBi from "react-icons/bi";
import * as IconsBs from "react-icons/bs";
import * as IconsFa from "react-icons/fa";
import * as IconsGr from "react-icons/gr";
import * as IconsHi from "react-icons/hi";
import * as IconsMd from "react-icons/md";
import * as IconsIo from "react-icons/io";
import * as IconsIo5 from "react-icons/io5";
import * as IconsRi from "react-icons/ri";
import * as IconsSi from "react-icons/si";

import { BsSlashCircleFill } from "react-icons/bs";

export default function getIconsByName(ico, name, color="white", size="auto") {
    let IconComponent;

    if (ico === "bi") IconComponent = IconsBi[name];
    if (ico === "bs") IconComponent = IconsBs[name];
    if (ico === "fa") IconComponent = IconsFa[name];
    if (ico === "gr") IconComponent = IconsGr[name];
    if (ico === "hi") IconComponent = IconsHi[name];
    if (ico === "io") IconComponent = IconsIo[name];
    if (ico === "io5") IconComponent = IconsIo5[name];
    if (ico === "md") IconComponent = IconsMd[name];
    if (ico === "ri") IconComponent = IconsRi[name];
    if (ico === "si") IconComponent = IconsSi[name];    

    if (!IconComponent) {
        // Return a default one
        return <BsSlashCircleFill />;
    }

    return <IconComponent color={color} style={{ width: size, height: size }}/>;
}