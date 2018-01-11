//
//* Project Name: finalApp
//* Author: BO YANG (Tinker)
//* Data: 2018-01-10
//

import React,{Component} from 'react';
import {Text, Content, H2} from 'native-base'
import {connect} from 'react-redux'

export class RestaurantDetail extends Component{

    render(){
        return(
            <Content>
                <H2>{this.props.restaurant.name}</H2>
                
                <Text note>Distance:{Number(this.props.restaurant.distance/1000).toFixed(2)+" km"}</Text>

                <Text>Phone:{this.props.restaurant.phone}</Text>

                <Text>price:{this.props.restaurant.price}</Text>

                <Text>Rating:{this.props.restaurant.rating}</Text>
            </Content>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        restaurant: state.restaurant
    };
}

export default connect(mapStateToProps)(RestaurantDetail);
