import Reveal from '../components/Reveal';

export default function Footer() {
  return (
    <footer className="footer">
      <Reveal type="fade">
        © 2026 Divyanshu Upadhyay. All rights reserved.
      </Reveal>

      <Reveal type="fade" delay={0.2}>
        Built with React + Tailwind CSS
      </Reveal>
    </footer>
  );
}