import Reveal from './Reveal';

export default function SectionLabel({ label }) {
  return (
    <Reveal type="left" className="section-label">
      {label}
    </Reveal>
  );
}