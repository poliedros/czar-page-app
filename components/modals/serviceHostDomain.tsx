import { Languages } from "../../types/languages";
import translations from "../../functions/translations";

export default function ModalHostDomain({ language }: { language: Languages }) {
  return <p> {translations("modalHostDomainContent", language)} </p>;
}
