//
//* Project Name: finalApp
//* Author: BO YANG (Tinker)
//* Data: 2018-01-10
//

import { GOBACK_ACTION, FETCH_REQUEST, FETCH_DATA_SUCESS, SELECT_RESTAURANT, SHOW_DETAIL } from "./actions";


export default function reducers(state, action) {

    let newState = Object.assign({}, state);



    switch(action.type) {


        case FETCH_REQUEST:
            newState.isFetching = true;
            break;



        case SELECT_RESTAURANT:
            newState.showDetail = true;

            newState.restaurant = action.payload;
            break;



        case SHOW_DETAIL:
            newState.showDetail = true;
            break;


        case GOBACK_ACTION:
            newState.isFetching=false;
            newState.showDetail = false;
            break;


        case FETCH_DATA_SUCESS:
            newState.isFetching=false;
            newState.showDetail = false;

            newState.restaurants = Object.assign({},action.data);
            
            newState.businesses = [...newState.restaurants.businesses];
            newState.locatoin = "List";
            break;

        default:



            return state;
    }




    return newState;
}
