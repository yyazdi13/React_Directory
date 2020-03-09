import React, {Component} from 'react';

export default class Nav extends Component {
    render(){
        return (
            <div>
                <div className="jumbotron" style={{background: "darksalmon"}}>
                    <h1 className="display-4">Employee</h1>
                    <p className="lead">Look up an employee by first name, last name, or phone number</p>
                    <hr className="my-4"/>
                    <p>Press 'Reset' to go back to a list of ALL employees</p>
                </div>
            </div>
        );
    }
}

