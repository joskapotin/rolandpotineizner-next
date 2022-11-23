import { slugify } from "../../../helpers/formatters"

type Props = {
  years: string[]
  events: string[]
}

function ResumeItem({ years, events }: Props) {
  return (
    <article className="flex">
      <h2 className="border-t border-solid border-gray-500 px-3 py-1 font-semibold">
        {years.map(year => (
          <span key={year} className="block">
            {year}
          </span>
        ))}
      </h2>
      <ul className="flex-grow border-b border-l border-solid border-gray-500">
        {events.map(event => (
          <li
            className="px-3 py-1"
            key={slugify(event)}
            dangerouslySetInnerHTML={{ __html: event }}
          />
        ))}
      </ul>
    </article>
  )
}
export default ResumeItem
