import ResumeItem from "./resume-item"
import { resume } from "./resumeData"

function Resume() {
  return (
    <section className="flex flex-col gap-10">
      {resume.map(item => (
        <ResumeItem
          key={item.years[0]}
          years={item.years}
          events={item.events}
        />
      ))}
    </section>
  )
}
export default Resume
