//
// import React, {useContext, useState} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBell,
//   faCog,
//   faEnvelopeOpen,
//   faQuestion,
//   faSearch,
//   faSignOutAlt,
//   faCashRegister,
//   faChartLine,
//   faCloudUploadAlt,
//   faPlus,
//   faRocket,
//   faTasks,
//   faUserShield,
//   faShoppingCart,
//   faUserAstronaut,
//   faGraduationCap,
//   faUserGraduate,
//   faUserFriends,
//   faUsers,
//   faTable,
//   faInbox,
//   faPlusCircle,
//   faMinusCircle,
//   faHashtag,
//   faUser,
//   faIdCard
// } from "@fortawesome/free-solid-svg-icons";
// import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
// import { Row, Col, Nav, Form, Image, Navbar, Dropdown, Container, ListGroup, InputGroup, Button, ButtonGroup, Badge } from '@themesberg/react-bootstrap';
// import {Link, useHistory, useLocation} from 'react-router-dom';
// import NOTIFICATIONS_DATA from "../data/notifications";
// import Profile3 from "../assets/img/team/profile-picture-3.jpg";
//
// import { Routes } from "../routes";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";
// import NavItem from "./NavItem";
// import {Context} from "../index";
// import {MAIN_ROUTE} from "../data/consts";
//
//
// export default (props) => {
//
//   const {user}  = useContext(Context);
//   const history = useHistory();
//
//
//   const logOut = () => {
//     user.setUser({});
//     user.setIsAuth(false);
//     history.push(MAIN_ROUTE)
//   }
//
//
//   const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
//   const areNotificationsRead = notifications.reduce((acc, notif) => acc && notif.read, true);
//
//   const markNotificationsAsRead = () => {
//     setTimeout(() => {
//       setNotifications(notifications.map(n => ({ ...n, read: true })));
//     }, 300);
//   };
//
//   const Notification = (props) => {
//     const { link, sender, image, time, message, read = false } = props;
//     const readClassName = read ? "" : "text-danger";
//
//     return (
//       <ListGroup.Item action href={link} className="border-bottom border-light">
//         <Row className="align-items-center">
//           <Col className="col-auto">
//             <Image src={image} className="user-avatar lg-avatar rounded-circle" />
//           </Col>
//           <Col className="ps-0 ms--2">
//             <div className="d-flex justify-content-between align-items-center">
//               <div>
//                 <h4 className="h6 mb-0 text-small">{sender}</h4>
//               </div>
//               <div className="text-end">
//                 <small className={readClassName}>{time}</small>
//               </div>
//             </div>
//             <p className="font-small mt-1 mb-0">{message}</p>
//           </Col>
//         </Row>
//       </ListGroup.Item>
//     );
//   };
//
//   return (
//     <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
//       <Container fluid className="px-0">
//         <div className="d-flex justify-content-between w-100">
//           <div className="d-flex align-items-center">
//             <Form className="navbar-search">
//               <Form.Group id="topbarSearch">
//                 <InputGroup className="input-group-merge search-bar">
//                   <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
//                   <Form.Control type="text" placeholder="Поиск клиента" />
//                 </InputGroup>
//               </Form.Group>
//             </Form>
//
//             <Dropdown className="btn-toolbar">
//               <Dropdown.Toggle as={Button} variant="primary" size="sm" className="btn_control mx-2">
//                 <FontAwesomeIcon icon={faPlus} />
//               </Dropdown.Toggle>
//               <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
//                 <Dropdown.Item className="fw-bold">
//                   <FontAwesomeIcon icon={faUserAstronaut} className="me-2" /> Лид
//                 </Dropdown.Item>
//                 <Dropdown.Item className="fw-bold">
//                   <FontAwesomeIcon icon={faUserGraduate} className="me-2" /> Клиент
//                 </Dropdown.Item>
//                 {/* <Dropdown.Item className="fw-bold">
//                   <FontAwesomeIcon icon={faUserFriends} className="me-2" /> Родитель
//                 </Dropdown.Item> */}
//                 <Dropdown.Item className="fw-bold">
//                   <FontAwesomeIcon icon={faUsers} className="me-2" /> Группа
//                 </Dropdown.Item>
//
//                 <Dropdown.Divider />
//
//                 <Dropdown.Item className="fw-bold">
//                   <FontAwesomeIcon icon={faPlusCircle} className="me-2" /> Доход
//                 </Dropdown.Item>
//                 <Dropdown.Item className="fw-bold">
//                   <FontAwesomeIcon icon={faMinusCircle} className="me-2" /> Расход
//                 </Dropdown.Item>
//                 <Dropdown.Item className="fw-bold">
//                   <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> Продажа товара
//                 </Dropdown.Item>
//
//                 <Dropdown.Divider />
//
//                 <Dropdown.Item className="fw-bold">
//                   <FontAwesomeIcon icon={faUsers} className="me-2" /> Групповой
//                 </Dropdown.Item>
//                 <Dropdown.Item className="fw-bold">
//                   <FontAwesomeIcon icon={faUser} className="me-2" /> Индивидуальный
//                 </Dropdown.Item>
//                 <Dropdown.Item className="fw-bold">
//                   <FontAwesomeIcon icon={faHashtag} className="me-2" /> Пробный
//                 </Dropdown.Item>
//
//               </Dropdown.Menu>
//             </Dropdown>
//
//             <div className="m_icon_size">
//               <NavItem icon={faCog} link={Routes.GeneralSettings.path} />
//             </div>
//             <div className="m_icon_size">
//               <NavItem icon={faShoppingCart} link={Routes.ProductItems.path} />
//             </div>
//
//           </div>
//           <Nav className="align-items-center">
//             <Dropdown as={Nav.Item} onToggle={markNotificationsAsRead} >
//               <Dropdown.Toggle as={Nav.Link} className="text-dark icon-notifications me-lg-3">
//                 <span className="icon icon-sm">
//                   <FontAwesomeIcon icon={faBell} className="bell-shake" />
//                   {areNotificationsRead ? null : <span className="icon-badge rounded-circle unread-notifications" />}
//                 </span>
//               </Dropdown.Toggle>
//               <Dropdown.Menu className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
//                 <ListGroup className="list-group-flush">
//                   <Nav.Link href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">
//                     Уведомления
//                   </Nav.Link>
//
//                   {notifications.map(n => <Notification key={`notification-${n.id}`} {...n} />)}
//
//                   <Dropdown.Item className="text-center text-primary fw-bold py-3">
//                     Показать все
//                   </Dropdown.Item>
//                 </ListGroup>
//               </Dropdown.Menu>
//             </Dropdown>
//
//             <Dropdown as={Nav.Item}>
//               <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
//                 <div className="media d-flex align-items-center">
//                   <Image src={Profile3} className="user-avatar md-avatar rounded-circle" />
//                   <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
//                     <span className="mb-0 font-small fw-bold">Админ</span>
//                   </div>
//                 </div>
//               </Dropdown.Toggle>
//
//               <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
//                 <Dropdown.Item className="fw-bold">
//                     <FontAwesomeIcon icon={faUserCircle} className="me-2" /> Профиль
//                 </Dropdown.Item>
//                 <Dropdown.Item className="fw-bold">
//                   <FontAwesomeIcon icon={faQuestion} className="me-2" /> Вопросы
//                 </Dropdown.Item>
//                 <Dropdown.Item className="fw-bold">
//                   <FontAwesomeIcon icon={faYoutube} className="me-2" /> Видеоуроки
//                 </Dropdown.Item>
//                 <Dropdown.Item className="fw-bold">
//                   <FontAwesomeIcon icon={faUserShield} className="me-2" /> Поддержа
//                 </Dropdown.Item>
//
//                 <Dropdown.Divider />
//
//                 <Dropdown.Item className="fw-bold" onClick={() => logOut()}>
//                     <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2"/> Выйти
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//
//             </Dropdown>
//           </Nav>
//         </div>
//       </Container>
//     </Navbar>
//   );
// };



