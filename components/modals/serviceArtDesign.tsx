import { Language } from "../languages";
import translations from "../../functions/translations";

export default function ModalArtDesign({ language }: { language: Language }) {
  return <p> {translations("modalArtDesignContent", language)} </p>;
}
