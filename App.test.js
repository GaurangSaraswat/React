import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Header';
import Section from './Section';
import MonthlyIncomeCharts from './MonthlyIncomeCharts';
import MonthlyPieChart from './MonthlyPieChart';
import MyTable from './MyTable';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Bar } from 'react-chartjs-2';
test('renders learn react link', () => {
  render(<App />);
  render(<Header />);
  render(<Section />);
  render(<MonthlyIncomeCharts />);
  render(<MonthlyPieChart />),
  render(<MyTable />)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
