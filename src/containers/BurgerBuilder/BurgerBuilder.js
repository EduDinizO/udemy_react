import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    render() {
        return (
            <Row className='justify-content-center'>
                <Col lg={3} md={4} sm={5} xs={8}>
                    <Burger/>
                    <div>Build Controls</div>
                </Col>
            </Row>
        );
    }
}

export default BurgerBuilder;