import React, { Component } from 'react';
import { connect } from 'react-redux';

import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData'

class Checkout extends Component {

    checkoutCancel = () => {
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        this.props.history.push("/checkout/contact-data");
    }

    render() {
        //console.log("----->>>", this.props);
        return (
            <div>
                <CheckoutSummery
                    checkoutCancel={this.checkoutCancel}
                    checkoutContinue={this.checkoutContinue}
                    ingredients={this.props.ings} />
                <Route path={this.props.match.path + "/contact-data"}
                    component={ContactData} />

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);