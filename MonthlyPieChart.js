import React, { useEffect} from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as echarts from 'echarts';


const MonthlyPieChart = () => {
  useEffect(() => {
    const chartContainer = document.getElementById('echarts-donut-chart');

    const myChart = echarts.init(chartContainer);

    const options = {
      title: {
        text: '65%',
        subtext: 'Total new customers',
        x: 'center',
        y: 'center',
        textstyle: {
            fontsize: 16,
            fontWeight: 'bold',
            color: '#333',
        },
      },  
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      series: [
        {
          name: 'Earnings',
          type: 'pie',
          radius: ['40%', '70%'], // Adjust the inner and outer radii here
          center: ['50%', '50%'],
          data: [
            { value: 65, name: 'Total new customers' },
            { value: 35, name: 'Other' },
          ],
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}: {d}%',
          },
        },
      ],
    };

    myChart.setOption(options);
  }, []);

  return <div className='card'>
    <h4>Customers</h4>
    <p>Customers that buy products</p>
    <div id="echarts-donut-chart" style={{ width: '100%', height: '300px' }}></div></div>;
};

export default MonthlyPieChart