import React, { Component } from 'react';

class TopHeader extends Component {
    constructor() { 
        
        super() 
 
        var today = new Date(),
    
        date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
              
        this.state = {currentDate: date}
    
      }
    render() {
        return (
            <div className = "Header">
                <h1> TO-DO-LIST ({ this.state.currentDate})</h1>
            </div>
        )
    }
}

export default TopHeader
