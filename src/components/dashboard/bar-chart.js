import React from 'react'
import {getColor} from '../../functions/colors'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import {random} from '../../functions/numbers'

const CustomTooltip = ({active, payload, label}) => {
  if (active) {
    let {name, vendas, conversions} = {...payload[0].payload}
    return (
      <div className="bg-white text-grey-900 dark:bg-grey-800 dark:text-white shadow-lg rounded-lg p-2 text-xs">
        <div className="font-bold">{name}</div>
        <div>
          <span className="font-bold">Vendas:</span>{' '}
          <span className="font-normal">{vendas}</span>
        </div>
        
      </div>
    )
  }
  return null
}

export const Bar1 = () => {
  let colors = [
    {dataKey: 'vendas', fill: getColor('bg-red-600')}
  ]
  const labels = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ]
  const data = Array.from(Array(12).keys()).map(i => {
    return {
      name: labels[i],
      vendas: random(100, 200)
    }
  })

  return (
    <div style={{width: '100%', height: 320}}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10
          }}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} width={30} />
          <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}}/> 
          {colors.map((color, i) => (
            <Bar
              key={i}
              barSize={30}
              //stackId="sales"
              dataKey={color.dataKey}
              fill={color.fill}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

