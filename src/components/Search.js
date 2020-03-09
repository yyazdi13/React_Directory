import React, { Component } from "react";
import Table from './Table';
import data from '../utils/data';

export default class Search extends Component {
    state = {
        search: "",
        meep: data.users
    }

    handleSearch = (event) => {
        let value = event.target.value.replace(/ /g,'')
        value = value.charAt(0).toUpperCase() + value.slice(1);
        const employees = data.users.filter(employee => employee.name.first === value || employee.name.last === value || employee.phone === value)
        console.log(employees)
        console.log(value);
        this.setState({
            search: value,
            meep: employees
       });
    };

    handleSubmit = e => {
        this.setState({meep: data.users})
    };


    render(){
        return(
            <>
            <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
            <input onChange={this.handleSearch} className="form-control mr-sm-2 m-3" type="search" placeholder="Search" aria-label="Search"/>
            <button onClick={this.handleSubmit} className="btn btn-outline-success my-2 my-sm-0">Reset</button>
            </form>
            </nav>
             <Table>
             {this.state.meep.map(person => 
           <tr>
         <td><img src={person.image}></img></td>
         <td>{person.name.first}</td>
         <td>{person.name.last}</td>
         <td>{person.email}</td>
         <td>{person.phone}</td>
         <td>{person.dob}</td>
       </tr>)}
           </Table>
           </>
        );
    }
};