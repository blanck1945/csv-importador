import React from "react";

const AddStockModal = ({ children }) => {
  return (
    <div className="fixed left-0 top-0 flex justify-center z-50 w-full h-full bg-[#3b3a3ab9]">
      <div className="rounded shadow-md w-1/2 h-fit bg-gray-50 mt-12 pb-4">
        {children}
      </div>
    </div>
  );
};

export default AddStockModal;
