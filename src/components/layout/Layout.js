import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const layout = props => {
    return (
        <Container fluid={true} className='p-0'>
            <Row className='py-3'>
                <Col>
                    <div>
                        Toolbar, SideDrawer, Backdrop
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
};

export default layout;