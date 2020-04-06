import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import './CheckoutSummery.css';

const checkoutSummery = (props) => {
    return(
        <div className="CheckoutSummery">
            <h1>We hope it taste well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked>CANCEL</Button>
            <Button btnType="Success" clicked>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummery;