import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

import Overlay from "./Overlay";
import ModalContainer from "./ModalContainer";
import ButtonIcon from "./ButtonIcon";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { close, openName } = useContext(ModalContext);

  if (openName !== name) return null;

  return createPortal(
    <Overlay>
      <ModalContainer close={close}>
        <ButtonIcon type="close" onClick={close}>
          <HiXMark />
        </ButtonIcon>

        {cloneElement(children, { onCloseModal: close })}
      </ModalContainer>
    </Overlay>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
