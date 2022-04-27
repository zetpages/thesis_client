
import React from "react";
import InnerTopBar from "../components/InnerTopBar";

import { PageTrafficTable, RankingTable } from "../../components/Tables";


export default () => {
  return (
    <>
        <InnerTopBar />
        <PageTrafficTable />
        <RankingTable />
    </>
  );
};
