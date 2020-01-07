import React from 'react';
import './App.css';
//import Body from './components/body.js';
import TodoList from './components/TodoList';

const styleTop = {
  color: 'pink',
  fontSize: "100px"

}



class App extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (

      <div className="container justify-content-center">
        <div className="row justify-content-center">
          <h1 style={styleTop}>todos</h1>
        </div>
        <TodoList />
      </div>
    )
  }
}

export default App;
