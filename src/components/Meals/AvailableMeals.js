import classes from './AvailableMeals.module.css';
import React from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const meal = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      price={meal.price}
      description={meal.description}
      name={meal.name}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meal}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
