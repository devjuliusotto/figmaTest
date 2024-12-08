import React from 'react';

function HireMeSection() {
  return (
    <div style={{
      width:'100%',
      height:806,
      paddingLeft:71,
      paddingRight:71,
      paddingTop:122,
      paddingBottom:122,
      background:'#F2F4F7',
      borderRadius:50,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <div style={{
        width:1299,
        height:600,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        {/* Imagem esquerda */}
        <div style={{
          width:603,
          height:600,
          backgroundImage:'url(https://via.placeholder.com/603x600)',
          backgroundSize:'cover',
          backgroundPosition:'center'
        }}></div>

        <div style={{
          flex:'1 1 0',
          display:'flex',
          flexDirection:'column',
          justifyContent:'flex-start',
          alignItems:'flex-start',
          gap:47,
          marginLeft:50
        }}>
          <div style={{
            fontSize:64,
            fontFamily:'Lufga',
            fontWeight:600,
            color:'#344054'
          }}>
            Why <span style={{color:'#FD853A'}}>Hire me</span>?
          </div>
          <div style={{width:444,color:'#98A2B3',fontSize:20,fontFamily:'Lufga',fontWeight:400}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc...
          </div>
          <div style={{display:'flex',gap:10}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:10}}>
              <div style={{color:'#1D2939',fontSize:36,fontWeight:500,fontFamily:'Lufga'}}>450+</div>
              <div style={{color:'#667085',fontSize:20,fontFamily:'Lufga',fontWeight:400}}>Project Completed</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:10}}>
              <div style={{color:'#1D2939',fontSize:36,fontWeight:500,fontFamily:'Lufga'}}>450+</div>
              <div style={{color:'#667085',fontSize:20,fontFamily:'Lufga',fontWeight:400}}>Project Completed</div>
            </div>
          </div>
          <div style={{
            padding:'33px 59px',
            borderRadius:32,
            border:'1px solid #151515',
            justifyContent:'center',
            alignItems:'center',
            display:'inline-flex',
            cursor:'pointer'
          }}>
            <div style={{color:'#151515',fontSize:32,fontFamily:'Lufga',fontWeight:600}}>Hire me</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMeSection;
