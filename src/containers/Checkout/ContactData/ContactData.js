import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import './ContactData.css';
import axios from '../../../axios-order';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalcode: ''
        },
        loading: false,
    }

    orderhandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Faiz Sayed',
                address: {
                    street: 'Test',
                    zipcode: '123456',
                    country: 'India'
                },
                email: 'test@test.com'
            },
            delivaryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false })
            });
    }

    render() {
        let form = (
            <form>
                <input className="Input" type="text" name="name" placeholder="Enter Name" />
                <input className="Input" type="text" name="email" placeholder="Enter Mail" />
                <input className="Input" type="text" name="street" placeholder="Enter Street" />
                <input className="Input" type="text" name="postalcode" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderhandler}>ORDER</Button>
            </form>);
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;