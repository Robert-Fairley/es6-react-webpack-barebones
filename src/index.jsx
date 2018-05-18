/** Import React and ReactDOM so that we can mount our application */
import React from 'react'
import ReactDOM from 'react-dom'

/** Import our Application */
import Application from './App'

/** Get the root element */
const APP_ROOT = document.querySelector('#root');

/** Mount the application to the root element */
ReactDOM.render(<Application/>, APP_ROOT);
