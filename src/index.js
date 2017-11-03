import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './books.json';
import Bookstore from './ui/components/Bookstore';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Bookstore />, document.getElementById('root'));
registerServiceWorker();
