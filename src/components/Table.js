import React, { Component } from "react";
import '../utils/data';

export default class Table extends Component {
    render(props){
        return (
        <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Picture</th>
                <th scope="col">first name</th>
                <th scope="col">last name</th>
                <th scope="col">email</th>
                <th scope="col">phone</th>
                <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
            {this.props.children}
            </tbody>
            </table>
        </div>)
    }
}
