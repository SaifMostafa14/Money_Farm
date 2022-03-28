import './App.css';
import * as ReactBootStrap from "react-bootstrap";


import React, { PureComponent } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
const data1 = [
  {
    name: 'jan',
    
    pv: 1111,
    amt: 2400,
  },
  {
    name: 'feb',
    
    pv: 2222,
    amt: 2210,
  },
  {
    name: 'march',
    
    pv: 3333,
    amt: 2290,
  },
  {
    name: 'april',
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'may',
    
    pv: 2874,
    amt: 2400,
  },
  {
    name: 'jun',

    pv: 8742,
    amt: 2210,
  },
  {
    name: 'july',
    pv: 9222,
    amt: 2290,
  },
  {
    name: 'augus',
    pv: 1332,
    amt: 2290,
  },
  {
    name: 'sep',
    pv: 3833,
    amt: 2400,
  },
  {
    name: 'octuber',
    pv: 7777,
    amt: 2210,
  },
  {
    name: 'novmeber',
    pv: 8888,
    amt: 2290,
  },
  {
    name: 'descember',
    pv: 9999,
    amt: 2290,
  },
];

export default function bara(){

    return (
      
      <div id='css'>
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
    

    <div id="card"> 

    <p> Current Spending</p>

    <h1>$5432.12</h1>

    



    </div>
    
  </div>
  <div id='barr'>
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

      <div id='line'>
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          width={500}
          height={300}
          data={data1}
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
          <Line type="monotone" dataKey="pv" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>



      </div>
      </div>
    );
  }
