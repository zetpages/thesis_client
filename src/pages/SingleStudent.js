import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneStudent} from "../http/boardAPI";
import {
    Button,
    ButtonGroup,
    Col,
    Dropdown,
    Image,
    Overlay,
    OverlayTrigger,
    Popover,
    Row,
    Tab,
    Tabs
} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookmark,
    faBookOpen,
    faBoxOpen,
    faChalkboardUser,
    faChartBar,
    faClock,
    faCommentDots,
    faEllipsisVertical,
    faFileAlt,
    faGraduationCap, faGrip,
    faIdCard,
    faLocationDot,
    faPencil,
    faPercent,
    faPlus,
    faRocket,
    faTableList,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import {Card} from "@themesberg/react-bootstrap";


const SingleStudent = () => {
    const [student, setStudent] = useState({});
    const [key, setKey] = useState(0);
    const [innerKey, setInnerKey] = useState(0);
    const {id} = useParams();


    useEffect(() => {
        fetchOneStudent(id).then(data => setStudent(data));
    },[]);



    const studentWidget = student.groups?.map((el) => {
        let tmpArray;
        console.log(el)
        el.regular_classes?.map((k) => {
            const sortedSingleClasses = k.single_classes.sort((a, b) => {
                return Date.parse(a.dayDate) - Date.parse(b.dayDate);
            });
            tmpArray = [...sortedSingleClasses];
        })
        return tmpArray;
    })

    // console.log(student.groups[0]?.regular_classes[0]?.single_classes)


    const statusName = student.studentStatusId === 1 ? "Обучается"
        : student.studentStatusId === 2 ? "Пауза" :  "Завершили";
    const statusVariant = statusName === "Обучается" ? "success"
        : statusName === "Пауза" ? "warning" : statusName === "Завершили" ? "danger" : "primary";
    const bgColor = ['red', 'green','blue'];


    return (
        <>
            <Row>
                <Col xs={12} xl={4}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Dropdown className="float-end">
                                        <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
                                            <FontAwesomeIcon icon={faEllipsisVertical} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
                                            <Dropdown.Item>
                                                <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Document
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <FontAwesomeIcon icon={faCommentDots} className="me-2" /> Message
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Product
                                            </Dropdown.Item>

                                            <Dropdown.Divider />

                                            <Dropdown.Item>
                                                <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Абонемент
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <div className="d-flex align-items-start">
                                        <Image src={process.env.REACT_APP_API_URL + student.img} className="user-avatar xl-avatar rounded-circle" />
                                        <div className="w-100 ms-3">
                                            <h5 className="my-0">{student.name}</h5>
                                            <p className="text-muted mb-0">{student.birthday}</p>
                                            <p className={`text-muted mb-0 text-${statusVariant}`}>{statusName}</p>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <div className="d-flex justify-content-between custom__prop-line mt-2">
                                            <span className="text-nowrap">Email</span>
                                            <h6>{student.email}</h6>
                                        </div>
                                        <div className="d-flex justify-content-between custom__prop-line mt-2">
                                            <span className="text-nowrap">Пол</span>
                                            <h6>{student.gender?.name}</h6>
                                        </div>
                                        <div className="d-flex justify-content-between custom__prop-line mt-2">
                                            <span className="text-nowrap">Телефон</span>
                                            <h6>{student.phone}</h6>
                                        </div>
                                        <div className="d-flex justify-content-between custom__prop-line mt-2">
                                            <span className="text-nowrap">Родители</span>
                                            <h6>{student.parentName}, {student.parentPhone}</h6>
                                        </div>
                                        <div className="d-flex justify-content-between custom__prop-line mt-2">
                                            <span className="text-nowrap">Отв. менеджер</span>
                                            <h6>{student.admin?.name}</h6>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <Card>
                                <Card.Body className="p-2">
                                    <div className="mt-3">
                                        <div className="d-flex justify-content-between align-items-center mb-4 me-2">
                                            <h5 className="m-0">
                                                <FontAwesomeIcon icon={faTableList} className="text-danger mx-2" />
                                                Группы
                                            </h5>
                                            <Dropdown as={ButtonGroup}>
                                                <Dropdown.Toggle split as={Button} variant="link" className="text-dark p-0">
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
                                                    <Dropdown.Item>
                                                        <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Update
                                                    </Dropdown.Item>

                                                    <Dropdown.Divider />

                                                    <Dropdown.Item>
                                                        <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Subscription Plan
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>

                                        {student.groups?.map((el, i) =>
                                            <div key={el.id} className={`py-3 px-2 mb-2 rounded-1 back-${bgColor[i] !== undefined ? bgColor[i] : bgColor[1]}`}>
                                                <div className="d-flex justify-content-between align-items-center custom__prop-line mt-2 px-2">
                                                    <div className="d-flex align-items-center">
                                                        <span className="text-nowrap fw-bold me-2">{i+1}.</span>
                                                        <h6 className="mb-0">{el.name}</h6>
                                                    </div>
                                                    <Dropdown as={ButtonGroup}>
                                                        <Dropdown.Toggle split as={Button} variant="link" className="text-dark me-2 p-0">
                                                            <FontAwesomeIcon icon={faPencil} />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
                                                            <Dropdown.Item>
                                                                <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Edit
                                                            </Dropdown.Item>
                                                            <Dropdown.Item>
                                                                <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Update
                                                            </Dropdown.Item>

                                                            <Dropdown.Divider />

                                                            <Dropdown.Item>
                                                                <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Абонемент
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <div className="d-flex justify-content-between custom__prop-line mt-2 px-2">
                                                    <span className="text-nowrap"><FontAwesomeIcon icon={faLocationDot} className="me-2 " />Филиал:</span>
                                                    <h6>{el.branch?.address},<span className="mx-1"></span> {el.branch?.name}</h6>
                                                </div>
                                                <div className="d-flex justify-content-between mt-2 px-2">
                                                    <span className="text-nowrap"><FontAwesomeIcon icon={faGraduationCap} className="me-2 " />Педагог:</span>
                                                    <h6>{el.teacher?.name}</h6>
                                                </div>
                                                {el.regular_classes?.map((t ,j)  =>
                                                    <Card key={t.id} className="mt-2 border-0">
                                                        <Card.Body className="pt-2 pb-4 px-0">
                                                            <div className="d-flex mt-2 px-2" key={t.id}>
                                                                <FontAwesomeIcon icon={faBookmark} className="me-2 text__orange" />
                                                                <h6>Регулярные занятия</h6>
                                                            </div>
                                                            {t.weekDays?.map((f, k) =>
                                                                <div className="d-flex justify-content-between custom__prop-line mt-2 px-2" key={k}>
                                                                    <h6 className="text-nowrap">{f}</h6>
                                                                    <div className="regular__class">
                                                                        <p>
                                                                            <FontAwesomeIcon icon={faClock} className="me-2 " />
                                                                            {t.scheduleStart.substring(0,5)}-{t.scheduleEnd.substring(0,5)} / {t.room?.name}
                                                                        </p>
                                                                        <p>
                                                                            <FontAwesomeIcon icon={faBookOpen} className="me-2 " />
                                                                            {t.room?.name} / {el.level?.name}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Card.Body>
                                                    </Card>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} xl={8}>
                    <Row className="mt-0 mb-2">
                        <Col>
                            <Card>
                                <Card.Body className="p-2 pb-4">
                                    <div className="d-flex justify-content-between align-items-center mb-4 mt-3 me-2">
                                        <h5 className="m-0">
                                            <FontAwesomeIcon icon={faIdCard} className="text-danger mx-2" />
                                            Абонементы
                                        </h5>
                                        <Dropdown as={ButtonGroup}>
                                            <Dropdown.Toggle split as={Button} variant="link" className="text-dark p-0">
                                                <FontAwesomeIcon icon={faPlus} />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
                                                <Dropdown.Item>
                                                    <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Edit
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Update
                                                </Dropdown.Item>

                                                <Dropdown.Divider />

                                                <Dropdown.Item>
                                                    <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Subscription Plan
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex justify-content-between custom__prop-line mt-2 px-2">
                                        <span className="text-nowrap">
                                            <FontAwesomeIcon icon={faBookmark} className="me-2 "/>
                                            {student.subscription?.name} / <span className="text-success">
                                            $</span> {student.subscription?.costForClass} занятие
                                        </span>
                                        <Dropdown as={ButtonGroup}>
                                            <Dropdown.Toggle split as={Button} variant="link" className="text-dark me-2 p-0">
                                                <FontAwesomeIcon icon={faPencil} />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
                                                <Dropdown.Item>
                                                    <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Edit
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Update
                                                </Dropdown.Item>

                                                <Dropdown.Divider />

                                                <Dropdown.Item>
                                                    <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Subscription Plan
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body className="p-2 pb-4">
                                    <div className="mt-3">
                                        <div className="d-flex justify-content-between align-items-center mb-4 me-2">
                                            <h5 className="m-0">
                                                <FontAwesomeIcon icon={faPercent} className="text-danger mx-2" />
                                                Скидки
                                            </h5>
                                            <Dropdown as={ButtonGroup}>
                                                <Dropdown.Toggle split as={Button} variant="link" className="text-dark p-0">
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
                                                    <Dropdown.Item>
                                                        <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Update
                                                    </Dropdown.Item>

                                                    <Dropdown.Divider />

                                                    <Dropdown.Item>
                                                        <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Subscription Plan
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>

                                        <div className={`rounded-1`}>
                                            <div className="d-flex justify-content-between align-items-center custom__prop-line mt-2 px-2">
                                                <div className="d-flex">
                                                    <span className="text-nowrap fw-bold me-2">{student.discount?.discount_type.name}</span>
                                                </div>
                                                <h6 className="mb-0">{student.discount?.amount}%</h6>
                                                <Dropdown as={ButtonGroup}>
                                                    <Dropdown.Toggle split as={Button} variant="link" className="text-dark me-2 p-0">
                                                        <FontAwesomeIcon icon={faPencil} />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
                                                        <Dropdown.Item>
                                                            <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Edit
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Update
                                                        </Dropdown.Item>

                                                        <Dropdown.Divider />

                                                        <Dropdown.Item>
                                                            <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Subscription Plan
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-0 mb-2">
                        <Col>
                            <Card>
                                <Card.Body className="p-2 pb-4 attendance">
                                    <div className="d-flex justify-content-between align-items-center mb-4 mt-3 me-2">
                                        <h5 className="m-0">
                                            <FontAwesomeIcon icon={faChartBar} className="text-danger me-2" />
                                            Виджет посещений
                                        </h5>
                                        <Dropdown as={ButtonGroup}>
                                            <Dropdown.Toggle split as={Button} variant="link" className="text-dark p-0">
                                                <FontAwesomeIcon icon={faPlus} />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
                                                <Dropdown.Item>
                                                    <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Edit
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <FontAwesomeIcon icon={faBoxOpen} className="me-2" /> Update
                                                </Dropdown.Item>

                                                <Dropdown.Divider />

                                                <Dropdown.Item>
                                                    <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Subscription Plan
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="tabs__parent">
                                        <span>
                                            <FontAwesomeIcon icon={faTableList} className="me-2" />
                                            Группы
                                        </span>
                                        <Tabs
                                            activeKey={key}
                                            onSelect={(k) => setKey(k)}
                                            className="pb-2 border-bottom-1 border-light"
                                        >
                                            {student.groups?.map((el, i) =>
                                                <Tab eventKey={i} title={el.name} key={el.id}>
                                                    <div className="tabs__child pt-1">
                                                        <span>
                                                            <FontAwesomeIcon icon={faBookmark} className="me-2 text__orange" />
                                                            Регулярные уроки
                                                        </span>
                                                        <Tabs
                                                            activeKey={innerKey}
                                                            onSelect={(c) => setInnerKey(c)}
                                                            className="mb-2"
                                                        >
                                                            {el.regular_classes?.map((t, j) =>
                                                                <Tab eventKey={j} title={t.name} key={t.id}>


                                                                    {t.single_classes?.map((s) =>
                                                                        <OverlayTrigger
                                                                            key={s.id}
                                                                            trigger="click"
                                                                            placement="auto"
                                                                            shouldUpdatePosition={true}
                                                                            overlay={(
                                                                                <Popover id="popover-basic">
                                                                                    <Popover.Header as="h3">
                                                                                        <div className="d-flex justify-content-between">
                                                                                            <span className="me-2">{s.course_type?.name}</span>
                                                                                            <span>{s?.classState}</span>
                                                                                        </div>
                                                                                    </Popover.Header>
                                                                                    <Popover.Body>
                                                                                        <div className="d-flex justify-content-between">
                                                                                            <span>Тип:</span>
                                                                                            <span>{s?.course_type.name}</span>
                                                                                        </div>
                                                                                        <div className="d-flex justify-content-between">
                                                                                            <span>Время:</span>
                                                                                            <span>{s?.timeStart}, {s?.durationLong}мин</span>
                                                                                        </div>
                                                                                        <div className="d-flex justify-content-between">
                                                                                            <span>Филиал:</span>
                                                                                            <span className="text-end">{el?.branch.name}, <br/> {s?.room.name}</span>
                                                                                        </div>
                                                                                        <div className="d-flex justify-content-between">
                                                                                            <span>Педагог:</span>
                                                                                            <span>{el?.teacher?.name}</span>
                                                                                        </div>
                                                                                        <div className="d-flex justify-content-between custom__prop-line">
                                                                                            <span>Предмет:</span>
                                                                                            <span>{s?.course.name}</span>
                                                                                        </div>

                                                                                    </Popover.Body>
                                                                                </Popover>
                                                                            )} >
                                                                            <div className={`bg-${s.classState === 'запланирован' ? 'light' : 'done'} cursor-pointer  d-flex m-1 flex-column text-center px-2 py-2 bg-light rounded-1 border border-1 border-light`} key={s.id}>
                                                                                <div className="d-flex justify-content-center align-items-center font__s-6">
                                                                                    {s.courseTypeId === 1 ? <FontAwesomeIcon icon={faChalkboardUser} className="text-dark me-1" /> : <FontAwesomeIcon icon={faUsers} className="text-dark me-1" />}
                                                                                    <span className="font__s-6">{s.day}</span>
                                                                                </div>
                                                                                <span className="font__s-6">{s.dayDate}</span>
                                                                            </div>
                                                                        </OverlayTrigger>
                                                                    )}
                                                                </Tab>
                                                            )}
                                                        </Tabs>
                                                    </div>
                                                </Tab>
                                            )}
                                        </Tabs>
                                    </div>
                                    {/*<div className="d-flex flex-wrap">*/}
                                    {/*    {*/}
                                    {/*        studentWidget?.map((el) =>*/}
                                    {/*            el?.map((k) =>*/}
                                    {/*                <div className={*/}
                                    {/*                    `bg-${k.classState === 'запланирован'*/}
                                    {/*                        ? 'light' : 'done'}  d-flex m-1 flex-column text-center px-2 py-2 bg-light rounded-1 border border-1 border-light`*/}
                                    {/*                } key={k.id}>*/}
                                    {/*                    <div className="d-flex justify-content-center align-items-center font__s-6">*/}
                                    {/*                        {k.courseTypeId === 1 ? <FontAwesomeIcon icon={faChalkboardUser} className="text-dark me-1" /> : <FontAwesomeIcon icon={faUsers} className="text-dark me-1" />}*/}
                                    {/*                        <span className="font__s-6">{k.day}</span>*/}
                                    {/*                    </div>*/}
                                    {/*                    <span className="font__s-6">{k.dayDate}</span>*/}
                                    {/*                    /!*{k.dayDate}, {k.day}*!/*/}
                                    {/*                </div>*/}
                                    {/*            )*/}
                                    {/*        )*/}

                                    {/*    }*/}
                                    {/*</div>*/}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default SingleStudent;