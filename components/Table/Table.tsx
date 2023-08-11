import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { getStocks } from "../../actions/stocks";
import { StocksStore, useStocksStore } from "../../store/stocks.store";
import { useUiStore } from "../../store/UI.store";
import { pipe } from "../../helpers/pipe";
import { Stock } from "../../types/interfaces";
import Button, { BUTTON_TYPES } from "../Atoms/Button";
import { request } from "../../helpers/request";
import { HTTP_METHODS, QUERIES } from "../../types/enums";
import { conditional } from "../../helpers/conditional";

const rowBg = {
  0: "bg-slate-300",
  1: "bg-slate-200",
};

const Table = () => {
  const query = useQuery(QUERIES.STOCKS, getStocks, {
    refetchOnWindowFocus: false,
  });
  const setSingleStock = useStocksStore(
    (state: StocksStore) => state.setSingleStock
  );
  const toogleAddForm = useUiStore((state: any) => state.toogleAddForm);
  const { invalidateQueries } = useQueryClient();

  const handleEdit = (stock: Stock) =>
    pipe(setSingleStock(stock), toogleAddForm());

  const handleDelete = async (stockId: number) =>
    pipe(
      await request({
        method: HTTP_METHODS.DELETE,
        url: `${process.env.NEXT_PUBLIC_BASE_API_URL}stocks/${stockId}`,
      }),
      invalidateQueries(QUERIES.STOCKS)
    );

  if (query.isLoading) return <p>Loading...</p>;

  if (query.isError) return <p>Error</p>;
  return (
    <table className="w-full mt-4 ">
      <thead className="h-8">
        <tr className="border text-white bg-slate-700 border-black ">
          <th>Nombre</th>
          <th>Simbolo</th>
          <th>Tipo</th>
          <th>Ratio</th>
          <th>Papeles</th>
          <th>PPC</th>
          <th>Total</th>
          <th>Precio hoy</th>
          <th>Variacion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody className={`text-center`}>
        {query.data.data.map((stock, index) => (
          <tr
            key={stock.ID}
            className={`h-12 border border-black ${rowBg[index % 2]}}`}
          >
            <td className="border-r border-black">{stock.name}</td>
            <td className="border-r border-black">{stock.symbol}</td>
            <td className="border-r border-black">{stock.type}</td>
            <td className="border-r border-black">{stock.ratio}</td>
            <td className="border-r border-black">{stock.papers}</td>
            <td className="border-r border-black">${stock?.ppc ?? 0}</td>
            <td className="border-r border-black">
              ${(stock?.ppc * (stock.papers / stock.ratio)).toFixed(2)}
            </td>
            <td className="border-r border-black">${stock.price_today}</td>
            <td className="border-r border-black">
              {(((stock.ppc - stock.price_today) / stock.ppc) * -100).toFixed(
                3
              )}
              %
            </td>
            <td className="w-1/6 ">
              <Button
                buttonType={BUTTON_TYPES.PRIMARY}
                className="mr-2 px-2 py-1"
                onClick={() => handleEdit(stock)}
              >
                Editar
              </Button>
              <button
                onClick={() => handleDelete(stock.ID)}
                className="mr-2 bg-red-600 text-white rounded px-2 py-1"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
