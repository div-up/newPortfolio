import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if(dot.current){ dot.current.style.left=e.clientX+'px'; dot.current.style.top=e.clientY+'px'; }
      if(ring.current){ setTimeout(()=>{ ring.current.style.left=e.clientX+'px'; ring.current.style.top=e.clientY+'px'; },80); }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <>
      <div ref={dot} className="cursor" style={{transform:'translate(-50%,-50%)'}} />
      <div ref={ring} className="cursor-follower" style={{transform:'translate(-50%,-50%)'}} />
    </>
  );
};
export default CustomCursor;
