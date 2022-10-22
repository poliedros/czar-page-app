
import ModalEmail from './modalEmail';
import ModalArtDesign from './modalArtDesign';
import ModalCloud from './modalCloud';
import ModalRobot from './modalRobot';
import ModalHostDomain from './modalHostDomain';
import ModalAdGallery from './modalAdGallery';
import ModalBusinessSales from './modalBusinessSales';
import { useState } from 'react';
import { Language } from '../languages';

type RenderBodyType = {state : string};

export default function ModalCzarBody({ state }: RenderBodyType, { language }: Language) {
  switch (state) {
    case 'Email':
      return <ModalEmail language={language}/>;
    case 'ArtDesign':
      return <ModalArtDesign language={language}/>;
    case 'HostDomain':
      return <ModalHostDomain language={language}/>;
    case 'Cloud':
      return <ModalCloud language={language}/>;
    case 'Robot':
      return <ModalRobot language={language}/>;
    case 'AdGallery':
      return <ModalAdGallery language={language}/>;
    case 'BusinessSales':
      return <ModalBusinessSales language={language}/>;
    default:
      console.log("não entrou em nenhuma condição");
      break;
  }
}