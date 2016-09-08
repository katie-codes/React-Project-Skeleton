import React from 'react';
import ReactDOM from 'react-dom';
import style from '../styles/main.scss';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Word bank here</h1>
        <p>Testing webpack configuration</p>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);