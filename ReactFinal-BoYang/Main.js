//
//* Project Name: finalApp
//* Author: BO YANG (Tinker)
//* Data: 2018-01-10
//

import React, { Component } from 'react';

import RestaurantElement from './components/RestaurantElement';

import RestaurantDetail from './components/RestaurantDetail';
import { connect } from "react-redux";

import { Container, Header, Content, List, ListItem, Button, Left, Right, Body, Icon, Text, Footer, FooterTab, Spinner} from 'native-base';

import * as actions from "./actions";

export class Main extends Component {
    renderRestaurantList() {

    let count = 0;
    if(!this.props.businesses) return;

    else if(this.props.showDetail!=true){

        return this.props.businesses.map((item) => {
        return <RestaurantElement key={count++} restaurant = {item} />
        })
    }
  };
  render() {
    if(!this.props.showDetail){
        return(
            <Container>
                <Header><Text>Restaurants Near Me</Text></Header>
                <Content>

                <Button full onPress={this.props.fetchAddress} >
                  <Text>Find restaurants near me...</Text>
                </Button>


                {this.renderRestaurantList()}
                </Content>

                <Footer>
                <FooterTab>

                <Button full>
                    <Text>(c) Tinker 2018</Text>
                </Button>

                </FooterTab>
                </Footer>

            </Container>
        );
    } else {
        return(
            <Container>

                <Header><Text>Restaurants Near Me</Text></Header>

                <Content>
                <Button full>

                <Left ><Icon name='arrow-back' onPress = {this.props.goBack}/></Left>
                <Text onPress = {this.props.goBack}>Back to List</Text>

                </Button>

                <RestaurantDetail />
                </Content>



                <Footer>
                <FooterTab>
                <Button full>
                    <Text>(c) Tinker 2018</Text>
                </Button>
                </FooterTab>
                </Footer>

            </Container>
        );
    }
  }
}

const mapStateToProps = (state) => {

  return {
      businesses: state.businesses,

      showDetail: state.showDetail,

      restaurant: state.restaurant,

      isFetching: state.isFetching
  };
};
const mapDispatchToProps = (dispatch,ownPros) => {
  return {
      fetchAddress: ()=> {dispatch(actions.getLocation())},
      
      goBack: ()=> dispatch(actions.goBack())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
