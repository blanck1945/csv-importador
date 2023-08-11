import React from "react";
import { useUiStore } from "../store/UI.store";
import { useStocksStore } from "../store/stocks.store";
import { pipe } from "../helpers/pipe";

const Navbar = () => {
  const setSingleStock = useStocksStore((state: any) => state.setSingleStock);
  const toogleAddForm = useUiStore((state: any) => state.toogleAddForm);
  const handleAddStock = pipe(setSingleStock, toogleAddForm);

  return (
    <nav className="h-20 flex items-center justify-between px-4 w-full bg-slate-700">
      <p className="text-white">CSV import</p>
      {/* <div>
        <button>Menu</button>
        <button onClick={handleAddStock}>Abrir modal</button>
      </div> */}
    </nav>
  );
};

export default Navbar;
