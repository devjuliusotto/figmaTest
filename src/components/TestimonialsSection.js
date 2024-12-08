import React from 'react';

function TestimonialsSection() {
  return (
    <div style={{
      width:'100%',
      height:863,
      paddingLeft:71,
      paddingRight:71,
      paddingTop:116,
      paddingBottom:116,
      background:'#171717',
      borderRadius:50,
      overflow:'hidden',
      backgroundImage:'url(https://via.placeholder.com/1440x863)',
      backgroundSize:'cover',
      backgroundPosition:'center',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      gap:96
    }}>
      <div style={{height:201,display:'flex',flexDirection:'column',alignItems:'center',gap:14}}>
        <div style={{
          textAlign:'center',
          color:'#FCFCFD',
          fontSize:48,
          fontFamily:'Lufga',
          fontWeight:500
        }}>
          Testimonials That Speak to <span style={{color:'#FD853A'}}>My Results</span>
        </div>
        <div style={{
          width:742,
          height:61,
          textAlign:'center',
          color:'#F9FAFB',
          fontSize:20,
          fontFamily:'Lufga',
          fontWeight:400
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </div>
      </div>

      {/* Testemunhos Cards */}
      <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',gap:24}}>
        {/* Card Testemunho */}
        <div style={{
          padding:21,
          background:'rgba(255,255,255,0.14)',
          borderRadius:24,
          backdropFilter:'blur(14px)',
          display:'flex',
          flexDirection:'column',
          gap:14,
          maxWidth:400
        }}>
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <div style={{
              width:54.84,
              height:54.84,
              borderRadius:'50%',
              backgroundImage:'url(https://via.placeholder.com/55x55)',
              backgroundSize:'cover'
            }}></div>
            <div style={{display:'flex',flexDirection:'column'}}>
              <div style={{color:'#FCFCFD',fontSize:23.5,fontFamily:'Urbanist',fontWeight:700}}>Jayesh Patil</div>
              <div style={{color:'#FCFCFD',fontSize:18.28,fontFamily:'Urbanist'}}>CEO, Lirante</div>
            </div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:5}}>
            <div style={{display:'flex',alignItems:'center'}}>
              {[...Array(5)].map((_,i)=><div key={i} style={{width:32,height:32,background:'#FD853A',margin:'0 2px'}}></div>)}
            </div>
            <div style={{color:'#FCFCFD',fontSize:25.69,fontFamily:'Lufga',fontWeight:500}}>5.0</div>
          </div>
          <div style={{
            width:742,
            height:106,
            color:'#F9FAFB',
            fontSize:20,
            fontFamily:'Lufga',
            fontWeight:400
          }}>
            consectetur adipiscing elit. Sed congue interdum ligula a dignissim...
          </div>
        </div>

        {/* Segundo Testemunho */}
        <div style={{
          padding:21,
          background:'rgba(255,255,255,0.14)',
          borderRadius:24,
          backdropFilter:'blur(14px)',
          display:'flex',
          flexDirection:'column',
          gap:14,
          maxWidth:400
        }}>
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <div style={{
              width:54.84,
              height:54.84,
              borderRadius:'50%',
              backgroundImage:'url(https://via.placeholder.com/55x55)',
              backgroundSize:'cover'
            }}></div>
            <div style={{display:'flex',flexDirection:'column'}}>
              <div style={{color:'#FCFCFD',fontSize:23.5,fontFamily:'Urbanist',fontWeight:700}}>Jayesh Patil</div>
              <div style={{color:'#FCFCFD',fontSize:18.28,fontFamily:'Urbanist'}}>CEO, Lirante</div>
            </div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:5}}>
            <div style={{display:'flex',alignItems:'center'}}>
              {[...Array(5)].map((_,i)=><div key={i} style={{width:32,height:32,background:'#FD853A',margin:'0 2px'}}></div>)}
            </div>
            <div style={{color:'#FCFCFD',fontSize:25.69,fontFamily:'Lufga',fontWeight:500}}>5.0</div>
          </div>
          <div style={{
            width:742,
            height:106,
            color:'#F9FAFB',
            fontSize:20,
            fontFamily:'Lufga',
            fontWeight:400
          }}>
            Sed lobortis orci elementum egestas lobortis...
          </div>
        </div>

        {/* Terceiro Testemunho (se houver) */}
        <div style={{
          padding:21,
          background:'rgba(255,255,255,0.14)',
          borderRadius:24,
          backdropFilter:'blur(14px)',
          display:'flex',
          flexDirection:'column',
          gap:14,
          maxWidth:400
        }}>
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <div style={{
              width:54.84,
              height:54.84,
              borderRadius:'50%',
              backgroundImage:'url(https://via.placeholder.com/55x55)',
              backgroundSize:'cover'
            }}></div>
            <div style={{display:'flex',flexDirection:'column'}}>
              <div style={{color:'#FCFCFD',fontSize:23.5,fontFamily:'Urbanist',fontWeight:700}}>Jayesh Patil</div>
              <div style={{color:'#FCFCFD',fontSize:18.28,fontFamily:'Urbanist'}}>CEO, Lirante</div>
            </div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:5}}>
            <div style={{display:'flex',alignItems:'center'}}>
              {[...Array(5)].map((_,i)=><div key={i} style={{width:32,height:32,background:'#FD853A',margin:'0 2px'}}></div>)}
            </div>
            <div style={{color:'#FCFCFD',fontSize:25.69,fontFamily:'Lufga',fontWeight:500}}>5.0</div>
          </div>
          <div style={{
            width:742,
            height:106,
            color:'#F9FAFB',
            fontSize:20,
            fontFamily:'Lufga',
            fontWeight:400
          }}>
            Mais texto de testimonial...
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
