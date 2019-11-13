import React from 'react';
import './App.css';
import Data from './data.json';



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
          data: []
        }
  }

  componentDidMount() {
    return fetch(`https://bitbucket.org/GuestOne/goodline-test-task/raw/aa16bc87df8355deef678f4b69a2b6d9fe0f9832/frontend/data.json`)
      .then( (response) => response.json() )
      .then ((responseJson) => {
        this.setState({
          data: responseJson,
        });
        console.log(responseJson);
    })
    .catch((error) => {
      console.log(error);
      
    });
  }
  render() {
    let info = this.state.data.map((item, key) => {
      return(
        <tr key={key} style={{fontSize: '1.5vw'}}><td>{item.name}</td><td>{item.id}</td><td>{item.phone}</td><td>{item.age}</td></tr>
      )
    })
    return (
      <table>
        <thead style={{backgroundColor: '#ccc'}}>
          <tr style={{fontSize: '1.5vw'}}>
            <th style={{width: '20vw'}}>Name</th>
            <th style={{width: '40vw'}}>ID</th>
            <th style={{width: '30vw'}}>Phone</th>
            <th style={{width: '10vw'}}>Age</th>
          </tr>
        </thead>
        <tbody>
          {info}
        </tbody>
        </table>
    );
  }
}

export default App;
