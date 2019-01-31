import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = props => {

    let transformedIngredients = Object.keys(props.ingredients)
    // transform object to an array
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p className='py-2'>Please start adding ingredients!</p>
    }

    return (
        <div className='burger'>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;