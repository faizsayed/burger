import React, { Component } from 'react';
import { connect } from 'react-redux';

import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData'

class Checkout extends Component {

    checkoutCancel = () => {
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        this.props.history.push("/checkout/contact-data");
    }

    render() {
        let summery = <Redirect to="/" />

        if (this.props.ings) {
            const purchaseRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summery = (
                <div>
                    {purchaseRedirect}
                    <CheckoutSummery
                        checkoutCancel={this.checkoutCancel}
                        checkoutContinue={this.checkoutContinue}
                        ingredients={this.props.ings} />
                    <Route path={this.props.match.path + "/contact-data"}
                        component={ContactData} />

                </div>
            );
        }
        return summery;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);