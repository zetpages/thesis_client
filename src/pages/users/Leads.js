import React from "react";

import { TransactionsTable } from "../../components/Tables";
import InnerTopBar from "../components/InnerTopBar";

export default () => {
  return (
    <>

      <InnerTopBar />
      <TransactionsTable />
    </>
  );
};
