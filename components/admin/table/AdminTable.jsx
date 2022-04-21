import { useTable, useSortBy } from 'react-table'
import PropTypes from 'prop-types'

export default function AdminTable({ columns, data}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useSortBy)

    return (
        <table
            className='border-collapse table-auto w-full text-sm'
            {...getTableProps()}
            >
            <thead>
                {headerGroups.map((headerGroup, headerGroupKey) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupKey}>
                    {headerGroup.headers.map((column, headerColumnKey) => (
                    <th
                        className='border-b font-medium py-4 px-8 text-slate-600 text-left border-slate-300'
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        key={headerColumnKey}
                    >
                        {column.render('Header')}
                        <span>
                            {column.isSorted
                            ? column.isSortedDesc
                                ? ' 🔽'
                                : ' 🔼'
                            : ''}
                        </span>
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody
                className='bg-slate-100'
                {...getTableBodyProps()}
                >
                {rows.map((row, rowKey) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()} key={rowKey}>
                    {row.cells.map((cell, cellKey) => {
                        return (
                        <td
                            className='border-b border-slate-200 py-4 px-8 text-slate-700'
                            {...cell.getCellProps()}
                            key={cellKey}
                        >
                            {cell.render('Cell')}
                        </td>
                        )
                    })}
                    </tr>
                )
                })}
            </tbody>
        </table>
    )
}

AdminTable.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
}