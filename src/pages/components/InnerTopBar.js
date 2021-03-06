import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import {useLocation} from "react-router-dom";

const InnerTopBar = () => {

    const location = useLocation();
    const activePath = location.pathname.split("/").pop();

    let temp = '';
    switch (activePath) {
        case 'students':
            temp = 'Ученики';
            break;
        case 'teachers':
            temp = 'Преподаватели';
            break;
        case 'leads':
            temp = 'Лиды';
            break;
        case 'subscriptions':
            temp = 'Абонементы';
            break;
        case 'groups':
            temp = 'Группы';
            break;
        case 'courses':
            temp = 'Занятия';
            break;
        case 'all':
            temp = 'Транзакции';
            break;
        case 'products':
            temp = 'Товары';
            break;
        case 'general-settings':
            temp = 'Основные настройки';
            break;
        case 'tasks':
            temp = 'Задачи';
            break;
        case 'news':
            temp = 'Новости';
            break;
        case 'profile-settings':
            temp = 'Профиль';
            break;
        case 'access':
            temp = 'Доступ';
            break;
    }

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-2">
                <div className="d-block mb-1 mb-md-0">
                    <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        {/*<Breadcrumb.Item>uoku</Breadcrumb.Item>*/}
                        <Breadcrumb.Item active>{temp}</Breadcrumb.Item>
                    </Breadcrumb>
                    {/*<h4>{temp}</h4>*/}
                </div>
                {/*<div className="btn-toolbar mb-2 mb-md-0">*/}
                {/*    <ButtonGroup>*/}
                {/*        <Button variant="outline-primary" size="sm">Поделиться</Button>*/}
                {/*        <Button variant="outline-primary" size="sm">Экспортировать</Button>*/}
                {/*    </ButtonGroup>*/}
                {/*</div>*/}
            </div>

            {/*<div className="table-settings mb-4">*/}
            {/*    <Row className="justify-content-between align-items-center">*/}
            {/*        <Col xs={8} md={6} lg={3} xl={4}>*/}
            {/*            <InputGroup>*/}
            {/*                <InputGroup.Text>*/}
            {/*                    <FontAwesomeIcon icon={faSearch} />*/}
            {/*                </InputGroup.Text>*/}
            {/*                <Form.Control type="text" placeholder="Search" />*/}
            {/*            </InputGroup>*/}
            {/*        </Col>*/}
            {/*        <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">*/}
            {/*            <Dropdown as={ButtonGroup}>*/}
            {/*                <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">*/}
            {/*                    <span className="icon icon-sm icon-gray">*/}
            {/*                      <FontAwesomeIcon icon={faCog} />*/}
            {/*                    </span>*/}
            {/*                </Dropdown.Toggle>*/}
            {/*                <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">*/}
            {/*                    <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>*/}
            {/*                    <Dropdown.Item className="d-flex fw-bold">*/}
            {/*                        10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>*/}
            {/*                    </Dropdown.Item>*/}
            {/*                    <Dropdown.Item className="fw-bold">20</Dropdown.Item>*/}
            {/*                    <Dropdown.Item className="fw-bold">30</Dropdown.Item>*/}
            {/*                </Dropdown.Menu>*/}
            {/*            </Dropdown>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</div>*/}

        </>
    );
};

export default InnerTopBar;
