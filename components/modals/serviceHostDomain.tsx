import { Language } from "../languages";
import translations from "../../functions/translations";

export default function ModalHostDomain({ language }: { language: Language }) {
  return <p> {translations("modalHostDomainContent", language)} </p>;
}
