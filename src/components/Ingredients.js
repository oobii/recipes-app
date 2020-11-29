import React from 'react';

export default function Ingredient({name, amount, measurment}) {
    return (
        <li>
          {name} {amount} {measurment}
        </li>
    );

}