import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import InnerTopBar from "./components/InnerTopBar";
import { TransactionsTable } from "../components/Tables";

export default () => {
  return (
    <>

        <InnerTopBar />
      <TransactionsTable />

    </>
  );
};