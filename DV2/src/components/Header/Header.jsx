import '../../style/Header.css'
import { adjacency_matrix } from '../../../js/node_link.js'
import { useEffect } from 'react'
export default function Header(){
    useEffect(() => {
        adjacency_matrix();
    }, [])
    return (
        <>
            <div className="header-container">
                <h1>A Data Story of Public Transport Accesibility and Urban Mobility</h1>
                <p>Mapping the growth, accessibility, and challenges of Malaysia's public transport landscape</p>
            </div>
            <div className="intro-parag">
                <h2>Introduction</h2>
                <p>Malaysia's public transport system connects millions of commuters across rapidly growing urban regions. Expanding <strong>MRT</strong>, <strong>LRT</strong>, <strong>KTM</strong>, and bus networks have improved <strong>accessibility</strong> and urban connectivity, yet challenges involving <strong>congestion</strong>, unequal access, and <strong>sustainability</strong> continue shaping the future of Malaysia’s urban mobility landscape.</p>
            </div>
            <div className="KPI-Section">
                <div className="box-container">
                    <p className='KPI-Header'>DAILY RIDER</p>
                    <p>1,293,607</p>
                </div>
                <div className="box-container">
                    <p className='KPI-Header'>TOTAL STATIONS</p>
                    <p>144</p>
                </div>
                <div className="box-container">
                    <p className='KPI-Header'>NUMBER OF PUBLIC TRANSPORTS</p>
                    <p>15</p>
                </div>
                <div className="box-container">
                    <p className='KPI-Header'>ANNUAL PASSENGER VOLUME (2025)</p>
                    <p>451,121,402</p>
                </div>
            </div>
        </>
    )
}
