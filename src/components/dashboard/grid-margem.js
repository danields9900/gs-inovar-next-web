import React from 'react'
import Datatable from './datatable'
import Avatars from './avatars'
import Flag from '../flag'
import data from '../../json/table-margem.json'
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
        Header: 'Margem PDV',
        accessor: 'margemPdv',
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
        Header: 'Mrg PDV s/VL (%)',
        accessor: 'margemPdvVl',
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
        Header: 'Mrg PDV s/VB (%)',
        accessor: 'margemPdvVb',
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
        Header: 'Meta de Margem',
        accessor: 'metaMargem',
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
        Header: 'R/M Margem (%)',
        accessor: 'rmMargem',
        Cell: props => {
          let {value} = {...props.value}
          return (
            <>
              <span className="ml-2">{value}</span>
            </>
          )
        }
      },
    ],
    []
  )
  const items = React.useMemo(() => data, [])
  return <Datatable columns={columns} data={items} />
}

export default GridVendas