
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Card, Image, Button, Container } from '@themesberg/react-bootstrap';

import { Link } from 'react-router-dom';

import { Routes } from "../../routes";
import NotFoundImage from "../../assets/img/illustrations/notFound.png";


export default () => {
  return (
    <main>
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col xs={12} className="text-center d-flex align-items-center justify-content-center">
              <div>
                <Card.Link as={Link} to={Routes.DashboardOverview.path}>
                  <Image src={NotFoundImage} className="img-fluid w-50" />
                </Card.Link>
                <h1 className="text-primary mt-2">
                  Станица не <span className="fw-bolder">найдена</span> или у вас нет <span className="fw-bolder">доступа</span>
                </h1>
                <p className="lead my-4">
                  Если у вас возникли вопросы то можете обратиться в нашу службу поддержки.
            </p>
                <Button as={Link} variant="primary" className="animate-hover" to={Routes.Presentation.path}>
                  <FontAwesomeIcon icon={faChevronLeft} className="animate-left-3 me-3 ms-2" />
                  Вернуться на главную
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
