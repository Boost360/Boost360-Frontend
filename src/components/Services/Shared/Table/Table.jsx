import React from 'react'
import './Table.css'

function Table({header, rows}) {
  return (
      <table className='bpTable'>
        <tr>
          {header.map((h, i) => <th>{h}</th>)}
        </tr>
        {rows.map((row, i) => 
            <tr>
                {row.map((d,i) => <td>{d}</td>)}
            </tr>
        )}
      </table>
  );
}

export default Table;
