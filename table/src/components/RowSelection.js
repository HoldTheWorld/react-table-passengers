import { useMemo } from 'react'
import { useTable, useSortBy, useRowSelect, loopHooks } from 'react-table'
import { COLUMNS, GROUPED_COLUMNS } from './Columns'
import { Checkbox } from './Checkbox'
import './table.css'

function RowSelection({passengers}) {

  const columns = useMemo(() => GROUPED_COLUMNS, [])
  const data = useMemo(() => passengers, [])

  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable({
    columns,
    data: passengers
  },
  useSortBy, 
  useRowSelect,
  (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [
        {
          id: 'selection',
          Header: ({getToggleAllRowsSelectedProps}) => 
           ( <Checkbox {...getToggleAllRowsSelectedProps()}/> ),
          Cell: ({row}) => 
           ( <Checkbox {...row.getToggleRowSelectedProps()}/>)
        },
        ...columns
      ]
    })
  }
  
  )

  return (
    <>
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
    <div>
      {JSON.stringify(
        {
          selectedFlatRows: selectedFlatRows.map((row) => row.original),
        },
        null,
        2
      )}
    </div>
    </>
  )
}

export default RowSelection
