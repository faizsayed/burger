import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {
        console.log("Orders.js========>>>>",this.props);
        let order = <Spinner />
        if(!this.props.loading) {
            order = (
                this.props.orders.map(order => (
                    <Order 
                        key={order.id} 
                        ingredients={order.ingredients} 
                        price={order.price} />
                ))
            )
        }
        return(
            <div>
                {order}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        orders: state.order.order,
        loading: state.order.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchOrders: () => dispatch(actionTypes.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));