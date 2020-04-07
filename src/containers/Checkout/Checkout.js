import React, { Component } from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if(param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: price });
    }

    checkoutCancel = () => {
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        this.props.history.push("/checkout/contact-data");
    }

    render() {
        console.log("----->>>", this.props);
        return (
            <div>
                <CheckoutSummery
                    checkoutCancel={this.checkoutCancel}
                    checkoutContinue={this.checkoutContinue}
                    ingredients={this.state.ingredients} />
                <Route path={this.props.match.path + "/contact-data"} 
                    render={(props) => (<ContactData 
                        ingredients={this.state.ingredients} 
                        totalPrice={this.state.totalPrice}
                        {...props} />)} />

            </div>
        );
    }
}

export default Checkout;