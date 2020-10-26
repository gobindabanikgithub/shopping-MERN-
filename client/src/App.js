import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/Shopping_List';
import ItemModal from './components/itemModal';
import { Provider} from 'react-redux';
import { Container } from 'reactstrap';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar/>
          <Container>
            <ItemModal/>
            <ShoppingList/>
          </Container>
        </div>
      </Provider>
    );
  }
} 

export default App;
