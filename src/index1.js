import React from 'react'
import {render} from 'react-dom'
import './index.css'
import './books.json'
import Bookstore from './ui/components/Bookstore'
import registerServiceWorker from './registerServiceWorker'
import reducer from './reducer'

const store = createStore(reducer)

render(
    <Provider store={store}>
        <Bookstore/>
    </Provider>,
    document.getElementById('root'),
    registerServiceWorker()
)
