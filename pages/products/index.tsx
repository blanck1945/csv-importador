import React, { useState } from "react";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { PocketBase, createRecord, getAllRecords } from "../../db/actions";
import { useQuery } from "react-query";
import { COLLECTIONS } from "../../db/collections";
import QueryContainer from "../../layouts/QueryContainer";

const Index = () => {
  const [sheetData, setSheetData] = useState(null);
  const { data, isLoading, error } = useQuery(
    ["sheets_information", sheetData],
    () => PocketBase.getRecord(COLLECTIONS.SHEETS, sheetData)
  );

  const getSheetsData = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:3333/api/sheets",
    });

    setSheetData(response.data);
  };

  const createSheets = async (data) => {
    const completeData = {
      ...data,
      tenant_id: "awrw6sx785m85zc",
    };
    const response = await createRecord("sheets_information", completeData);
  };

  return (
    <QueryContainer isLoading={isLoading} error={error}>
      <div>
        <Formik
          initialValues={{
            api_key: "",
            sheet_id: "",
          }}
          onSubmit={createSheets}
        >
          {({ isSubmitting }) => (
            <Form>
              <p>Conectar con sheets</p>
              <div>
                <label htmlFor="api_key">Llave de acceso</label>
                <Field type="api_key" name="api_key" />
              </div>
              <div>
                <label htmlFor="sheet_id">Id del archivo</label>
                <Field type="sheet_id" name="sheet_id" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Conectar
              </button>
            </Form>
          )}
        </Formik>
        <div>
          <p>Información de la hoja</p>
          <button onClick={getSheetsData}>
            Obtener informacion de la Hoja
          </button>
          <p>{JSON.stringify(sheetData)}</p>
        </div>
      </div>
    </QueryContainer>
  );
};

export default Index;
