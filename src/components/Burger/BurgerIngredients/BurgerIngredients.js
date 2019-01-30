import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case'bread-bottom':
                ingredient = <div className='burger__bread--bottom'/>;
                break;
            case'bread-top':
                ingredient = (
                    <div className='burger__bread--top'>
                        <div className='burger__seeds--1'/>
                        <div className='burger__seeds--2'/>
                    </div>
                );
                break;
            case'meat':
                ingredient = <div className='burger__meat'/>;
                break;
            case'cheese':
                ingredient = <div className='burger__cheese'/>;
                break;
            case'bacon':
                ingredient = <div className='burger__bacon'/>;
                break;
            case'salad':
                ingredient = <div className='burger__salad'/>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }

}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;