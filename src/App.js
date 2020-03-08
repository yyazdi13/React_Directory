import React, { Component, Children } from 'react';
import Table from './components/Table';
import data from "./utils/data";


class App extends Component{
  render(props){
  return (
    <div className="App">
      <Table>
        {data.users.map(person => 
      <tr>
    <td>{person.name.first}</td>
    <td>{person.name.last}</td>
    <td>{person.email}</td>
    <td>{person.phone}</td>
    <td>{person.dob}</td>
  </tr>)}
      </Table>
    </div>
  )
}
}

export default App;
