import React from "react";
import { CSVBoxButton } from "@csvbox/react";
import Button, { BUTTON_TYPES } from "../../components/Atoms/Button";

const index = () => {
  return (
    <div className="mt-4 flex justify-center items-center gap-2">
      <CSVBoxButton
        licenseKey="PoxyaeN1lsZHLEad5RkASi4oOrp3zI"
        user={{
          user_id: "default123",
        }}
        options={{
          max_rows: 50,
        }}
        onImport={(result, data) => {
          if (result) {
            console.log("success");
            console.log(data.row_success + " rows uploaded");
            //custom code
          } else {
            console.log("fail");
            //custom code
          }
        }}
        render={(launch, isLoading) => {
          return (
            <Button
              buttonType={BUTTON_TYPES.DEFAULT}
              disabled={isLoading}
              onClick={launch}
            >
              Subir facturas
            </Button>
          );
        }}
      >
        Import
      </CSVBoxButton>
      <CSVBoxButton
        licenseKey="Do2Rq9cAJCZklKcFg5TuvwrT6khSbe"
        user={{
          user_id: "default123",
        }}
        options={{
          max_rows: 50,
        }}
        onImport={(result, data) => {
          if (result) {
            console.log("success");
            console.log(data.row_success + " rows uploaded");
            //custom code
          } else {
            console.log("fail");
            //custom code
          }
        }}
        render={(launch, isLoading) => {
          return (
            <Button
              buttonType={BUTTON_TYPES.PRIMARY}
              disabled={isLoading}
              onClick={launch}
            >
              Subir proveedores
            </Button>
          );
        }}
      >
        Import
      </CSVBoxButton>
      <CSVBoxButton
        licenseKey="SBTNkge2gHB1kbLcyQ5TiBzxVEGC4q"
        user={{
          user_id: "default123",
        }}
        options={{
          max_rows: 50,
        }}
        onImport={(result, data) => {
          if (result) {
            console.log("success");
            console.log(data.row_success + " rows uploaded");
            //custom code
          } else {
            console.log("fail");
            //custom code
          }
        }}
        render={(launch, isLoading) => {
          return (
            <Button
              buttonType={BUTTON_TYPES.SECONDARY}
              disabled={isLoading}
              onClick={launch}
            >
              Subir nominas
            </Button>
          );
        }}
      >
        Nominas
      </CSVBoxButton>
    </div>
  );
};

export default index;
