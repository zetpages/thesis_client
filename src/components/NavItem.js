import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav, Image, Badge } from '@themesberg/react-bootstrap';
import { Link, useLocation } from 'react-router-dom';



const NavItem = (props) => {
    const location = useLocation();
    const { pathname } = location;
    const [show, setShow] = useState(false);
    const showClass = show ? "show" : "";
    const onCollapse = () => setShow(!show);


  const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
  const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
  const navItemClassName = link === pathname ? "active" : "";
  const linkProps = external ? { href: link } : { as: Link, to: link };

  return (
    <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
      <Nav.Link {...linkProps} target={target} className={classNames}>
        <span>
          {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
          {image ? <Image src={image} width={100} height={40} className="sidebar-icon svg-icon" /> : null}

          <span className="sidebar-text">{title}</span>
        </span>
        {badgeText ? (
          <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
        ) : null}
      </Nav.Link>
    </Nav.Item>
  );
};

export default NavItem;