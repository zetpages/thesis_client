import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faChessKnight, faCode, faGuitar, faRobot, faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload, faStar, faStarHalfAlt, faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, NavItem, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Carousel, CarouselItem, CarouselProps, Badge, NavDropdown } from '@themesberg/react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Routes } from "../routes";
import moment from "moment-timezone";
import MockupPresentation from "../assets/img/mockup-presentation.png";
import ReactHero from "../assets/img/technologies/oku-hero-logo.svg";
import ReactHeroDark from "../assets/img/technologies/oku-hero-logo-dark.svg";
import ReactMockupImg from "../assets/img/oku-mockup.svg";
import Section3 from "../assets/img/section-3.svg";
import Section4 from "../assets/img/section-4.svg";
import Section5 from "../assets/img/section-5.svg";
import Section6 from "../assets/img/section-6.svg";
import ManSvg from "../assets/img/man-svg.svg";
import ClockSvg from "../assets/img/clock.png";
import PhoneShadow from "../assets/img/custom-phone-shadow.png";
import TopGradient from "../assets/img/top-gradient.svg";
import SectionFooter from "../assets/img/section-footer.svg";
import OkLogo from "../assets/img/technologies/ok-logo-dark.svg";


export default () => {
  const currentYear = moment().get("year");
  const PagePreview = (props) => {
    const { name, image, link } = props;

    return (
      <Col xs={6} className="mb-5">
        <Card.Link as={Link} to={link} className="page-preview page-preview-lg scale-up-hover-2">
          <Image src={image} className="shadow-lg rounded scale" alt="Dashboard page preview" />

          <div className="text-center show-on-hover">
            <h6 className="m-0 text-center text-white">
              {name} <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-2" />
            </h6>
          </div>
        </Card.Link>
      </Col>
    );
  };

  const Feature = (props) => {
    const { title, description, icon } = props;

    return (
      <Col xs={12} sm={6} lg={3}>
        <Card className="bg-white shadow-soft text-primary rounded mb-4">
          <div className="px-3 px-lg-4 py-5 text-center">
            <span className="icon icon-lg mb-4">
              <FontAwesomeIcon icon={icon} />
            </span>
            <h5 className="fw-bold text-primary">{title}</h5>
            <p>{description}</p>
          </div>
        </Card>
      </Col>
    );
  };

  const FolderItem = (props) => {
    const { name, icon, tooltip, iconColor } = props;
    const color = iconColor ? `text-${iconColor}` : "";


    return (
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="left"
        overlay={<Tooltip>{tooltip}</Tooltip>}
      >
        <li data-toggle="tooltip" data-placement="left" title="Main folder that you will be working with">
          <FontAwesomeIcon icon={icon ? icon : faFolder} className={`${color} me-2`} /> {name}
        </li>
      </OverlayTrigger>
    );
  };

  return (
    <div className="home_landing-page">
      {/* <Navbar expand="lg" className="bg_transparent">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#" className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={Link} to={Routes.Docs.path}>Докумнтация</Nav.Link>
                <Nav.Link as={Link} to={Routes.Support.path}>Поддержа</Nav.Link>
                <Nav.Link as={Link} to={Routes.Contacts.path}>Контакты</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>

          <div className="d-flex align-items-center">
            <Button as={Link} to={Routes.Signin.path} variant="outline-dark" className="ms-3">Войти</Button>
          </div>
        </Container>
      </Navbar> */}

      <Navbar collapseOnSelect expand="lg" className="bg_transparent">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#" className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="custom_navbar-collapse">
            <Nav className="navbar-nav-hover align-items-lg-center">
              <Nav.Link as={Link} to={Routes.Docs.path}>Докумнтация</Nav.Link>
              <Nav.Link as={Link} to={Routes.Support.path}>Поддержа</Nav.Link>
              <Nav.Link as={Link} to={Routes.Contacts.path}>Контакты</Nav.Link>
            </Nav>
            <Nav>
              <Button as={Link} to={Routes.Signin.path} variant="outline-dark" className="ms-3">Войти</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>






      <section className="section-header section_header_height overflow-hidden pt-9 pb-2 pb-lg-2 bg_custom text-white" id="home">
        <Container>
          <Row>
            <Col lg={6} className="text-left">
              <div className="react-big-icon d-none d-lg-block ok_big_icon">
                <Image src={TopGradient} />
              </div>
              <h1 className="fw-bolder text-order custom-aqum__regular">CRM для образовательных центров:</h1>
              <div className="d-flex align-items-center mb-5 custom-clock__container">
                <Image src={ClockSvg} />
                <p className="just-p fw-light">Самый удобный и быстрый способ развития образовательных учреждений</p>
              </div>
              <div className="d-flex align-items-center justify-content-left">
                <Button variant="secondary" as={Link} to={Routes.Signup.path} className="text-dark me-3 custom-btn__rounded">
                  Использовать бесплатно <FontAwesomeIcon icon={faStarOfLife} className="d-none d-sm-inline ms-1" />
                </Button>
              </div>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
                <div className="text-left">
                  <a href="https://skilland.site" target="_blank">
                    <p className="text-muted font-small mx-2">Продукт разработан в Skilland</p>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} className="custom-img__man d-none d-lg-block">
              <Image src={ManSvg} alt="Calendar Preview" />
            </Col>
          </Row>


          <Row className="justify-content-between align-items-center mb-4 mb-lg-2">
            <Col lg={5} className="order-lg-1 d-flex justify-content-center align-items-center custom__circle-container mb-6">
              <Image src={PhoneShadow} alt="Calendar Preview" />
            </Col>
            <Col lg={6} className="order-lg-2 mb-5 mb-lg-0 custom-info__container">
              <h2>Автоматизация вашей школы и рост продаж</h2>
              <p className="mb-4 left-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus eligendi ut officia, ullam odio earum ea praesentium laboriosam neque aspernatur non! Aliquam, voluptatem dolorum!</p>
              <p className="mb-4 left-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus eligendi ut officia, ullam odio earum ea praesentium laboriosam neque aspernatur non! Aliquam, voluptatem dolorum!</p>
              <p className="mb-4 left-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus eligendi ut officia, ullam odio earum ea praesentium laboriosam neque aspernatur non! Aliquam, voluptatem dolorum!</p>
              <p className="mb-4 left-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus eligendi ut officia, ullam odio earum ea praesentium laboriosam neque aspernatur non! Aliquam, voluptatem dolorum!</p>
            </Col>
          </Row>


        </Container>
        {/* <figure className="position-absolute img_contain bottom-0 left-0 w-100 d-none d-md-block mb-n2">
          <Image src={MockupPresentation} alt="Mockup presentation" />
        </figure> */}
      </section>

      <section className="section section-md bg-soft pt-lg-3">
        <Container>
          <Row className="justify-content-center mt-5 mt-lg-6">
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faCode} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">12+</h3>
              <p className="text-gray">Курсы программирования</p>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faGuitar} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">6+</h3>
              <p className="text-gray">Музыкальные школы</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faChessKnight} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">23+</h3>
              <p className="text-gray">Дополнительные занятия</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon color="secondary" icon={faRobot} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">2+</h3>
              <p className="text-gray">Робототехника</p>
            </Col>
          </Row>
        </Container>
      </section>




      <section className="section section-md bg-soft pt-lg-3" id="features">
        <Container>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-1 mb-5 mb-lg-0">
              <h2>Автоматизация вашей школы и рост продаж</h2>
              <p className="mb-3 lead fw-bold">100+ Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus eligendi ut officia, ullam odio earum ea praesentium laboriosam neque aspernatur non! Aliquam, voluptatem dolorum!</p>
              <Button as={Link} to={Routes.DashboardOverview.path} variant="secondary" target="_blank">Использовать <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" /></Button>
            </Col>
            <Col lg={6} className="order-lg-2">
              <Image src={ReactMockupImg} alt="Calendar Preview" />
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2">
              <h2>Отслеживайте платежи, курсы, выступления и многое другое</h2>
              <p className="mb-3 lead fw-bold">100+ Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus eligendi ut officia, ullam odio earum ea praesentium laboriosam neque aspernatur non! Aliquam, voluptatem dolorum!</p>
              <Button as={Link} to={Routes.Signin.path} variant="secondary" className="mb-5 mb-lg-0" target="_blank">
                <Image src={OkLogo} className="ok_btn" alt="MapBox Leaflet.js Custom Integration Mockup" />Регистрация
              </Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={Section3} alt="Calendar Preview" />
            </Col>
          </Row>

          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-1">
              <h2>Личный кабинет</h2>
              <p className="mb-3 lead fw-bold">100+ Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus eligendi ut officia, ullam odio earum ea praesentium laboriosam neque aspernatur non! Aliquam, voluptatem dolorum!</p>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis praesentium laboriosam neque aspernatur non! Aliquam, voluptatem dolorum!</p>
            </Col>
            <Col lg={6} className="order-lg-2">
              <Image src={Section4} alt="Calendar Preview" />
            </Col>
          </Row>

          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-2">
              <h2>Учет и анализ платежей и доходов</h2>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus eligendi ut officia, ullam odio earum ea praesentium laboriosam neque aspernatur non! Aliquam, voluptatem dolorum!</p>
              <Button as={Link} to={Routes.Signin.path} variant="secondary" className="mb-5 mb-lg-0" target="_blank">
                <Image src={OkLogo} className="ok_btn" alt="MapBox Leaflet.js Custom Integration Mockup" />Регистрация
              </Button>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={Section6} alt="Calendar Preview" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section-lg bg-primary" id="getting-started">
        <Container>
          <Row className="justify-content-center text-center text-white mb-5">
            <Col xs={12}>
              <h2 className="fw-light mb-3">
                Для вас <span className="fw-bold">простая</span>, и <span className="fw-bold">быстрая</span> интеграция.
              </h2>
              <p className="lead px-lg-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus eligendi ut officia, ullam odio earum ea praesentium!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section_w section-md pt-lg-6">
        <Container>
          <Row className="justify-content-between align-items-center mb-5 mb-lg-7">
            <Col lg={5} className="order-lg-1">
              <h2>Отслеживайте платежи, курсы, выступления и многое другое</h2>
              <p className="mb-3 lead fw-bold">100+ Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus eligendi ut officia, ullam odio earum ea praesentium laboriosam neque aspernatur non! Aliquam, voluptatem dolorum!</p>
              <Button as={Link} to={Routes.Signin.path} variant="secondary" className="mb-5 mb-lg-0" target="_blank">
                <Image src={OkLogo} className="ok_btn" alt="MapBox Leaflet.js Custom Integration Mockup" />Регистрация
              </Button>
            </Col>
            <Col lg={6} className="order-lg-2">
              <Image src={Section5} alt="Calendar Preview" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section_f section-md pt-lg-6">
        <Container>
          <Row className="justify-content-between align-items-center mb-3 mb-lg-5">
            <Col lg={5} className="order-lg-2">
              <h2>Единое место для всех ваших данных!</h2>
              <Button as={Link} to={Routes.Signin.path} variant="secondary" className="mb-4 mb-lg-0 mt-3" target="_blank">
                <Image src={OkLogo} className="ok_btn" alt="MapBox Leaflet.js Custom Integration Mockup" />Использовать бесплатно
              </Button>
              <p className="mb-3 mt-4 fw-light">После интеграции можно настроить</p>
            </Col>
            <Col lg={6} className="order-lg-1">
              <Image src={SectionFooter} alt="Calendar Preview" />
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer pt-6 pb-3 bg-dark text-white">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col md={4}>
              <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3">
                <Image className="mb-3" src={ReactHeroDark} />
              </Navbar.Brand>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus eligendi ut officia.</p>
            </Col>
            <Col xs={6} md={2} className="mb-5 mb-lg-0">
              <span className="h5">Подробнее</span>
              <ul className="links-vertical mt-2">
                <li><Nav.Link as={Link} to={Routes.Docs.path}>Докумнтация</Nav.Link></li>
                <li><Nav.Link as={Link} to={Routes.Support.path}>Поддержа</Nav.Link></li>
                <li><Nav.Link as={Link} to={Routes.Contacts.path}>Контакты</Nav.Link></li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="mb-5 mb-lg-0">
              <span className="h5 mb-3 d-block">Подписаться</span>
              <form action="#">
                <div className="form-row mb-2">
                  <div className="col-12">
                    <input type="email" className="form-control mb-2" placeholder="akimov@gmail.com" name="email" aria-label="Subscribe form" required />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-secondary text-dark shadow-soft btn-block" data-loading-text="Sending">
                      <span>Подписаться</span>
                    </button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
          <hr className="bg-gray my-4" />
          <Row>
            <Col className="mb-md-2">
              <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">© Skilland <span className="current-year">{`${currentYear}`}</span>. Все права защищены.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};