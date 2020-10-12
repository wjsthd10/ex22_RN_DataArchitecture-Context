import React,{Component} from 'react';
import {View, Button, Text} from 'react-native';
import {MyContext} from './Main';


export default class Third extends Component{
    render(){
        return(
            <MyContext.Consumer>
                {
                    (value)=>{
                        return(
                            <View>
                                <Text>Main Data2 : {value.data}</Text>                                
                            </View>
                        )
                    }
                }
            </MyContext.Consumer>
        )
    }
}