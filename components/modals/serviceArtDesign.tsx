import { Languages } from "../../types/languages";
import translations from "../../functions/translations";

export default function ModalArtDesign({ language }: { language: Languages }) {
  // background-image: url(https://www.nanaimobulletin.com/wp-content/uploads/2022/04/28649660_web1_220331-WLT-PUSH-JesajaClass_1.jpg);
  // background-repeat: no-repeat;
  // background-position: 100% 0%;
  // background-size: 50% 100%;
  return <p> {translations("modalArtDesignContent", language)} </p>;
}
