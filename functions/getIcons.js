import * as IconsMd from "react-icons/md";
import * as IconsRi from "react-icons/ri";
import * as IconsIo5 from "react-icons/io5";

import * as IconsIm from "react-icons/im";
import * as IconsIo from "react-icons/io";
import * as IconsBi from "react-icons/bi";
import { BsSlashCircleFill } from "react-icons/bs";

import defaultIcons from "../defaultIcons.json";

export default function getIcons(ico, name, width = "auto") {
    let IconComponent;

    if (ico == "md") IconComponent = IconsMd[defaultIcons[name]];
    if (ico == "ri") IconComponent = IconsRi[defaultIcons[name]];
    if (ico == "io5") IconComponent = IconsIo5[defaultIcons[name]];

    if (ico == "im") IconComponent = IconsIm[defaultIcons[name]];
    if (ico == "io") IconComponent = IconsIo[defaultIcons[name]];
    if (ico == "bi") IconComponent = IconsBi[defaultIcons[name]];

    if (!IconComponent) {
        // Return a default one
        return <BsSlashCircleFill />;
    }

    return <IconComponent style={{ width: width }} />;
}