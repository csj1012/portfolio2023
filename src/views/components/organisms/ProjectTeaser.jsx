import Image from '@components/atoms/Image'

export default function ProjectTeaser({ title, organization, shortDescription, teaser, role }) {
  return (
    <div className="teaser">
      <h3 className="teaser__title sr-hidden">{organization}</h3>
      <h3 className="sr-only">
        Project {title} for {organization}
      </h3>
      <p className="teaser__heading">
        {title}
      </p>
      <div className="teaser__image-wrapper">
        {teaser ? (
          <Image
            className="teaser__image"
            {...teaser}            
          />
        ) : (
          ''
        )}
        <span className="">
          <span className="">View Project</span>
        </span>
      </div>
      <p>{shortDescription}</p>
      <p>Project role: {role}</p>
    </div>
  )
}
