import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/global';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: "transaction 1", 
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: new Date()
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>
);
