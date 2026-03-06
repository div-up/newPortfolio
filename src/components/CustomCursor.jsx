import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({x:0,y:0});
  const ringPos = useRef({x:0,y:0});
  const rafId = useRef(null);

  useEffect(() => {
    const onMove = (e) => { pos.current = {x:e.clientX, y:e.clientY}; };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      if(dot.current) {
        dot.current.style.left = pos.current.x + 'px';
        dot.current.style.top = pos.current.y + 'px';
      }
      if(ring.current) {
        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
        ring.current.style.left = ringPos.current.x + 'px';
        ring.current.style.top = ringPos.current.y + 'px';
      }
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
};
export default CustomCursor;
