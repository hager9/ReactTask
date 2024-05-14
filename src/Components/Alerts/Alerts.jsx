import React, { useContext, useState } from 'react'
import Table from '../Table/Table'
import { dataContext } from '../DataContext'
import Filters from '../Filters/Filters'
import SidebarComponent from '../SidebarComponent/SidebarComponent'


export default function Alerts() {

    const [search , setSearch] = useState('');
    const { tableData} = useContext(dataContext);
    const [showFilters, setShowFilters] = useState(false);

    function openFilters(){
      setShowFilters(true);
    }
    

  return <>
{showFilters? <Filters setShowFilters={setShowFilters} showFilters={showFilters}/> : <div className='p-0 m-0'>
  <SidebarComponent/>
  <div className='py-3 ps-5 pe-2 pe-md-4 ms-3 min-vh-100'>
  <header className='d-flex justify-content-between align-items-center'>
    <h1 className='font-bold text-uppercase head'>alerts</h1>
    <div class="search-bar">
      <label className='p-0 m-0' htmlFor='search'><i class="fa-solid fa-magnifying-glass"></i></label>
            
            <input
              type="search"
              name="search"
              id='search'
              placeholder="Search By..."
              spellcheck="false"
              autocomplete="off"
              onChange={(e)=>{setSearch(e.target.value)}}
            />
          </div>
          <i onClick={openFilters} className='fa-solid fa-bell bellIcon pointer'></i>
          <button className='filterBtn' onClick={openFilters}>Filter</button>
  </header>
  <div className="container my-4">
  {tableData.filter((item) =>{
            return search.toLowerCase() === ''? item : item.name.toLowerCase().includes(search)
}).map((item, index)=>{return <Table tableRow={item} index={index} />})}
  </div>
  </div>
  </div>}

  
  
  </>
}
