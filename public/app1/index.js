import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import config from '../aws-exports.js'
Amplify.configure(config);



const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


// export function AppWithCallbackAfterRender() {
//   useEffect(() => {
//     console.log('rendered');
//   });

//   return (
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>

//   )
// }