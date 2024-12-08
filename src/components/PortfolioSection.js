import React from 'react';

function PortfolioSection() {
  return (
    <div style={{
      width:'100%',
      height:1124.08,
      paddingLeft:71,
      paddingRight:71,
      paddingTop:97,
      paddingBottom:97,
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      gap:48
    }}>
      <div style={{
        width:1298,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <div style={{
          width:643,
          fontSize:64,
          fontFamily:'Lufga',
          fontWeight:600,
          color:'#344054'
        }}>
          Lets have a look at my <span style={{color:'#FD853A'}}>Portfolio</span>
        </div>
        <div style={{
          padding:'20px 40px',
          background:'#FD853A',
          borderRadius:60,
          color:'white',
          fontSize:20,
          fontFamily:'Lufga',
          fontWeight:700,
          cursor:'pointer'
        }}>
          See All
        </div>
      </div>

      {/* Slider de imagens, Lirante etc. */}
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:48}}>
        <div style={{display:'flex',alignItems:'center'}}>
          {/* Duas imagens lado a lado */}
          <div style={{
            width:633,
            height:371,
            padding:10,
            borderRadius:20,
            background:'linear-gradient(0deg, white 0%, white 100%)',
            backgroundBlendMode:'multiply'
          }}>
            {/* Conteúdo interno */}
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
              {/* Top: icone rotacionado */}
              <div style={{display:'flex',justifyContent:'flex-end'}}>
                <div style={{
                  width:64,height:64,
                  border:'1px solid #FD853A',
                  borderRadius:'50%',
                  transform:'rotate(-90deg)',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                  <div style={{width:34,height:34,background:'#FD853A'}}></div>
                </div>
              </div>
              {/* Bottom: Texto Lirante */}
              <div style={{display:'flex',alignItems:'flex-end',height:138}}>
                <div style={{color:'#FFFAF5',fontSize:70,fontFamily:'Lufga',fontWeight:700}}>Lirante</div>
              </div>
            </div>
          </div>

          <div style={{width:24}}></div>

          <div style={{
            width:633,
            height:371,
            padding:10,
            borderRadius:20,
            background:'linear-gradient(0deg, white 0%, white 100%)',
            backgroundBlendMode:'multiply'
          }}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
              <div style={{display:'flex',justifyContent:'flex-end'}}>
                <div style={{
                  width:64,height:64,
                  border:'1px solid #FD853A',
                  borderRadius:'50%',
                  transform:'rotate(-90deg)',
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                  <div style={{width:34,height:34,background:'#FD853A'}}></div>
                </div>
              </div>
              <div style={{display:'flex',alignItems:'flex-end',height:138}}>
                <div style={{color:'#FFFAF5',fontSize:70,fontFamily:'Lufga',fontWeight:700}}>Lirante</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{display:'flex',gap:11.31}}>
          <div style={{width:60.32,height:15.08,background:'#FD853A',borderRadius:20.74}}></div>
          <div style={{width:15.08,height:15.08,background:'#E4E7EC',borderRadius:20.74}}></div>
          <div style={{width:15.08,height:15.08,background:'#E4E7EC',borderRadius:20.74}}></div>
          <div style={{width:15.08,height:15.08,background:'#E4E7EC',borderRadius:20.74}}></div>
        </div>
      </div>

      <div style={{display:'flex',flexDirection:'row',gap:14}}>
        <div style={{
          padding:'15px 32px',
          background:'#F2F4F7',
          borderRadius:24,
          color:'black',
          fontSize:20,
          fontFamily:'Inter',
          fontWeight:400
        }}>Landing Page</div>
        <div style={{
          padding:'15px 32px',
          background:'#F2F4F7',
          borderRadius:24,
          color:'black',
          fontSize:20,
          fontFamily:'Inter',
          fontWeight:400
        }}>Product Design</div>
        <div style={{
          padding:'15px 32px',
          background:'#F2F4F7',
          borderRadius:24,
          color:'black',
          fontSize:20
        }}>Animation</div>
        <div style={{
          padding:'15px 32px',
          background:'#F2F4F7',
          borderRadius:24,
          color:'black',
          fontSize:20
        }}>Glassmorphism</div>
        <div style={{
          padding:'15px 32px',
          background:'#F2F4F7',
          borderRadius:24,
          color:'black',
          fontSize:20
        }}>Cards</div>
      </div>

      <div style={{display:'flex',flexDirection:'column',gap:24,alignItems:'flex-start'}}>
        <div style={{display:'flex',alignItems:'flex-end',gap:18}}>
          <div style={{color:'#344054',fontSize:48,fontFamily:'Lufga',fontWeight:700}}>Lirante - Food Dilvery Solution</div>
          <div style={{
            width:58,height:58,
            padding:12,
            background:'#FD853A',
            borderRadius:60,
            transform:'rotate(-90deg)',
            border:'2px solid #FD853A',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
            <div style={{width:34,height:34,background:'white'}}></div>
          </div>
        </div>
        <div style={{
          width:742,
          height:61,
          textAlign:'center',
          color:'#344054',
          fontSize:20,
          fontFamily:'Lufga',
          fontWeight:400
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </div>
      </div>
    </div>
  );
}

export default PortfolioSection;
