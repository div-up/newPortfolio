import Reveal from './Reveal';

export default function SectionHeading({
  children,
  accent,
  delay = 0.1,
}) {
  return (
    <Reveal type="left" delay={delay} className="section-heading">
      {children}
      {accent && (
        <>
          <br />
          <span className="accent">{accent}</span>
        </>
      )}
    </Reveal>
  );
}