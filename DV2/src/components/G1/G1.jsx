import { useEffect } from 'react'
import { adjacency_matrix } from '../../../js/node_link.js'
// import { bus_terminal_map } from '../../../js/bus_terminal_map.js'
import '../../style/g1.css'

export default function(){
    useEffect(() => {
        adjacency_matrix()
    }, [])
    return (
        <>
            <div className="container">
                <p className="section-label">Act 4: The Commuter Web</p>
                <h2>Systemic Friction: The Struggle of Shared Paths</h2>
                <div className="graph-container">
                    <div id="adjacency-matrix"></div>
                    <div className="text-container">
                        <p>Passenger flows are not just numbers; they are paths of least resistance. This matrix reveals that 
                        commuters aren't spreading out; they are essentially <strong>trying to occupy the same spaces 
                        at the same time</strong>. The dark cells highlight specific origin-destination pairs where 
                        demand is hyper-concentrated, creating intense friction in the daily urban commute.</p>
                        <p>.......</p>
                    </div>
                </div>
            </div>
        </>
    )
}