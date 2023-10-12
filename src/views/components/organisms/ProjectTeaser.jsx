import Image from '@components/atoms/Image'

export default function ProjectTeaser({ title, organization, shortDescription, year, teaser, role }) {
  return (
    <div className="card">
      <h2 className="sr-hidden text-center">{organization}</h2>
      <h2 className="sr-only">
        Project {title} for {organization}
      </h2>
      <h3 className="smallcaps">
        {title} ({year})
      </h3>
      <div className="card__image-container relative">
        {teaser ? (
          <Image
            {...teaser}
            className="rounded-sm"
          />
        ) : (
          ''
        )}
        <span className="absolute inset-0 flex items-center">
          <span className="button mx-auto">View Project</span>
        </span>
      </div>
      <p>{shortDescription}</p>
      <p>Project role: {role}</p>
    </div>
  )
}
