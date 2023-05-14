import React from 'react';
import './header.scss';
import {Col, Container, Row} from "react-bootstrap";
import {ListIcon} from "../Icons/Icons";
import SearchBox from "../SearchBox";
import {useStateContext} from "../../Contexts/ContextProvider";

const Header = () => {

    const {setSidebarActive} = useStateContext();
    return (
        <header className="main--header">
            <Container fluid={true}>
                <Row>
                    <Col xs={12} className="d-flex w-100 justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-3">
                            <span onClick={e=>setSidebarActive(sidebarActive =>!sidebarActive)}>  <ListIcon/></span>

                            <SearchBox/>
                        </div>
                        <div className="d-flex align-items-center"></div>

                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;