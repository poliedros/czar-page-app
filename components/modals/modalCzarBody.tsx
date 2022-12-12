import ModalEmail from "./serviceEmail";
import ModalArtDesign from "./serviceArtDesign";
import ModalCloud from "./serviceCloud";
import ModalRobot from "./serviceRobot";
import ModalHostDomain from "./serviceHostDomain";
import ModalAdGallery from "./projectAdGallery";
import ModalBusinessSales from "./projectBusinessSales";
import { useState } from "react";
import { Languages } from "../../types/languages";

type RenderBodyType = { state: string; language: Languages };

export default function ModalCzarBody({ state, language }: RenderBodyType) {
  switch (state) {
    case "Email":
      return <ModalEmail language={language} />;
    case "ArtDesign":
      return <ModalArtDesign language={language} />;
    case "HostDomain":
      return <ModalHostDomain language={language} />;
    case "Cloud":
      return <ModalCloud language={language} />;
    case "Robot":
      return <ModalRobot language={language} />;
    case "AdGallery":
      return <ModalAdGallery language={language} />;
    case "BusinessSales":
      return <ModalBusinessSales language={language} />;
    default:
      return <></>;
  }
}
