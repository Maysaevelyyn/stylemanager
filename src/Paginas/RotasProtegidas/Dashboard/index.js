import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import BarChart from './BarChart';
import CardBasico from '../../../componentes/CardBasico';

// Dados fictícios para o gráfico
const data = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 },
  { name: 'Jul', uv: 3490, pv: 4300 },
];

function Dashboard() {
  return (
    <div className="container pt-5 vh-100 align-items-center justify-content-center z-dash">
      <h2>Dashboard</h2>
      <div className="row pt-5">
        <div className="col-md-3 mb-4">
          <CardBasico
            title={' Receita'}
            colorTitle={'success'}
            body={'R$ 3.500.32'}
          ></CardBasico>
        </div>
        <div className="col-md-3 mb-4">
          <CardBasico
            title={'Despesa'}
            colorTitle={'danger'}
            body={'R$ 1.300.72'}
          ></CardBasico>
        </div>
        <div className="col-md-3 mb-4">
          <CardBasico
            title={'Agendamentos'}
            body={'72'}
            colorTitle={'success'}
          ></CardBasico>
        </div>
        <div className="col-md-3 mb-4">
          <CardBasico
            title={'Atendimentos'}
            body={'54'}
            colorTitle={'success'}
          ></CardBasico>
        </div>

        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-body">
              <h4>Faturamento Mensal</h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h4>Cortes Mensais</h4>
              <BarChart />
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h4>Atendimentos</h4>
              <BarChart />
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h4>Agendamentos</h4>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
