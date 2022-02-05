import { useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './Columns'
import './table.css'

function Table({passengers}) {

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => passengers, [])

  const tableInstance = useTable({
    columns,
    data: passengers
  })

  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <table {...getTableProps()}>
      <thead > 
        {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}> 
        {
          headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}> {column.render('Header')}</th>
          ))
        }
        </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })} 
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table
