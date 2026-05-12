import '../../style/Header.css'
export default function Header(){
    return (
        <>
            <div className="header-container">
                <h1>The King of Fruits: A Comprehensive <br />Analysis of Malaysia's Durian Industry</h1>
                <p>Exploring durian production, geography, exports, prices, and Malaysia's role across <br />the world durain market</p>
            </div>
            <div className="intro-parag">
                <h2>Introduction</h2>
                <p>Malaysia's durian industry has rapidly evolved from a local delicacy into a globally recognised agricultural export. Driven by rising international demand <strong>particularly from China</strong> premium durian varieties now contribute significantly to Malaysia's economy through <strong>production</strong>, <strong>exports</strong>, and tourism. However, rapid industry growth also raises concerns surrounding sustainability and long-term agricultural resilience.</p>
            </div>
            <div className="KPI-Section">
                <div className="box-container">
                    <p>TOTAL PRODUCTION</p>
                </div>
                <div className="box-container">
                    <p>TOP PRODUCING STATE</p>
                </div>
                <div className="box-container">
                    <p>EXPORT VALUE</p>
                </div>
                <div className="box-container">
                    <p>MAJOR DESTINATION</p>
                </div>
            </div>
        </>
    )
}
