import React from 'react'

export default function Table({tableRow , index}) {
    
            return <details key={index} className=''>
                     <summary className=''>
                <div className="row tableRow">
                <div className="col-3 tabelCell">
                        <span className='tableIcons'><i class="fa-solid fa-file-invoice-dollar"></i></span>{tableRow.name}
                </div>
                <div className="col-3 tabelCell"><span className='tableIcons'><i class="fa-regular fa-file-lines"></i></span>{tableRow.number}</div>
                <div className={tableRow.color? "col-3 tabelCell textGreen" : "col-3 tabelCell textOrange"}><span className='tableIcons textWhite'><i class="fa-solid fa-chart-line"></i></span>{tableRow.percentage} %</div>
                <div className="col-3 tabelCell"><span className='tableIcons'><i class="fa-brands fa-square-letterboxd"></i></span>{tableRow.risk}</div>
            </div>
            </summary> 
            <p className='m-0 mb-2 py-2 px-2'>{tableRow.text}</p>
            </details>
            
}

