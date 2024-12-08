import React from 'react';

function Header() {
  const linkStyle = {
    padding:'20px 40px',
    borderRadius:60,
    overflow:'hidden',
    border:'1px solid white',
    justifyContent:'center',
    alignItems:'center',
    color:'white',
    fontSize:20,
    fontFamily:'Lufga',
    fontWeight:400,
    display:'flex',
    gap:10
  };

  return (
    <div style={{
      width:1298,
      height:86,
      paddingLeft:10,
      paddingRight:10,
      background:'#171717',
      borderRadius:50,
      border:'1px solid white',
      backdropFilter:'blur(15px)',
      justifyContent:'space-between',
      alignItems:'center',
      display:'inline-flex'
    }}>
      <div style={{
        ...linkStyle,
        background:'#FD853A',
        border:'none',
        fontWeight:700
      }}>Home</div>

      <div style={linkStyle}>About</div>
      <div style={linkStyle}>Service</div>

      <div style={{
        width:307,
        height:86,
        paddingLeft:40,
        paddingRight:40,
        paddingTop:20,
        paddingBottom:20,
        borderRadius:60,
        overflow:'hidden',
        border:'1px solid white',
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        display:'flex'
      }}>
        <div style={{
          width:46,
          height:46,
          paddingLeft:5,
          paddingRight:5,
          background:'#FD853A',
          borderRadius:50,
          display:'inline-flex',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <div style={{width:30,height:20,background:'white'}}></div>
        </div>
        {/* icones decorativos */}
        <div style={{display:'flex',gap:3}}>
          <div style={{width:12.84,height:18.89,background:'white'}}></div>
          <div style={{width:14.47,height:19.22,background:'white'}}></div>
          <div style={{width:14.44,height:18.55,background:'white'}}></div>
          <div style={{width:12.41,height:18.55,background:'white'}}></div>
          <div style={{width:16.35,height:18.54,background:'white'}}></div>
        </div>
      </div>

      <div style={linkStyle}>Resume</div>
      <div style={linkStyle}>Project</div>
      <div style={linkStyle}>Contact</div>
    </div>
  );
}

export default Header;
