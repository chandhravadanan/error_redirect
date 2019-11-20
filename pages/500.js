

import React, { Component } from 'react';

export default class InternalError extends Component{
    // some exception occured

    static async getInitialProps(context){
        let error = context.unknown.unknown
    }

    render(){
        return (
            <div>
                This is landing page
            </div>
        )
    }
    
}