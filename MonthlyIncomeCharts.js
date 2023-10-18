import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart,Bar, XAxis,YAxis,CartesianGrid,Tooltip,Legend, ResponsiveContainer } from 'recharts';


const MonthlyIncomeChart = () => {
    const data = [
        {month: 'January', income: 900},
        {month: 'Feburary', income: 1100},
        {month: 'March', income: 1200},
        {month: 'April', income: 1400},
        {month: 'May', income: 1700},
        {month: 'June', income: 1200},
        {month: 'July', income: 1000},
        {month: 'August', income: 1300},
        {month: 'September', income: 1500},
        {month: 'October', income: 1000},
        {month: 'November', income: 1800},
        {month: 'December', income: 1100},
    ];
    return(
        <div className='card'  style={{marginLeft: '330px'}}>
            
                <h3>Overview</h3>
            <p>Monthly Earning</p>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="month"/>
                <YAxis/>
                <Tooltip/>
                <Bar dataKey="income" fill='blue' />
                <Legend/>
            </BarChart>
        </ResponsiveContainer>
                
        </div>
    );
};

export default MonthlyIncomeChart