import React from 'react';

function ScrollingWords() {
  return (
    <div style={{
      width:1440,
      height:147,
      position:'relative',
      background:'#FB6514',
      borderTopLeftRadius:24,
      borderTopRightRadius:24,
      overflow:'hidden'
    }}>
      {/* Aqui no Flutter tinha um transform e várias palavras repetidas */}
      <div style={{
        position:'absolute',
        left:-19,
        top:84.25,
        transform:'rotate(-2.5deg)',
        background:'white',
        display:'flex',
        alignItems:'center',
        gap:15,
        padding:'10px'
      }}>
        {['UX Design','App Design','Dashboard','Wireframe','User Research','UX Design','App Design','Dashboard','Wireframe','User Research'].map((word,i)=>(
          <div key={i} style={{
            color:'black',fontSize:48,fontFamily:'Lufga',fontWeight:400,whiteSpace:'nowrap'
          }}>{word}</div>
        ))}
      </div>
    </div>
  );
}

export default ScrollingWords;
