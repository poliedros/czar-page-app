

type RenderBodyType = {state : string};

export default function ModalCzarBody({ state }: RenderBodyType) {
  switch (state) {
    case 'E':
      return <h2>E</h2>;
    case 'AD':
      return <h2>AD</h2>;
    case 'HDS':
      return <h2>HDS</h2>;
    case 'CD':
      return <h2>CD</h2>;
    case 'RS':
      return <h2>RS</h2>;
    case 'AGA':
      return <h2>AGA</h2>;
    case 'PA':
      return <h2>PA</h2>;
    default:
      console.log("não entrou em nenhuma condição");
      break;
  }
}