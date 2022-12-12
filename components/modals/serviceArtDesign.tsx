import { Languages } from "../../types/languages";
import translations from "../../functions/translations";

export default function ModalArtDesign({ language }: { language: Languages }) {
  return <p> {translations("modalArtDesignContent", language)} </p>;
}
