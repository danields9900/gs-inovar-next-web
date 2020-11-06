import React from 'react'
import Datatable from './datatable'
import Avatars from './avatars'
import Flag from '../flag'
import data from '../../json/table-vendas.json'
import {formatNumber} from '../../functions/numbers'
import {ProgressBar} from '../progress-bars'

const GridVendas = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Cluster / Filial / Departamento',
        accessor: 'filial',
        Cell: props => {
          let {value} = {...props.value}
          return (
            <>
              <span className="ml-2">{value}</span>
            </>
          )
        }
      },
      {
        Header: 'Participação (%)',
        accessor: 'participacao',
        Cell: props => {
          let {value} = {...props.value}
          return (
            <>
              <span className="ml-2">{value}</span>
            </>
          )
        }
      },
      {
        Header: 'Vendas',
        accessor: 'vendas',
        Cell: props => {
          let {value} = {...props.value}
          return (
            <>
              <span className="ml-2">{value}</span>
            </>
          )
        }
      },
      {
        Header: 'Cres. Vendas (%)',
        accessor: 'cresVendas',
        Cell: props => {
          let {value} = {...props.value}
          return (
            <>
              <span className="ml-2">{value}</span>
            </>
          )
        }
      },
      {
        Header: 'Meta de Vendas',
        accessor: 'metaVendas',
        Cell: props => {
          let {value} = {...props.value}
          return (
            <>
              <span className="ml-2">{value}</span>
            </>
          )
        }
      },
      {
        Header: 'R/M Vendas (%)',
        accessor: 'rmVendas',
        Cell: props => {
          let {value} = {...props.value}
          return (
            <>
              <span className="ml-2">{value}</span>
            </>
          )
        }
      }
    ],
    []
  )
  const items = React.useMemo(() => data, [])
  return <Datatable columns={columns} data={items} />
}

export default GridVendas