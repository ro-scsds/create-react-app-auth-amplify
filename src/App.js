import React, { Component } from 'react';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';



Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          <iframe width="1020" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiYjM2ZjI4YmUtZWE2YS00ZmQ5LWJiMGUtNjI0MzJkNGI5NzgyIiwidCI6ImJhZmIzMmE2LTRjYzUtNDgwMy04ZmQ3LTY1NWUwMzMzMzM0NyIsImMiOjZ9" frameborder="0" allowFullScreen="true"></iframe>
          </p>
          
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
