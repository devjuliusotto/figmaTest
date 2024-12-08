import React from 'react';

function Services() {
  const cardStyle = {
    width:416,
    height:508,
    background:'rgba(104,104,104,0.2)',
    border:'2px rgba(255,255,255,0.5) solid',
    borderRadius:20,
    backdropFilter:'blur(15px)',
    padding:20,
    display:'flex',
    flexDirection:'column',
    color:'white'
  };
  const titleStyle = {
    fontSize:32,
    fontFamily:'Lufga',
    fontWeight:'500',
    marginBottom:20
  };
  const descStyle = {
    fontSize:18,
    fontFamily:'Lufga',
    fontWeight:'400'
  };

  return (
    <div style={{
      width:'100%',
      background:'#171717',
      borderRadius:50,
      padding:'116px 71px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      gap:96
    }}>
      <div style={{
        display:'flex',
        width:1299,
        justifyContent:'space-between',
        alignItems:'flex-end'
      }}>
        <div style={{color:'#FCFCFD', fontSize:48, fontFamily:'Lufga', fontWeight:'500'}}>
          My <span style={{color:'#FD8439'}}>Services</span>
        </div>
        <div style={{
          width:576,
          color:'white',
          fontSize:20,
          fontFamily:'Lufga',
          fontWeight:'500'
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </div>
      </div>
      <div style={{
        display:'flex',
        justifyContent:'space-between',
        width:1299
      }}>
        <div style={cardStyle}>
          <div style={titleStyle}>UI/UX Design</div>
          <div style={descStyle}>Criação de interfaces amigáveis e experiências do usuário eficientes.</div>
        </div>
        <div style={cardStyle}>
          <div style={titleStyle}>Web Design</div>
          <div style={descStyle}>Sites modernos e responsivos, focados em usabilidade e estética.</div>
        </div>
        <div style={cardStyle}>
          <div style={titleStyle}>Landing Page</div>
          <div style={descStyle}>Páginas de alto impacto visual e conversão.</div>
        </div>
      </div>
    </div>
  );
}

export default Services;