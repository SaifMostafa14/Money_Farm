import './Spending.css';
import * as ReactBootStrap from "react-bootstrap";


import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'bills',
    uv: 4000,
    pv: 6000,
    amt: 2400,
  },
  {
    name: 'shopping',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'subscretion',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'entertainment',
    uv: 2000,
    pv: 4321,
    amt: 2290,
  },
];


const data2 = [
  { name: 'Group A', value: 150 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 180 },
  { name: 'Group D', value: 400 },
  { name: 'Group E', value: 200 },
];


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', ];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default function bara(){

    return (
      
      <div id='spending-css'>
      <div>
    <ReactBootStrap.Navbar bg="success" variant="dark">
      <ReactBootStrap.Container>
      <ReactBootStrap.Navbar.Brand href="#home">GreenPocket</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Nav className="me-auto">
        <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#features">logout</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
      </ReactBootStrap.Container>
    </ReactBootStrap.Navbar>
    <br />
    

    <div id="spending-card"> 

    <p id="spending-p"> Current Spending</p>

    <h1 id ="spending-h1">$5432.12</h1>

    



    </div>
    
  </div>
  <div id='spending-barr'>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="green" background={{ fill: 'gray' }} />
        </BarChart>
      </ResponsiveContainer>
      </div>


      <div id='spending-pie'>
      <ResponsiveContainer width="95%" aspect={2}>
        <PieChart width={100} height={100}>
          <Pie
            data={data2}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={250}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>


      </div>
      </div>
    );
  }
