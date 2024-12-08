import React from 'react';

function FooterSection() {
  return (
    <div style={{
      width:'100%',
      height:685,
      paddingLeft:71,
      paddingRight:71,
      paddingTop:25,
      paddingBottom:25,
      background:'#272727',
      borderTopLeftRadius:24,
      borderTopRightRadius:24,
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      alignItems:'flex-start'
    }}>
      <div style={{
        alignSelf:'stretch',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <div style={{width:643,color:'#FCFCFD',fontSize:64,fontFamily:'Lufga',fontWeight:600}}>
          Lets Connect there
        </div>
        <div style={{
          height:62,
          padding:'10px 20px',
          background:'#FD853A',
          borderRadius:60,
          display:'flex',
          alignItems:'center',
          color:'white',
          fontSize:25.69,
          fontFamily:'Lufga',
          fontWeight:500,
          cursor:'pointer'
        }}>
          Hire me
        </div>
      </div>
      <div style={{alignSelf:'stretch',height:0,border:'2px solid #475467'}}></div>
      <div style={{
        alignSelf:'stretch',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-start'
      }}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:239}}>
          <div style={{
            width:307,height:86,
            paddingTop:20,paddingBottom:20,
            borderRadius:60,
            border:'1px solid white',
            display:'flex',
            alignItems:'center'
          }}>
            <div style={{
              width:46,height:46,
              background:'#FD853A',
              borderRadius:'50%',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}>
              <div style={{width:30,height:20,background:'white'}}></div>
            </div>
            {/* ícones a direita podem ser omitidos ou ajustados */}
            <div style={{display:'flex',gap:3,marginLeft:10}}>
              <div style={{width:12.84,height:18.89,background:'white'}}></div>
              <div style={{width:14.47,height:19.22,background:'white'}}></div>
              <div style={{width:14.44,height:18.55,background:'white'}}></div>
              <div style={{width:12.41,height:18.55,background:'white'}}></div>
              <div style={{width:16.35,height:18.54,background:'white'}}></div>
            </div>
          </div>
          <div style={{width:635,color:'#FCFCFD',fontSize:20,fontFamily:'Lufga',fontWeight:400}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </div>
          <div style={{display:'flex',gap:5}}>
            {/* Ícones de redes brancos simulados */}
            <div style={{width:24,height:24,background:'white'}}></div>
            <div style={{width:24,height:24,background:'white'}}></div>
            <div style={{width:24,height:24,background:'white'}}></div>
            <div style={{width:24,height:24,background:'white'}}></div>
            <div style={{width:24,height:24,background:'white'}}></div>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:28}}>
          <div style={{color:'#FD853A',fontSize:20,fontFamily:'Lufga',fontWeight:600}}>Navigation</div>
          <div style={{display:'flex',flexDirection:'column',gap:20}}>
            <div style={{color:'#FCFCFD',fontSize:16,fontFamily:'Lufga'}}>Home</div>
            <div style={{color:'#FCFCFD',fontSize:16,fontFamily:'Lufga'}}>About Us</div>
            <div style={{color:'#FCFCFD',fontSize:16,fontFamily:'Lufga'}}>Service</div>
            <div style={{color:'#FCFCFD',fontSize:16,fontFamily:'Lufga'}}>Resume</div>
            <div style={{color:'#FCFCFD',fontSize:16,fontFamily:'Lufga'}}>Project</div>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:28}}>
          <div style={{color:'#FD853A',fontSize:20,fontFamily:'Lufga',fontWeight:600}}>Contact</div>
          <div style={{display:'flex',flexDirection:'column',gap:20}}>
            <div style={{color:'#FCFCFD',fontSize:16,fontFamily:'Lufga'}}>+91 7738443636</div>
            <div style={{color:'#FCFCFD',fontSize:16,fontFamily:'Lufga'}}>Jaycrea36@gmail.com</div>
            <div style={{color:'#FCFCFD',fontSize:16,fontFamily:'Lufga'}}>Portfolio-jcrea.com</div>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:28}}>
          <div style={{color:'#FD853A',fontSize:20,fontFamily:'Lufga',fontWeight:600}}>Get the latest information</div>
          <div style={{display:'flex'}}>
            <div style={{
              width:258,height:51,
              background:'white',
              borderTopLeftRadius:14,
              borderBottomLeftRadius:14,
              display:'flex',
              alignItems:'center',
              padding:'0 14px'
            }}>
              <div style={{color:'black',fontSize:16,fontFamily:'Lufga'}}>Email Address</div>
            </div>
            <div style={{
              width:46,height:51,
              background:'#FD853A',
              borderTopRightRadius:14,
              borderBottomRightRadius:14,
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}>
              <div style={{width:24,height:24,background:'white'}}></div>
            </div>
          </div>
        </div>
      </div>
      <div style={{alignSelf:'stretch',height:0,border:'2px #475467 solid'}}></div>
      <div style={{
        alignSelf:'stretch',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-start'
      }}>
        <div style={{color:'white',fontSize:20,fontFamily:'Lufga',fontWeight:400}}>Copyright© 2023 Jayesh.
          All Rights Reserved.</div>
        <div style={{color:'white',fontSize:20,fontFamily:'Lufga',fontWeight:400}}>User Terms & Conditions | Privacy Policy</div>
      </div>
    </div>
  );
}

export default FooterSection;
