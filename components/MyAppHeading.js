import React from 'react';
import { StyleSheet, Text } from 'react-native';

class MyAppHeading extends React.Component{
    
    styles = StyleSheet.create({
        heading1:{
            fontSize:30,
            fontWeight:'bold',
            color:'#00000d',
            paddingBottom:15,
        },

        heading2:{
            fontSize:20,
            fontWeight:'bold',
            color:'#000',
            paddingBottom:15,
        },

        heading3:{
            fontSize:15,
            color:'#8E8738',
            padding:5,
            alignSelf:'flex-start',
            paddingLeft:5
        }
    });



    render(){      
        return(
            <Text style={this.evalHeadingStyle()}>
                {this.props.children}
            </Text>
        );
    }

    evalHeadingStyle(){
        // console.log('c1:' + this.props.headingStyle);

        switch(this.props.headingStyle){
            case 'h1':
                return this.styles.heading1;
            case 'h2':
                return this.styles.heading2;
            case 'h3':
                return this.styles.heading3;
            default:
                return this.styles.heading1;
        }
    }
}
export default MyAppHeading;