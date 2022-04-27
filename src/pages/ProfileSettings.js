import React, {useContext, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {Col, Row, Button, Card, Form, InputGroup, Table, Tabs, Tab} from 'react-bootstrap';
import {Context} from "../index";
import InnerTopBar from "./components/InnerTopBar";
import Datetime from "react-datetime";
import moment from "moment-timezone";
import ProfileCover from "../assets/img/profile-back.jpg";
// import Profile1 from "../assets/img/team/profile-picture-1.jpg";
// import {Image} from "@themesberg/react-bootstrap";


function Sonnet() {
  return null;
}

export default function ProfileSettings() {

  const {user,board} = useContext(Context);
  const [birthday, setBirthday] = useState("");
  const [key, setKey] = useState('home');

  let currentUser = {};

  // useEffect(() => {
    board?.admins?.map((el) => {
      if (el.id === user?.id.id) {
        return currentUser = Object.assign({}, el)
      }
      // user?._id.map((t) => {
      //   if (t.id === el.id) {
      //     return currentUser = Object.assign({}, el)
      //   }
      // })
    });
  // },[])

  console.log(user)
  console.log(board)

  return (
    <>
      <InnerTopBar/>

      <Row className="profile__settings">
        <Col xs={12} xl={8}>
          <Row>
            <Card border="light" className="bg-white shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-4">Основная информация</h5>
                <Form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group id="firstName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control required type="text" placeholder="Ваше имя" />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group id="lastName">
                        <Form.Label>Фамилие</Form.Label>
                        <Form.Control required type="text" placeholder="Ваше фамилие" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col md={6} className="mb-3">
                      <Form.Group id="birthday">
                        <Form.Label>Дата рож.</Form.Label>
                        <Datetime
                            locale="ru"
                            timeFormat={false}
                            onChange={setBirthday}
                            renderInput={(props, openCalendar) => (
                                <InputGroup>
                                  <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                                  <Form.Control
                                      required
                                      type="text"
                                      value={birthday ? moment(birthday).format("MM/DD/YYYY") : ""}
                                      placeholder="12/12/2022"
                                      onFocus={openCalendar}
                                      onChange={() => { }} />
                                </InputGroup>
                            )} />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group id="gender">
                        <Form.Label>Пол</Form.Label>
                        <Form.Select defaultValue="0">
                          <option value="0">Пол</option>
                          <option value="1">Мужчина</option>
                          <option value="2">Женщина</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group id="emal">
                        <Form.Label>Почта</Form.Label>
                        <Form.Control required type="email" placeholder="sample@gmail.com" />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group id="phone">
                        <Form.Label>Телефон</Form.Label>
                        <Form.Control required type="number" placeholder="+996(772)171263" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="mt-3 float-end">
                    <Button variant="primary" type="submit">Сохранить</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card border="light" className="bg-white shadow-sm mb-4">
              <Card.Body>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                  <Tab eventKey="home" title="Мои последние действия">
                    <Table striped bordered hover>
                      <thead>
                      <tr>
                        <th>#</th>
                        <th>Действие</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</td>

                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</td>

                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</td>
                      </tr>
                      </tbody>
                    </Table>
                  </Tab>

                  <Tab eventKey="profile" title="Менеджеры">
                    <Table striped bordered hover>
                      <thead>
                      <tr>
                        <th>#</th>
                        <th>Пользователь</th>
                        <th>Действие</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>1</td>
                        <td>Менеджер01</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Менеджер01</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Менеджер02</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</td>
                      </tr>
                      </tbody>
                    </Table>
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Row>
        </Col>


        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <Card border="light" className="text-center p-0 mb-4">
                <div style={{ backgroundImage: `url(${ProfileCover})` }} className="profile-cover rounded-top" />
                <Card.Body className="pb-5">
                  <Card.Img key={currentUser.id} src={process.env.REACT_APP_API_URL + currentUser.img} className="user-avatar large-avatar rounded-circle mx-auto mt-n7 mb-4" />
                  <Card.Title>{currentUser.name}</Card.Title>
                  {/*<Card.Subtitle className="fw-normal">{currentUser.phone}</Card.Subtitle>*/}
                  {/*<Card.Text className="text-gray mb-4">{currentUser.email}</Card.Text>*/}
                  <div className="mt-3">
                    <div className="d-flex justify-content-between custom__prop-line mt-2">
                      <span className="text-nowrap">Почта</span>
                      <h6>{currentUser.email}</h6>
                    </div>
                    <div className="d-flex justify-content-between custom__prop-line mt-2">
                      <span className="text-nowrap">Пол</span>
                      <h6>{currentUser?.gender?.name}</h6>
                    </div>
                    <div className="d-flex justify-content-between custom__prop-line mt-2">
                      <span className="text-nowrap">Телефон</span>
                      <h6>{currentUser.phone}</h6>
                    </div>
                    <div className="d-flex justify-content-between custom__prop-line mt-2">
                      <span className="text-nowrap">Роль</span>
                      <h6>{currentUser.role}</h6>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
