import React from 'react'
import Assignment from './Assignment'
export default class AssignmentFrame extends React.Component {

    constructor(){
        super()
        this.state = {
            groupObj: null
        }
    }


    render(){
      return (
                <>
                <div className="field4">
                    <h2>Assignments</h2>
                    <Assignment id = {this.props.id} ></Assignment>
                </div>
                </>
      )
    }  
    
}
