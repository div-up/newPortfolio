import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SectionLabel from '../components/SectionLabel';

const PROJECTS = [
  {
    num: '01',
    title: 'LOOMNOTES',
    year: '2024',
    desc: 'Real-time collaborative note editor powered by WebSockets — multiple users, one canvas.',
    tags: ['REACT', 'SOCKET.IO', 'EXPRESS', 'NODE.JS'],
    link: '#',
  },
  {
    num: '02',
    title: 'GITMATCHED',
    year: '2024',
    desc: 'A Tinder-style interface for discovering GitHub repositories — swipe to star, skip to pass.',
    tags: ['REACT', 'REDUX', 'TAILWIND'],
    link: '#',
  },
  {
    num: '03',
    title: 'DEVDASH',
    year: '2023',
    desc: 'Developer productivity dashboard integrating GitHub, JIRA, and Slack for a unified workflow.',
    tags: ['REACT', 'NODE.JS', 'REST API'],
    link: '#',
  },
  {
    num: '04',
    title: 'SNAPCART',
    year: '2023',
    desc: 'E-commerce platform with AI-powered product recommendations and blazing fast checkout.',
    tags: ['NEXT.JS', 'STRIPE', 'MONGODB'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionLabel label="SELECTED WORK" />

      <SectionHeading accent="I'M PROUD OF">
        PROJECTS
      </SectionHeading>

      <div className="project-list">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.num} delay={0.15 + index * 0.08}>
            <a href={project.link} className="project-item">
              <div className="project-number">{project.num}</div>

              <div>
                <div className="project-title">{project.title}</div>

                <div className="project-description">
                  {project.desc}
                </div>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-year">{project.year}</div>
            </a>
          </Reveal>
        ))}

        <div className="list-end" />
      </div>
    </section>
  );
}