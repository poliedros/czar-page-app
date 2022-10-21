

type RenderBodyType = {state : string};

export default function ModalCzarBody({ state }: RenderBodyType) {
  switch (state) {
    case 'E':
      console.log("este é o número 1");
      break;
    case 'AD':
      console.log("este é o número 2");
      break;
    case 'HDS':
      console.log("este é o número 1");
      break;
    case 'CD':
      console.log("este é o número 2");
      break;
    case 'RS':
      console.log("este é o número 2");
      break;
    case 'AGA':
      console.log("este é o número 2");
      break;
    case 'PA':
      console.log("este é o número 2");
      break;
    default:
      console.log("não entrou em nenhuma condição");
      break;
  }
}