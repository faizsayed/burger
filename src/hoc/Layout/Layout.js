import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../Aux/Aux';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/sideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    SideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true})
    }

    render() {
        return (
            <Aux>
                <Toolbar 
                    open={this.SideDrawerOpenHandler}
                    isAuth={this.props.isAuthenticated}
                 />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosedHandler}
                />
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);