import React, {useContext, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faEnvelopeOpen,
  faQuestion,
  faSearch,
  faSignOutAlt,
  faCashRegister,
  faChartLine,
  faCloudUploadAlt,
  faPlus,
  faRocket,
  faTasks,
  faUserShield,
  faShoppingCart,
  faUserAstronaut,
  faGraduationCap,
  faUserGraduate,
  faUserFriends,
  faUsers,
  faTable,
  faInbox,
  faPlusCircle,
  faMinusCircle,
  faHashtag,
  faUser,
  faIdCard
} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { Row, Col, Nav, Form, Image, Navbar, Dropdown, Container, ListGroup, InputGroup, Button, ButtonGroup, Badge } from '@themesberg/react-bootstrap';
import {Link, useHistory, useLocation} from 'react-router-dom';
import NOTIFICATIONS_DATA from "../data/notifications";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";

import { Routes } from "../routes";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import NavItem from "./NavItem";
import {Context} from "../index";
import {MAIN_ROUTE} from "../data/consts";
import {observer} from "mobx-react-lite";


const NavbarIn = observer(() => {

  const {user, board}  = useContext(Context);
  const history = useHistory();

  let currentUserId = 0;
  board?.admins.map((el) => {
    if (el.id === user.id.id) {
      currentUserId = el.id;
    }
  })

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    history.push(MAIN_ROUTE);
    console.log(user)
  }


  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const areNotificationsRead = notifications.reduce((acc, notif) => acc && notif.read, true);

  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    }, 300);
  };

  const Notification = (props) => {
    const { link, sender, image, time, message, read = false } = props;
    const readClassName = read ? "" : "text-danger";

    return (
        <ListGroup.Item action href={link} className="border-bottom border-light">
          <Row className="align-items-center">
            <Col className="col-auto">
              <Image src={image} className="user-avatar lg-avatar rounded-circle" />
            </Col>
            <Col className="ps-0 ms--2">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="h6 mb-0 text-small">{sender}</h4>
                </div>
                <div className="text-end">
                  <small className={readClassName}>{time}</small>
                </div>
              </div>
              <p className="font-small mt-1 mb-0">{message}</p>
            </Col>
          </Row>
        </ListGroup.Item>
    );
  };

  return (
      <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
        <Container fluid className="px-0">
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex align-items-center">
              <Form className="navbar-search">
                <Form.Group id="topbarSearch">
                  <InputGroup className="input-group-merge search-bar">
                    <InputGroup.Text><FontAwesomeIcon icon={faSearch} /></InputGroup.Text>
                    <Form.Control type="text" placeholder="Поиск клиента" />
                  </InputGroup>
                </Form.Group>
              </Form>

              <Dropdown className="btn-toolbar">
                <Dropdown.Toggle as={Button} variant="primary" size="sm" className="btn_control mx-2">
                  <FontAwesomeIcon icon={faPlus} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faUserAstronaut} className="me-2" /> Лид
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faUserGraduate} className="me-2" /> Клиент
                  </Dropdown.Item>
                  {/* <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserFriends} className="me-2" /> Родитель
                </Dropdown.Item> */}
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faUsers} className="me-2" /> Группа
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faPlusCircle} className="me-2" /> Доход
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faMinusCircle} className="me-2" /> Расход
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> Продажа товара
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faUsers} className="me-2" /> Групповой
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faUser} className="me-2" /> Индивидуальный
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faHashtag} className="me-2" /> Пробный
                  </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>

              <div className="m_icon_size">
                <NavItem icon={faCog} link={Routes.GeneralSettings.path} />
              </div>
              <div className="m_icon_size">
                <NavItem icon={faShoppingCart} link={Routes.ProductItems.path} />
              </div>

            </div>
            <Nav className="align-items-center">
              <Dropdown as={Nav.Item} onToggle={markNotificationsAsRead}>
                <Dropdown.Toggle as={Nav.Link} className="text-dark icon-notifications me-lg-3">
                <span className="icon icon-sm">
                  <FontAwesomeIcon icon={faBell} className="bell-shake" />
                  {areNotificationsRead ? null : <span className="icon-badge rounded-circle unread-notifications" />}
                </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                  <ListGroup className="list-group-flush">
                    <Nav.Link href="#" className="text-center text-primary fw-bold border-bottom border-light py-3">
                      Уведомления
                    </Nav.Link>

                    {/*{notifications.map(n => <Notification key={`notification-${n.id}`} {...n} />)}*/}
                    {notifications.map(n => <Notification key={n.id} {...n} />)}

                    <Dropdown.Item className="text-center text-primary fw-bold py-3">
                      Показать все
                    </Dropdown.Item>
                  </ListGroup>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                  <div className="media d-flex justify-content-center">
                    {/*<Image src={Profile3} className="user-avatar md-avatar rounded-circle" />*/}
                    {
                      board?.admins.map((el) => {
                        if (el.id === currentUserId) {
                          return <Image key={el.id} src={process.env.REACT_APP_API_URL + el.img} className="user-avatar md-avatar rounded-circle" />
                        }
                      })
                    }
                    {/*<div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">*/}
                    {/*  {*/}
                    {/*    board?.admins.map((el) => {*/}
                    {/*      if (el.id === currentUserId) {*/}
                    {/*        return <span key={el.id} className="mb-0 font-small fw-bold">{el.name}</span>*/}
                    {/*      }*/}
                    {/*    })*/}
                    {/*  }*/}
                    {/*</div>*/}
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faUserCircle} className="me-2" /> Профиль
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faQuestion} className="me-2" /> Вопросы
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faYoutube} className="me-2" /> Видеоуроки
                  </Dropdown.Item>
                  <Dropdown.Item className="fw-bold">
                    <FontAwesomeIcon icon={faUserShield} className="me-2" /> Поддержа
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item className="fw-bold" onClick={() => logOut()}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2"/> Выйти
                  </Dropdown.Item>
                </Dropdown.Menu>

              </Dropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>
  );
});

export default NavbarIn;
