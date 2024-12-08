import React from 'react';

function BlogSection() {
  return (
    <div style={{
      width:'100%',
      height:1067,
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
        <div style={{color:'#344054',fontSize:48,fontFamily:'Lufga',fontWeight:700}}>
          From my<br/>blog post
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
        }}>See All</div>
      </div>

      <div style={{
        width:1299,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-start'
      }}>
        {/* Card 1 */}
        <div style={{display:'flex',flexDirection:'column',gap:35}}>
          <div style={{
            width:416,height:432,
            boxShadow:'0px 4px 55px rgba(0,0,0,0.05)',
            borderRadius:20,
            backgroundImage:'url(https://via.placeholder.com/416x432)',
            backgroundSize:'cover'
          }}></div>
          <div style={{
            padding:'15px 32px',
            background:'#F2F4F7',
            borderRadius:24,
            color:'black',
            fontSize:20,
            fontFamily:'Inter',
            fontWeight:400,
            width:'fit-content'
          }}>UI/ UX Design</div>
          <div style={{display:'flex',gap:35}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:9,height:9,background:'#FD853A',borderRadius:'50%'}}></div>
              <div style={{color:'#344054',fontSize:20,fontFamily:'Inter',fontWeight:400}}>Jayesh Patil</div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:9,height:9,background:'#FD853A',borderRadius:'50%'}}></div>
              <div style={{color:'#344054',fontSize:20,fontFamily:'Inter',fontWeight:400}}>10 Nov, 2023</div>
            </div>
          </div>
          <div style={{width:416,color:'#344054',fontSize:32,fontFamily:'Lufga',fontWeight:400}}>
            Design Unraveled: Behind the Scenes of UI/UX Magic
          </div>
        </div>

        {/* Card 2 */}
        <div style={{display:'flex',flexDirection:'column',gap:35}}>
          <div style={{
            width:416,height:432,
            boxShadow:'0px 4px 55px rgba(0,0,0,0.05)',
            borderRadius:20,
            backgroundImage:'url(https://via.placeholder.com/416x432)',
            backgroundSize:'cover'
          }}></div>
          <div style={{
            padding:'15px 32px',
            background:'#F2F4F7',
            borderRadius:24,
            color:'black',
            fontSize:20,
            fontFamily:'Inter',
            fontWeight:400,
            width:'fit-content'
          }}>App Design</div>
          <div style={{display:'flex',gap:35}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:9,height:9,background:'#FD853A',borderRadius:'50%'}}></div>
              <div style={{color:'#344054',fontSize:20,fontFamily:'Inter',fontWeight:400}}>Jayesh Patil</div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:9,height:9,background:'#FD853A',borderRadius:'50%'}}></div>
              <div style={{color:'#344054',fontSize:20,fontFamily:'Inter',fontWeight:400}}>09 Oct, 2023</div>
            </div>
          </div>
          <div style={{width:416,color:'#344054',fontSize:32,fontFamily:'Lufga',fontWeight:400}}>
            Sugee: Loan Management System for Rural Sector.
          </div>
        </div>

        {/* Card 3 */}
        <div style={{display:'flex',flexDirection:'column',gap:35}}>
          <div style={{
            width:416,height:432,
            boxShadow:'0px 4px 55px rgba(0,0,0,0.05)',
            borderRadius:20,
            backgroundImage:'url(https://via.placeholder.com/416x432)',
            backgroundSize:'cover'
          }}></div>
          <div style={{
            padding:'15px 32px',
            background:'#F2F4F7',
            borderRadius:24,
            color:'black',
            fontSize:20,
            fontFamily:'Inter',
            fontWeight:400,
            width:'fit-content'
          }}>App Design</div>
          <div style={{display:'flex',gap:35}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:9,height:9,background:'#FD853A',borderRadius:'50%'}}></div>
              <div style={{color:'#344054',fontSize:20,fontFamily:'Inter',fontWeight:400}}>Jayesh Patil</div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:9,height:9,background:'#FD853A',borderRadius:'50%'}}></div>
              <div style={{color:'#344054',fontSize:20,fontFamily:'Inter',fontWeight:400}}>13 Aug, 2023</div>
            </div>
          </div>
          <div style={{width:416,color:'#344054',fontSize:32,fontFamily:'Lufga',fontWeight:400}}>
            Cinetrade: Innovative way to invest in Digital Media
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
