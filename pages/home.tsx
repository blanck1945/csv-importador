import React from "react";
import { useQuery } from "react-query";
import { QUERIES } from "../types/constants";
import { getAllRecords } from "../db/actions";
import { COLLECTIONS } from "../db/collections";
import Card from "../components/Atoms/Card/Card";

const Home = () => {
  const { data, isLoading, error } = useQuery(
    QUERIES.GET_ALL_TENANTS,
    async () => await getAllRecords(COLLECTIONS.TENANTS),
  );

  if (isLoading) return <p>Loading...</p>;

  console.log(data);
  return (
    <div className="flex">
      <div className="w-1/2">
        <p>Completa tu cuenta</p>
      </div>
      <Card className="w-1/2">
        <div>
          <p>Tu plan</p>
        </div>
      </Card>
    </div>
  );
};

export default Home;
