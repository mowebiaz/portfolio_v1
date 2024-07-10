import { Card } from './components/Card/Card'
import { projectsList } from '../../lib/projectsList'
import "./page.scss"

export default function Portfolio() {
  return (
    <main>
      <h1>Portfolio</h1>
      <div className="cards">
        {projectsList.map((project) => (
          <Card
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </main>
  )
}
