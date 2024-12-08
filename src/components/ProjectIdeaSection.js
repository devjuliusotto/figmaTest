import React from 'react';

function ProjectIdeaSection() {
  return (
    <div style={{
      width:'100%',
      height:476,
      paddingTop:98,
      paddingBottom:98,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      gap:10
    }}>
      <div style={{width:799,height:150,textAlign:'center',fontSize:64,fontFamily:'Lufga',fontWeight:600,color:'#344054'}}>
        Have an Awsome Project Idea? <span style={{color:'#FD853A'}}>Let’s Discuss</span>
      </div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:10}}>
        <div style={{
          width:832,
          height:86,
          padding:14,
          border:'1px solid #E4E7EC',
          borderRadius:50,
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center'
        }}>
          <div style={{display:'flex',alignItems:'center'}}>
            <div style={{
              width:64,height:58,background:'#FFEAD5',
              borderRadius:50,display:'flex',justifyContent:'center',alignItems:'center'
            }}>
              <div style={{width:32,height:22,background:'#FD853A'}}></div>
            </div>
            <div style={{marginLeft:20,color:'black',fontSize:20,fontFamily:'Urbanist',fontWeight:500}}>
              Enter Email Address
            </div>
          </div>
          <div style={{
            padding:'20px 40px',
            background:'#FD853A',
            borderRadius:60,
            color:'white',
            fontSize:20,
            fontFamily:'Urbanist',
            fontWeight:500,
            cursor:'pointer'
          }}>Send</div>
        </div>
        <div style={{
          width:770,
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center'
        }}>
          <div style={{display:'flex',alignItems:'center',gap:5}}>
            <div style={{width:24,height:24,background:'#292D32',marginRight:5}}></div>
            <div style={{color:'black',fontSize:16,fontFamily:'Lufga',fontWeight:400}}>4.9/5 Average Ratings</div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:5}}>
            <div style={{width:24,height:24,background:'#292D32',marginRight:5}}></div>
            <div style={{color:'black',fontSize:16,fontFamily:'Lufga',fontWeight:400}}>25+ Winning Awards</div>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:5}}>
            <div style={{width:24,height:24,background:'#292D32',marginRight:5}}></div>
            <div style={{color:'black',fontSize:16,fontFamily:'Lufga',fontWeight:400}}>Certified Product Designer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectIdeaSection;
