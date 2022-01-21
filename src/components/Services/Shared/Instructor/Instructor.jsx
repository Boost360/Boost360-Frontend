import React from 'react'
import './Instructor.css'
import Table from '../Table/Table'

function Coach({data, badge}) {
  return (
    <div className='instructor'>
        <div className="top_container">
            <div>
                {data.name && <h1>{data.name}</h1>}
                {data.role && <p>{data.role}</p>}
                <hr align="left"/>
            </div>
            {data.badge && <img src={badge} alt={badge} />}
        </div>

        {data.location && 
          <p className='location'>
            <span>{data.locationLabel}</span>
            <span>{data.location}</span>
          </p>
        }
        {data.description && <p className="description">{data.description}</p>}
        {data.priceTable && <Table header={data.priceTable.header} rows={data.priceTable.rows}></Table>}
    </div>
  )
}

export default Coach;
