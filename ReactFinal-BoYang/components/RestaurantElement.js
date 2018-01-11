//
//* Project Name: finalApp
//* Author: BO YANG (Tinker)
//* Data: 2018-01-10
//

import React, { Component } from 'react'

import {connect} from 'react-redux'

import * as actions from "../actions"
import {ListItem,Left,Right,Icon,Text, Body} from 'native-base';




export class RestaurantElement extends Component{
    render(){
        return (
             <ListItem key={this.props.restaurant.name} onPress={this.props.selectRestaurant}>

                <Left>

                <Body>
                <Text>{this.props.restaurant.name +" ("+ Number(this.props.restaurant.distance / 10).toFixed(2)+ "m"+")"}</Text>
                </Body>

                </Left>

                <Right>
                    <Icon name="arrow-forward" />
                </Right>

            </ListItem>
        )
    };
};

const mapDispatchToProps = (dispatch,ownProps) => {

    return {
        selectRestaurant: () => dispatch(actions.selectRestaurant(ownProps.restaurant)),
    };
  };


export default connect(null,mapDispatchToProps)(RestaurantElement);
