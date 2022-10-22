import { useState } from 'react';
import ModalCzar from "./modalCzar"

export default function modalTest(){
    const [showE, setShowE] = useState(false);

    const handleShowE = () => setShowE(true);
    const handleCloseE = () => setShowE(false);

    return <>

    <ModalCzar show={showE} onHide={handleCloseE} title={"test"}>
    </ModalCzar>

    </>
}