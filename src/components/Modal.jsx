import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ onClose, children, modalButton }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="fixed inset-0 bg-gray-600 opacity-80">
        <div className="fixed inset-60 bg-white p-10 rounded-xl">
          <div className="flex flex-col justify-between h-full">
            {children}
            <div className="flex justify-end">{modalButton}</div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
