import Modal2 from './modal2';
import Modal3 from './modal3';
import Modal4 from './modal4';
import Modal5 from './modal5';
import Modal6 from './modal6';
import Modal7 from './modal7';
import Modal8 from './modal8';

type RenderBodyType = {state : string};

export default function ModalCzarBody({ state }: RenderBodyType) {
  switch (state) {
    case 'E':
      return <Modal2/>;
    case 'AD':
      return <Modal3/>;
    case 'HDS':
      return <Modal4/>;
    case 'CD':
      return <Modal5/>;
    case 'RS':
      return <Modal6/>;
    case 'AGA':
      return <Modal7/>;
    case 'PA':
      return <Modal8/>;
    default:
      console.log("não entrou em nenhuma condição");
      break;
  }
}