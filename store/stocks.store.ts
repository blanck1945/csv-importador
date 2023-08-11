import { create } from "zustand";
import { Stock } from "../types/interfaces";

export interface StocksStore {
  singleStock: Stock;
  setSingleStock: (stock: Stock) => void;
}

export const useStocksStore = create<StocksStore>((set) => ({
  singleStock: undefined,
  setSingleStock: (stock: Stock = undefined) =>
    set((state) => ({ ...state, singleStock: stock })),
}));
