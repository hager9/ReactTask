import React from 'react'

export default function Filters({setShowFilters}) {
  function close(){
    setShowFilters(false)
  }
  return <>
    <div className=' filters'>
      <div className='closeIcon d-flex justify-content-end'><i onClick={close} class="fa-solid fa-xmark pointer px-2 pb-1"></i></div>
      <h3 className='font-semiBold text-center pb-4 pt-1'>Filters</h3>
      <div className='d-flex flex-column justify-content-between align-items-center p-2'>
          <div className='sectionsColor state p-2 w-100'>
            <p className='fisrtText'>Real Estate <i class="fa-solid fa-xmark ms-1"></i></p>
          </div>
          <div className='sectionsColor px-3 py-3 w-100'>
          <div className='d-flex justify-content-between align-items-center secondSection'>
          <p className='p-0 m-0'>$TICKER</p>
          <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          
           <p className='font-bold mt-4 mb-3'><i class="fa-solid fa-caret-down me-2"></i> Industry</p>
           <div className="container">
           <div className="row ps-2">
            <div className="col-sm-6 col-border">
              <p><i class="fa-regular fa-heart me-2"></i> Health Care</p>
              <p><i class="fa-solid fa-recycle me-2"></i> Materials</p>
              <p><i class="fa-solid fa-bolt-lightning me-2"></i> Energy</p>
              <p><i class="fa-regular fa-credit-card me-2"></i> Consumer discretionary</p>
              <p><i class="fa-solid fa-cart-shopping me-2"></i> Consumer Staples</p>
              <p><i class="fa-solid fa-house me-2"></i> Real Estate</p>
            </div>
            <div className="col-sm-6 col-border">
            <p><i class="fa-solid fa-network-wired me-2"></i> IT</p>
            <p><i class="fa-regular fa-comment-dots me-2"></i> Communication</p>
            <p><i class="fa-solid fa-industry me-2"></i> Industrials</p>
            <p><i class="fa-solid fa-screwdriver-wrench me-2"></i> Utilities</p>
            <p><i class="fa-solid fa-circle-dollar-to-slot me-2"></i> Financial</p>
            </div>
          </div>
          
           </div>
          
          <div className="container">
          <div className="row mt-2">

<div className="col-sm-6">
<p className='font-bold mt-3 mb-2'><i class="fa-solid fa-caret-down me-2"></i> Market Cap</p>
<div>
<input className='me-2 ms-4 pointer' type='radio' name='market' id='micro'/>
<label htmlFor='micro' className='pointer'>Micro</label>
</div>
<div>
<input className='me-2 ms-4 pointer' type='radio' name='market' id='small'/>
<label htmlFor='small' className='pointer'>Small</label>
</div>
<div>
<input className='me-2 ms-4 pointer' type='radio' name='market' id='large'/>
<label htmlFor='large' className='pointer'>Lagre</label>
</div>
</div>
<div className="col-sm-6">
<p className='font-bold mt-3 mb-2'><i class="fa-solid fa-caret-down me-2"></i> Risk Level</p>
<div>
<input className='me-2 ms-4 pointer' type='radio' name='risk' id='low'/>
<label htmlFor='low' className='pointer'>Low Risk</label>
</div>
<div>
<input className='me-2 ms-4 pointer' type='radio' name='risk' id='mid'/>
<label htmlFor='mid' className='pointer'>Mid Risk</label>
</div>
<div>
<input className='me-2 ms-4 pointer' type='radio' name='risk' id='high'/>
<label htmlFor='high' className='pointer'>High Risk</label>
</div>
</div>
</div>
          </div>
          
          <div className="container">
          <div className="row mt-3">

<div className="col-6">
  <div className='px-lg-5 px-0 bgText text-lg-start text-center'>
  <p className='font-bold my-3'> Strategy </p>
  <p>Big Option Buys</p>
  <p>Merger Arbitrage</p>
  <p>Short Report</p>
  </div>

</div>

<div className="col-6">
  <div className='px-lg-5 px-0 bgText text-lg-start text-center'>
  <p className='font-bold my-3'> Asset</p>
  <p>Stocks</p>
  <p>Options</p>
  <p>Futures</p>
  </div>


</div>
</div>
          </div>
          
          
          </div>
          <button className='applyBtn font-semiBold' onClick={close}>Applly</button>
      </div>
    </div>
  </>
}
