import React from 'react';
import "./App.css";
import MyApp from './components/MyApp';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';
import Page from './components/Page';

function App() {
  return (
    <div>
      <MyApp />
      <Profile />
      <ShoppingList />
      <Page />
    </div>
  );
}

export default App;



