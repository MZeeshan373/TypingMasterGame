import React, { Component } from 'react';
import './App.css';
import Content from './Components/content';
import store from './redux'
import { Provider} from 'react-redux'



class App extends Component {

  render() {
    return (
      <Provider store={store}>

        <div>
          <Content/>
        </div>
      </Provider>
      );
  }
}

export default App;
