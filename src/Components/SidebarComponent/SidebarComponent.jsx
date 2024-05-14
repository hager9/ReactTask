import React, { useState } from 'react'
import logo from '../../Images/street suite logo-05.png'
import image from "../../Images/boy_5244468.png"
export default function SidebarComponent() {
    const [isCollabsed, setIsCollabsed] = useState(true);
    
    const sidebarData = [
        {
            id:0,
            icon: 'fa-solid fa-bell',
            to: '/',
            text: 'Alerts',
            'textColor': '#53ACFF ',
        },
        {
            id:1,
            icon: 'fa-solid fa-graduation-cap',
            to: '',
            text: 'Training',
            'textColor': '#efefef',
        },
        {
            id:2,
            icon: 'fa-solid fa-gears',
            to: '',
            text:'Automation',
            'textColor': '#5D5D5D',
        },
        {
            id:4,
            icon: 'fa-solid fa-folder-open',
            to: '',     
            text:'Portfolio',
            'textColor': '#5D5D5D',

        },
        {
            id:5,
            icon: 'fa-solid fa-arrow-up-right-dots',
            to: '',
            text: 'Trading',
            'textColor': '#5D5D5D',
        }
    ]
  

  return <>


  <div className={isCollabsed? 'collabsedSidebar sidebar' : 'notcollabsedSidebar sidebar'} >
    <div className='min-vh-100 d-flex flex-column justify-content-between'>
        <div>
        <div className='logo mb-3 p-1 pointer pt-3' onClick={()=>{setIsCollabsed(!isCollabsed)}}>
            <img src={logo} alt='logo' className={isCollabsed? 'logoCollabsed w-100' : 'logoNotCollabsed w-100'}/>
        </div>
        <div className='items px-3'>
            <ul className='list-unstyled'>
                {sidebarData.map((item)=>{
                    return <>
                    <li key={item.id} className='py-2 pointer'>
                        <div style={ { color: item.textColor }}>
                            
                            <span><i class={item.icon}></i></span>
                            <span className={isCollabsed? 'textCollabsed' : "linkText"}>{item.text}</span> 
                            
                        </div>
                    </li>
                    </>
                })}
            </ul>
        </div>
        </div>
        <div className='sidebar-footer p-3 mb-2'>
            
                 <div className={isCollabsed? 'd-flex flex-column justify-content-between align-items-center' : 'd-flex justify-content-between align-items-center' }>
                {isCollabsed? <span style={ { color: sidebarData[0].textColor }}><i className={sidebarData[0].icon}></i></span>  : ""}
                <div className="py-3"><img src={image} className={isCollabsed? 'imgCollabsed' : 'imgNotCollabsed'} alt='designer image' /></div>

                {isCollabsed? "" :<div>
                    <p className='font-bold mb-0'>Moni Roy</p>
                    <p className='footer-text mb-0'>Beginner</p>
                        </div>
                        
}
                </div> 

        </div>
    </div>
  </div>
  </>
}
