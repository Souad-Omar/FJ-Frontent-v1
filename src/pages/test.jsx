import React, { Component } from 'react';
class Test extends Component {
    state = { 
        name:"Souad",
     } ;
    render() { 
        return (
        <span>{this.state.name}</span>
        );
    }
}
 
export default Test;