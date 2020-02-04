import React,{useState, Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Product from '../components/product'
class FilterScreen extends Component{
   
    constructor(props){
        super(props);

        
    this.state=require('../products.json')        //this.state=new Object(stat);
        //console.log(this.state);
        
    }

   
    // const [list,setList]=useState([{}]);
/*const display=()=>{
    var data=require("../products.json");
    var id=navigation.getParam('val');
    if(id==='phones')
    {
        setList(data.phones)
    console.log(list)
    }
    //return navigation.getParam('val');


}*/
render(){

    const added=(val)=>{
        if(val===true){
            return("added to cart");
        }
        else{
            return("");
        }
    }


    const cart=(val)=>{

        var stateCopy = Object.assign({}, this.state);
    stateCopy.items[parseInt(val)-1].set = true;
    this.setState(stateCopy);
    
    
    this.props.navigation.getParam('cart')(val);
          // this.setState({list[0].set='true'});
           // this.setState({list[Math])
            }



    return(
        <View >
            
            <View style={{width:"100%",flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
         
         <Button title="Phones"  value="Phones" onPress={()=>this.props.navigation.navigate('FilterScreen',{val:"phones",cart})}/>
         <Button title="Laptops" value="Laptops"  onPress={()=>this.props.navigation.navigate('FilterScreen',{val:"laptops",cart})} />
         <Button title="Chargers" value="chargers" onPress={()=>this.props.navigation.navigate('FilterScreen',{val:"chargers",cart})}/>

        </View >

            <View style={styles.container}>

            <FlatList
            data={this.state.items.filter((val)=>val.category===this.props.navigation.getParam('val'))
        }
            renderItem={({item})=><View><TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailsScreen',{item,cart})}>
                <Product src={item.path}/>
                <Text> {added(item.set)}</Text>
                
            </TouchableOpacity></View>}
            />

            </View>
            </View>
    );
}}

const styles=StyleSheet.create({
    container:{
        padding:50
    }
})
export default FilterScreen;