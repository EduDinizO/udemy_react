import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    };

    addIngredientHandler = type => {
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = this.state.ingredients[type] + 1;

        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});

        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = type => {
        if (this.state.ingredients[type] <= 0) {
            return;
        }

        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = this.state.ingredients[type] - 1;

        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients});

        this.updatePurchaseState(updatedIngredients);
    };

    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        this.setState({purchasable: sum > 0});
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients,
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <>
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={4} sm={5} xs={8}>
                            <Burger ingredients={this.state.ingredients}/>
                        </Col>
                    </Row>
                </Container>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </>
        );
    }
}

export default BurgerBuilder;