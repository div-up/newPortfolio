import { useRef, useState, useCallback } from 'react';

// Shows a circular magnifier with alternate words on hover
const MagnifierText = ({ lines }) => {
  const containerRef = useRef(null);
  const lensRef = useRef(null);
  const [lensPos, setLensPos] = useState({x:0,y:0});
  const [visible, setVisible] = useState(false);

  const onMouseMove = useCallback((e) => {
    setLensPos({x:e.clientX, y:e.clientY});
  }, []);

  return (
    <div ref={containerRef}
      className="relative select-none"
      onMouseMove={onMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {/* Normal text */}
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <span
            className={`bebas block text-[14vw] sm:text-[12vw] md:text-[9vw] leading-[0.92] uppercase ${
              line.orange ? 'text-[#E85D26]' : line.muted ? 'text-[#C4A882] opacity-30' : 'text-[#C4A882]'
            }`}
          >
            {line.text}
          </span>
        </div>
      ))}

      {/* Circular magnifier lens - shows inverted/alternate content */}
      {visible && (
        <div
          ref={lensRef}
          style={{
            position:'fixed',
            left: lensPos.x,
            top: lensPos.y,
            width:150,
            height:150,
            borderRadius:'50%',
            pointerEvents:'none',
            zIndex:200,
            transform:'translate(-50%,-50%)',
            border:'1.5px solid #E85D26',
            overflow:'hidden',
            background:'rgba(232,93,38,0.08)',
            backdropFilter:'blur(2px) brightness(1.5)',
          }}
        >
          <div style={{
            position:'absolute', inset:0,
            display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center',
            gap:'2px',
          }}>
            {lines.map((line,i) => (
              <span key={i} style={{
                fontFamily:'Bebas Neue, sans-serif',
                fontSize:'clamp(10px, 2.5vw, 20px)',
                lineHeight:1,
                color: line.orange ? '#fff' : line.muted ? 'rgba(196,168,130,0.5)' : '#E85D26',
                letterSpacing:'0.05em',
                textTransform:'uppercase',
              }}>{line.alt || line.text}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default MagnifierText;
