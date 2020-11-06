import React from 'react'
import {
  ResponsiveContainer,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import {getColor} from '../../functions/colors'

const CustomTooltip = ({active, payload, label}) => {
  if (active) {
    return (
      <div className="bg-white text-grey-900 dark:bg-grey-800 dark:text-white shadow-lg rounded-lg p-2 text-xs">
        <div>
          <span className="font-bold">{payload[0].name}:</span>{' '}
          <span className="font-normal">{payload[0].value}</span>
        </div>
      </div>
    )
  }
  return null
}

export const Pie1 = () => {
  const data = [
    {name: '0019 - 01 - Villa Lobos', value: 400},
    {name: '0027 - 02 - Osasco', value: 300},
    {name: '0043 - 03 - Brooklin', value: 200}
  ]
  let colors = [
    getColor('bg-red-500'),
    getColor('bg-green-500'),
    getColor('bg-blue-500')
  ]

  return (
    <div style={{width: '100%', height: 320}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
