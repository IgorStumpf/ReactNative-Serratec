import * as React from "react";
import { Text, View, FlatList, TouchableHighlight } from "react-native";
import { api } from "../api";
import axios from "axios";


function listCliente (){



    constructor(props){
        super(props);
        this.state={
            cliente:[]
        }
    }

   async ComponentDidMount(){
        const response = await api.get('cliente');
        this.setState({
          cliente:response.data  
        })
    }



    return(

        <View style={styles.container}>
            <FlatList 
                data={this.state,cliente}
                keyExtractor={item => item.id.toString()}
                renderItem={({item})=><cliente data={item}/>}
            />
        </View>


    );
}
extends default listCliente;

const  styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        margin:50,
    },
});






//*************************************************para anexar e exibir  */
// return (
//     <View>
//             <text> {this.props.data.nome}</Text>
//     </View>
// )




