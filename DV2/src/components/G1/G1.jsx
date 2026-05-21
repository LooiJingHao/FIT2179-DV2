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
                <h2>Where Do Klang Valley Passengers Travel Most?</h2>
                <div className="graph-container">
                    <div id="adjacency-matrix"></div>
                    <div className="text-container">
                        <p>Passenger flows are not evenly distributed across Klang Valley's rail network. Darker cells show that a small number of <strong>origin-destination pairs</strong> carry much higher ridership, suggesting that commuter demand is concentrated around several important station corridors rather than spread equally across all routes.</p>
                        <p>.......</p>
                    </div>
                </div>
            </div>
        </>
    )
}