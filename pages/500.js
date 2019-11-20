

import React, { Component } from 'react';

export default class InternalError extends Component (props){
    // some exception occured
    render(){
        throw new Error('MyError')
        return (
            <div>
                This is landing page
            </div>
        )
    }
    
}