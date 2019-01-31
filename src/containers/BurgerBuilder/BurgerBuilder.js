import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Burger from '../../components/Burger/Burger';
import BuilderControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    };

    render() {
        return (
            <>
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={4} sm={5} xs={8}>
                            <Burger ingredients={this.state.ingredients}/>
                        </Col>
                    </Row>
                </Container>
                <BuilderControls/>
            </>
        );
    }
}

export default BurgerBuilder;