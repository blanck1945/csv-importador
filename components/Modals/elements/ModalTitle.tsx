import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useUiStore } from "../../../store/UI.store";

const ModalTitle = ({ title }) => {
  const toogleAddForm = useUiStore((state: any) => state.toogleAddForm);
  return (
    <div className="flex items-center justify-between mx-4 py-2 border-b border-slate-700">
      <p className="text-slate-700 text-2xl font-bold">{title}</p>
      <AiOutlineClose
        onClick={toogleAddForm}
        className="text-lg cursor-pointer"
      />
    </div>
  );
};

export default ModalTitle;
