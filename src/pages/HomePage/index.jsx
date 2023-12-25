import React, { useContext, useEffect } from "react";
import { fetchContext } from "../../contexts/FetchContext";
import ChartsComponent from "../../components/ChartsComponent";
import TableLineComponent from "../../components/TableLineComponent";
import TableGridComponent from "../../components/TableGridComponent";

function HomePage() {
  return (
    <>
      <TableLineComponent />
      <ChartsComponent />
      <TableGridComponent/>
    </>
  );
}

export default HomePage;
