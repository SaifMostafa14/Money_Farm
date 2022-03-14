import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { LineChart, Line } from 'recharts';


function App() {

  const dataCategories = [
    { name: 'Groceries', value: 150 },
    { name: 'Gas', value: 200 },
    { name: 'Uilities', value: 275 },
    { name: 'Subscriptions', value: 50 },
    
  ];
  
  const dataTimeBreakdown = [
    { name: 'week', value: 50 },
    { name: 'month', value: 400 },
    { name: 'year', value: 5679 },
    
  ];

  const dataForTheYear= [
    {
      name: 'Jan',
      thisYear: 400,
      lastYear: 300,
      amt: 2400,
    },
    {
      name: 'Feb',
      thisYear: 200,
      lastYear: 400,
      amt: 2210,
    },
    {
      name: 'March',
      thisYear: 600,
      lastYear: 550,
      amt: 2290,
    },
  ];

  class CustomizedLabel extends PureComponent {
    render() {
      const { x, y, stroke, value } = this.props;
  
      return (
        <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
          {value}
        </text>
      );
    }
  }
  
  class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, stroke, payload } = this.props;
  
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
            {payload.value}
          </text>
        </g>
      );
    }
  }
  
  return (
    <div className="App">
      <h1> Chart code from Recharts </h1>
      <h2> Category Temp</h2>
      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={dataCategories}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>

        <h2> Spending by time temp</h2>
        <BarChart
          width={500}
          height={300}
          data={dataTimeBreakdown}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
   
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
        
        <h2> Compare spending</h2>
        <LineChart
          width={500}
          height={300}
          data={dataForTheYear}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="thisYear" stroke="#8884d8" label={<CustomizedLabel />} />
          <Line type="monotone" dataKey="lastYear" stroke="#82ca9d" />
        </LineChart>
    </div>
  );
}

export default App;
