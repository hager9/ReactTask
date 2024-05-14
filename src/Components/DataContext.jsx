import React, { createContext, useState } from 'react'


export const dataContext = createContext();

export default function DataContextProvider({children}) {

    const [tableData, setTableData] = useState([
        {name: 'AMZN', number: 200 , percentage: -0.25 , color: true, risk: 'Low Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'TSLA', number: 200 , percentage: -0.25 , color: false,  risk: 'Low Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'MSFT', number: 200 , percentage: -0.25 , color: false, risk: 'mid Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'AMZN', number: 200 , percentage: -0.25 , color: false, risk: 'Low Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'NFLX', number: 200 , percentage: -0.25 , color: true, risk: 'high Risk' , text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'AMZN', number: 200 , percentage: -0.25 , color:false,  risk: 'mid Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'MSFT', number: 200 , percentage: -0.25 , color: true, risk: 'Low Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'AMZN', number: 200 , percentage: -0.25 , color: true, risk: 'Low Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'ABQQ', number: 200 , percentage: -0.25 , color: true, risk: 'Low Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'NFLX', number: 200 , percentage: -0.25 , color: false, risk: 'high Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'AMZN', number: 200 , percentage: -0.25 , color: true, risk: 'Low Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'TSLA', number: 200 , percentage: -0.25 , color: false, risk: 'Low Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'AMZN', number: 200 , percentage: -0.25 , color: false, risk: 'mid Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'NFLX', number: 200 , percentage: -0.25 , color: true, risk: 'Low Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'AMZN', number: 200 , percentage: -0.25 , color: true, risk: 'Low Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'TSLA', number: 200 , percentage: -0.25 , color: true, risk: 'high Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'AMZN', number: 200 , percentage: -0.25 , color: true, risk: 'Low Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'AMZN', number: 200 , percentage: -0.25 , color:false,  risk: 'mid Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'ABQQ', number: 200 , percentage: -0.25 , color:false,  risk: 'Low Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '},
        {name: 'AMZN', number: 200 , percentage: -0.25 , color: true, risk: 'Low Risk', text:'This is an arbitrage opportunity, with the max gain %X if the deal closes, but the possible risk is %Y if the deal fails, if the deal success is % and therefore the recommended play is long/short $ABC '}
    ]);
    localStorage.setItem('data', JSON.stringify(tableData))

    const addData = (newRow) =>{
        setTableData(prevData => [...prevData , newRow])
    }



  return <>
    <dataContext.Provider value={{tableData, setTableData ,addData }}>
        {children}
    </dataContext.Provider>
  </> 
}
