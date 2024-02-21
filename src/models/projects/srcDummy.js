const projectsSrc = [
  {
    organization: {
      name: 'Example Organization',
      url: 'https://www.example.com'
    },
    title: 'Example Project',
    abbreviation: 'example',
    featured: true,
    shortDescription: 'This is an example project with all the fields populated.',
    image: {
      src: '/assets/images/blackboard.png',
      alt: 'Image alt.',
      caption: 'This is the caption for the example image.'
    },
    video: {
      src: '/assets/blackboard.mp4'
    },
    year: '2022',
    teaser: {
      alt: 'Teaser image for Example Project.',
      teaser: true,
      src: '/assets/images/teaser/teaser-blackboard.png'
      },
    aside: {
      src: '/assets/images/blackboard-mobile.png',
      alt: 'Mobile screenshot.',
      caption: 'This is a mobile screenshot of the Example Project.'
    },
    description: [
      'This is the description of the Example Project.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Nulla nec elit sed justo aliquet tincidunt.',
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin euismod, nisl id aliquet lacinia, nunc lacus aliquam nunc, id tincidunt nisl mauris id odio.',
      'Donec auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.',
      'Sed auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.',
      'Fusce auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.',
      'Etiam auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.',
      'Vivamus auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.'
    ],
    techs: [
      'Technology 1',
      'Technology 2',
      'Technology 3',
      'Technology 4',
      'Technology 5'
    ],
    role: 'Example Role',
    links: [
      {
        href: 'https://www.example.com',
        text: 'View the live site'
      },
      {
        href: 'https://www.example.com/case-study',
      }
    ]
  },
  {
    organization: {
      name: 'Example Organization',
      url: 'https://www.example.com'
    },
    title: 'Example Project',
    abbreviation: 'example',
    featured: true,
    shortDescription: 'This is an example project with all the fields populated.',
    image: {
      src: '/assets/images/blackboard.png',
      alt: 'Image alt.',
      caption: 'This is the caption for the example image.'
    },
    video: {
      src: '/assets/blackboard.mp4'
    },
    year: '2022',
    teaser: {
      alt: 'Teaser image for Example Project.',
      teaser: true,
      src: '/assets/images/teaser/teaser-blackboard.png'
      },
    aside: {
      src: '/assets/images/blackboard-mobile.png',
      alt: 'Mobile screenshot.',
      caption: 'This is a mobile screenshot of the Example Project.'
    },
    description: [
      'This is the description of the Example Project.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Nulla nec elit sed justo aliquet tincidunt.',
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin euismod, nisl id aliquet lacinia, nunc lacus aliquam nunc, id tincidunt nisl mauris id odio.',
      'Donec auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.',
      'Sed auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.',
      'Fusce auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.',
      'Etiam auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.',
      'Vivamus auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.'
    ],
    techs: [
      'Technology 1',
      'Technology 2',
      'Technology 3',
      'Technology 4',
      'Technology 5'
    ],
    role: 'Example Role',
    links: [
      {
        href: 'https://www.example.com',
        text: 'View the live site'
      },
      {
        href: 'https://www.example.com/case-study',
      }
    ]
  },
  {
    organization: {
      name: 'Example Organization',
      url: 'https://www.example.com'
    },
    title: 'Example Project',
    abbreviation: 'example',
    featured: true,
    shortDescription: 'This is an example project with all the fields populated.',
    image: {
      src: '/assets/images/blackboard.png',
      alt: 'Image alt.',
      caption: 'This is the caption for the example image.'
    },
    video: {
      src: '/assets/blackboard.mp4'
    },
    year: '2022',
    teaser: {
      alt: 'Teaser image for Example Project.',
      teaser: true,
      src: '/assets/images/teaser/teaser-blackboard.png'
      },
    aside: {
      src: '/assets/images/blackboard-mobile.png',
      alt: 'Mobile screenshot.',
      caption: 'This is a mobile screenshot of the Example Project.'
    },
    description: [
      'This is the description of the Example Project.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Nulla nec elit sed justo aliquet tincidunt.',
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin euismod, nisl id aliquet lacinia, nunc lacus aliquam nunc, id tincidunt nisl mauris id odio.',
      'Donec auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.',
      'Sed auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.',
      'Fusce auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.',
      'Etiam auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.',
      'Vivamus auctor, nunc id tincidunt lacinia, nunc nunc lacinia nunc, id tincidunt nunc mauris id odio.'
    ],
    techs: [
      'Technology 1',
      'Technology 2',
      'Technology 3',
      'Technology 4',
      'Technology 5'
    ],
    role: 'Example Role',
    links: [
      {
        href: 'https://www.example.com',
        text: 'View the live site'
      },
      {
        href: 'https://www.example.com/case-study',
      }
    ]
  }
]

export default projectsSrc