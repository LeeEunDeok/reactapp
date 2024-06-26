import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import App from './App';

// ch03.react_component 폴더에 들어 있는 App_component01 파일을 불러오겠습니다.
// import App from './ch03.react_component/App_component01';
// import App from './ch06.member_crud/members02/App'
import App from './ch07.react_with_spring/GetSpring03';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
