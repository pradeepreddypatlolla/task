import React ,{useState, Component} from 'react';
import {View,Text,StyleSheet, FlatList, TouchableOpacity,Button} from 'react-native';
import Product from '../components/product' ;

class  ProductScreen extends Component{
state=null;

    constructor(props){
        super(props);
     //   this.state={list:[{id:'1',title:"Samsung s7" ,price:50000,set:'false',path:'https://www.91-cdn.com/pricebaba-images/images/product/mobile/57589/samsung-galaxy-s10-raw-336055.jpg'},
       // {id:'2',title:"Samsung s3",price:10000,set:'false',path:'https://static.toiimg.com/thumb/msid-64746453,width-240,resizemode-4,imgv-2/Samsung-Galaxy-J2-Pro-2019.jpg'}]}

        this.state=require('../products.json');
    }

//const [list,setList]=useState([{id:'1',title:"Samsung s7" ,price:50000,set:'false',path:'https://www.91-cdn.com/pricebaba-images/images/product/mobile/57589/samsung-galaxy-s10-raw-336055.jpg'},{id:'2',title:"Samsung s3",price:10000,set:'false',path:'https://static.toiimg.com/thumb/msid-64746453,width-240,resizemode-4,imgv-2/Samsung-Galaxy-J2-Pro-2019.jpg'}]);
 


render(){




    const added=(val)=>{
        if(val===true){
            return("added to cart");
        }
        else{
            return("");
        }
    }
    
//console.log(this.state.list[0].set)
   const cart=(val)=>{

    var stateCopy = Object.assign({}, this.state);
stateCopy.items[parseInt(val)-1].set = true;
this.setState(stateCopy);


      // this.setState({list[0].set='true'});
       // this.setState({list[Math])
        }
//console.log(this.state.list[0].set);
    return(
        <View >

<View style={{width:"100%",flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
         
         <Button title="Phones"  value="Phones" onPress={()=>this.props.navigation.navigate('FilterScreen',{val:"phones",cart})}/>
         <Button title="Laptops" value="Laptops"  onPress={()=>this.props.navigation.navigate('FilterScreen',{val:"laptops",cart})} />
         <Button title="Chargers" value="chargers" onPress={()=>this.props.navigation.navigate('FilterScreen',{val:"chargers",cart})}/>

        </View>

          <View style={styles.container}>

            <FlatList 
             data={this.state.items}
             renderItem={({item})=>  <TouchableOpacity  style={styles.box} onPress={()=>this.props.navigation.navigate('DetailsScreen',{item,cart})} >
                 <Product src={item.path}></Product>
    <Text> {added(item.set)}</Text>
                 
             </TouchableOpacity>}
            />
            </View>
            </View>
    );

    }

}
const styles=StyleSheet.create({
    container:{
        padding:50,
        width:'100%',

    },
    box:{
        padding:50,
        borderWidth:1
    }
})
export default ProductScreen;