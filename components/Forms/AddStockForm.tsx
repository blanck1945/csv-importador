import axios from "axios";
import React, { useState, useEffect, FC } from "react";
import { useQueryClient } from "react-query";
import { z } from "zod";
import { useUiStore } from "../../store/UI.store";
import { pipe } from "../../helpers/pipe";
import Button, { BUTTON_TYPES } from "../Atoms/Button";

interface Props {
  stock?: any;
}

const createStockSchema = z.object({
  name: z.string().min(1).max(50),
  symbol: z.string().min(1).max(50),
  type: z.enum(["CEDEAR", "ACCION", "ON"]),
  ratio: z.number().min(1).positive(),
  papers: z.number().min(1).positive(),
});

const AddStockForm: FC<Props> = ({ stock }) => {
  const [name, setName] = useState<string>(stock?.name ?? "");
  const [symbol, setSymbol] = useState<string>(stock?.symbol ?? "");
  const [type, setType] = useState<string>(stock?.type ?? "initial");
  const [ratio, setRatio] = useState<number | string>(stock?.ratio ?? "");
  const [papers, setPapers] = useState<number | string>(stock?.papers ?? "");
  const [formCantBeSubmitted, setFormCantBeSubmitted] = useState<boolean>(true);
  const queryClient = useQueryClient();
  const toogleAddForm = useUiStore((state: any) => state.toogleAddForm);

  useEffect(() => {
    const validation = createStockSchema.safeParse({
      name,
      symbol,
      type,
      ratio,
      papers,
    });

    if (validation.success === true) {
      return setFormCantBeSubmitted(false);
    }

    console.warn(validation.error);

    setFormCantBeSubmitted(true);
  }, [name, symbol, type, ratio, papers]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BASE_API_URL}stocks`,
      data: {
        name,
        symbol,
        type,
        ratio,
        papers,
      },
    });

    if (response.status !== 201) {
      console.error(response);
      return "Error al crear el stock";
    }

    pipe(queryClient.invalidateQueries("stocks"), toogleAddForm());
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 mt-4 grid gap-5">
      <div className="flex items-center">
        <label className="w-1/3" htmlFor="name">
          Nombre
        </label>
        <input
          className="w-full border rounded-md border-slate-800 px-2 py-1"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <label className="w-1/3" htmlFor="simbolo">
          Simbolo
        </label>
        <input
          className="w-full border rounded-md border-slate-800 px-2 py-1 "
          type="text"
          name="simbolo"
          id="simbolo"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <label className="w-1/3" htmlFor="tipo">
          Nombre
        </label>
        <select
          className="w-full border bg-white rounded-md border-slate-800 px-2 py-2 "
          name="tipo"
          id="tipo"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option hidden value="initial">
            Seleccione un tipo
          </option>
          <option value="CEDEAR">CEDEAR</option>
          <option value="ACCION">ACCION</option>
          <option value="ON">Obligacion negociable</option>
        </select>
      </div>
      <div className="flex items-center">
        <label className="w-1/3" htmlFor="ratio">
          Ratio
        </label>
        <input
          className="w-full border rounded-md border-slate-800 px-2 py-1 "
          type="number"
          name="ratio"
          id="ratio"
          value={ratio}
          onChange={(e) => {
            const valueToNumber = Number(e.target.value) ?? "";
            setRatio(valueToNumber);
          }}
        />
      </div>
      <div className="flex items-center">
        <label className="w-1/3" htmlFor="papeles">
          Papeles
        </label>
        <input
          className="w-full border rounded-md border-slate-800 px-2 py-1 "
          type="number"
          name="papeles"
          id="papeles"
          value={papers}
          onChange={(e) => {
            const valueToNumber = Number(e.target.value) ?? "";
            setPapers(valueToNumber);
          }}
        />
      </div>
      <Button buttonType={BUTTON_TYPES.PRIMARY}
           className="bg-slate-500 rounded-md text-white h-10"
           disabled={formCantBeSubmitted}
           type="submit"
      >
      Agregar
      </Button>
      <button
        className="bg-slate-500 rounded-md text-white h-10"
        disabled={formCantBeSubmitted}
        type="submit"
      >
        Agregar
      </button>
    </form>
  );
};

export default AddStockForm;
