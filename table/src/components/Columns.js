export const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'FIRST_NAME',
    accessor: 'first_name'
  },
  {
    Header: 'LAST_NAME',
    accessor: 'last_name'
  },
  {
    Header: 'BDATE',
    accessor: 'bdate'
  },
  {
    Header: 'GENDER',
    accessor: 'gender'
  },
  {
    Header: 'BLOOD',
    accessor: 'blood'
  },
  {
    Header: 'CHILDREN',
    accessor: 'children'
  }
  
]

export const GROUPED_COLUMNS = [
  {
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'Main Info',
    columns: [
      {
        Header: 'FIRST_NAME',
        accessor: 'first_name'
      },
      {
        Header: 'LAST_NAME',
        accessor: 'last_name'
      },
      {
        Header: 'Gender',
        accessor: 'gender'
      },
    ]
  },

  {
    Header: 'Additional Info',
    columns: [
      {
        Header: 'BLOOD',
        accessor: 'blood'
      },
      {
        Header: 'CHILDREN',
        accessor: 'children'
      }
    ]
  }
]
