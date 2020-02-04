import React, { useState, Component } from 'react';
import {View,Text,StyleSheet,Button,Picker,Switch} from 'react-native';
//import {Dropdown} from 'react-native-material-dropdown';
import Product from '../components/product';
import { Dropdown } from 'react-native-material-dropdown';
//import { Switch } from 'react-native-switch';
class DetailsScreen extends Component{

  constructor(props)
  {
    super(props);
    this.state={rate:"/-",price:1,cur:"rupee"};
  }

//const [cur,setCur]=useState('Rupee');  




render(){

  

  const currency=(val)=>{
    if(val==='Dollar')
    {
      console.log(val);
    fetch("https://api.exchangeratesapi.io/latest?base=INR").
    then(response=>response.json()).
    then(responseJson=>this.setState({rate:"$",price:responseJson.rates.USD,cur:"dollar"})).catch(error=>console.log(error));
    //this.setState({cur:"dollar"});
    console.log(this.state.price);
    }

    else
    {
      
    fetch("https://api.exchangeratesapi.io/latest?base=INR").
    then(response=>response.json()).
    then(responseJson=>this.setState({rate:"/-",price:responseJson.rates.INR,cur:"rupee"})).catch(error=>console.log(error));
    //this.setState({cur:"rupee"});
    console.log(this.state.price);
    }


  }


return (

<View >




<Dropdown


data={[{value:"Rupee"},{value:"Dollar"}]}
defaultValue="Rupee"
onChangeText={currency}
/>
<Product src={this.props.navigation.getParam('item').path}/>
<Text>{this.props.navigation.getParam('item').title}</Text>
<Text>{Math.round(this.state.price*this.props.navigation.getParam('item').price,2)}{this.state.rate}</Text>
<Text>{this.props.navigation.getParam('item').id}</Text>
<Button title="ADD TO CART" onPress={()=>this.props.navigation.getParam('cart')(this.props.navigation.getParam('item').id)}/>
</View>
)
}
}
export default DetailsScreen;