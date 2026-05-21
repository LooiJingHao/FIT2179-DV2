import { bus_terminal_map } from '../../../js/bus_terminal_map.js'
import { useEffect } from 'react'

export default function G2() {
  useEffect(() => {
    bus_terminal_map();
  }, []);

  return (
    <section className="bus-terminal-section">
      <h2>Malaysia’s Bus Terminal Footprint</h2>

      <p>
        Bus terminals form an important layer of Malaysia’s public transport network,
        especially beyond rail-focused urban regions. This map shows how terminal
        availability differs by state before zooming into Klang Valley’s detailed
        passenger movement patterns.
      </p>

      <div id="bus-terminal-map"></div>
    </section>
  );
}