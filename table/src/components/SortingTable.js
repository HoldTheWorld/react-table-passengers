import { useMemo } from 'react'
import { useTable, useSortBy } from 'react-table'
import { COLUMNS, GROUPED_COLUMNS } from './Columns'
import './table.css'

function SortingTable({passengers}) {

  const columns = useMemo(() => GROUPED_COLUMNS, [])
  const data = useMemo(() => passengers, [])

  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: passengers
  },
  useSortBy)

  return (
    <table {...getTableProps()}>
      <thead > 
        {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}> 
        {
          headerGroup.headers.map(column => (
            <th {...column.getHeaderProps(column.getSortByToggleProps())}> 
            {column.render('Header')}
            {/* <span>
              {column.isSorted ? (column.idSortedDesc ? '&darr;' : '&harr;') : ''}
            </span> */}
            </th>
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

export default SortingTable
