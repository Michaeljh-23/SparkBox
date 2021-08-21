import React from 'react'

class Nav extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      dropped: false,
    }
  }
  clickToDrop () {
    $('drop').onClick(this.setState({dropped: !this.state.dropped}))
  }





  render () {
    var style = {
      visibility: this.state.dropped ? 'visible' : 'hidden'
    }
  return (
  <nav className = "navbar">
    <div className = "left">
     <div className = "itemSubmenu">
       <button type="button" className = "logo"> ☰ </button>
         <div className = "drop" >
           <ul>
            <li className="about">About</li>
            <li className="toggleFullscreen">Toggle Fullscreen</li>
            <li className="reload">Reload</li>
           </ul>
        </div>
       <button className="file">File</button>
         <div className = "drop">
           <ul>
             <li className="hiddenFiles">Show Hidden Files</li>
             <li className="twitter">Twitter</li>
             <li className="youtube">Youtube</li>
             <li className="developers">Creators</li>
             <li className="djLink">DJ Sparkbox</li>
           </ul>
         </div>
        <button className="Edit">Edit</button>
        <div className="drop">
          <ul>
          <li className="stop">Undo</li>
            <li className="redo">Redo</li>
            <li className="play">Play</li>
            <li className="pause">Pause</li>
          </ul>
        </div>
        </div>
        </div>
      <div className = "right">
        <div className = "navNoClick">Rainforest</div>
        <div className = "navNoClick">time</div>


     </div>



  </nav>
  )
  }
};

export default Nav;