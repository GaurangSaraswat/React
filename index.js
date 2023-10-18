import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Section from './Section';
import 'font-awesome/css/font-awesome.min.css';
import MonthlyIncomeCharts from './MonthlyIncomeCharts';
import MonthlyPieChart from './MonthlyPieChart';
import MyTable from './MyTable';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Section />
    <div className='row'>
      <div className='col-9'>
        <MonthlyIncomeCharts />
    </div>
    <div className='col-3'>
        <MonthlyPieChart />
    </div>
    </div>
    <MyTable />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
