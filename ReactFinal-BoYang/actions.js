//
//* Project Name: finalApp
//* Author: BO YANG (Tinker)
//* Data: 2018-01-10
//

import axios from "axios";

export function goBack(){
	return{
		type:GOBACK_ACTION,
	}
}


export function fetchRequest() {
    return {
        type: FETCH_REQUEST
    };
}


export function showDetailRestaurant() {
    return {
		type: SHOW_DETAIL,
    };
}


export function fetchDataSuccess(data){
	return {
		type: FETCH_DATA_SUCESS,
		data:data
	};
}


export function selectRestaurant(data) {
    return {
		type: SELECT_RESTAURANT,
		payload:data
    };
}


export function fetchData(postion){

	return(dispatch)=> {

		let exactLocation = "latitude="+postion.latitude+"&longitude="+postion.longitude;
		let url = "https://api.yelp.com/v3/businesses/search?" + exactLocation;

		dispatch(fetchRequest());

		axios.get(url,{
			headers: {
			"Authorization": "Bearer "+ "f-dh-VEE-rh3UJnFgb2O6iQJXiEizz8UeDo6hSaUY7uDWJMn7W_9Vf-21If0mqblgRW8_RwLL5I1Hg8-1Vwvt64z-dFdwwozodu-t5HDnaJVjl6zRcqDfbQXMzpJWnYx",
		  }}
		).then((response) =>{
			return response;
		}).then((response)=> {
			let restaurantdata = response.data;
			dispatch(fetchDataSuccess(restaurantdata));
		}).catch(function (error) {
			console.log(error);
		  });;
    };
}




export function getLocation(){
	return (dispatch) =>{

		var options = {
			enableHighAccuracy: true,
			timeout: 6000,
			maximumAge: 0
		  };

		const geolocation = navigator.geolocation;

		geolocation.getCurrentPosition((
			position) => {
            dispatch( fetchData(position.coords));
		},
		()=>{return},
		options);
	}
}

export const FETCH_REQUEST = "FETCH_REQUEST";

export const GOBACK_ACTION = "GOBACK_ACTION";

export const FETCH_DATA_SUCESS = "FETCH_DATA_SUCESS";



export const GET_LOCATION = "GET_LOCATION";

export const SHOW_DETAIL = "SHOW_DETAIL";

export const SELECT_RESTAURANT = "SELECT_RESTAURANT";
