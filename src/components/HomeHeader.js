import React from 'react'
import '../css/HomeHeader.css'
  
class HomeHeader extends React.Component {
    render() {
      return (
        <div className="Headerbg">
                <header>
                    
                        <h2 className="alt">
                            Hi! I'm <span className="rainbow">Lian</span>
                            <br />
                        </h2>
                        <h3 className="alt">
                            Yoga Teacher and Artist
                        </h3>    
                        <icon className="fa fa-hand-peace-o" 
                        style={{
                            fontSize: "2rem",
                            padding: "0 0 1rem"
                        }} />
                        <p style={{
                          letterSpacing: "1rem"
                        }}>Welcome</p>
                        
                </header>
           
        </div>
      )
    }
}

export default HomeHeader