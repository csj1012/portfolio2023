const src =
  // Raw project info. Projects added here get processed into projects.json at build time 
  // or by running `node transform.js` manually.
  [
    {
      organization: 'Test Org',
      title: 'Test Project',
      shortDescription: 'Test description. Lorem ipsum dolor sit amet.',
      // image: {
      //   alt: 'Test image alt.',
      //   caption: 'Test caption.'
      // },
      year: "2023",
      teaser: {
        src: "test.png",
        alt: "Test teaser alt."
      },
      description: "Test description (longer). Lorem ipsum dolor sit amet, adipiscing elit. And so on! And so on! And one more phrase.",
      techs: [
        'Test tech 1',
        'Test tech 2'
      ],
      role: 'Test role',
      view: {
        href: 'https://www.google.com',
        text: 'View a live site example'
      },
      links: [
        {href: 'https://www.google.com', text: 'Test link 1'},
        {href: 'https://www.yahoo.com', text: 'Test link 2'}
      ],
      credits: 'Test credits'
    },
    {
      organization: 'American Medical Association',
      title: 'AMA Topic Pages',
      shortDescription: 'Drupal 8 minisites to act as a hub for the AMA to promote specialized content using AMA Style Guide elements',
      image: {
        src: 'ama-topics.png',
        alt: 'Image alt.',
        caption: 'A scaleable drag-and-drop interface using Drupal 8’s Layout Builder allows content editors to create unique pages for each topic. The theme needed to maintain the integrity of the design without sacrificing flexibility for editors.'
      },
      year: '2018',
      teaser: {
        alt: 'Teaser image for AMA Topic Pages.',
        teaser: true
      },
      description: "We used the Panelizer and Panels In Place Editor contrib modules (and later, Layout Builder in a newer version of the theme) to provide an interface where editors can drag and drop custom blocks from a CMS-controlled list of block types. Need to add a Promo Block? Just drag it into place and customize it with text. We were pleased to be able to make the content team’s editing experience a little easier (a much welcomed improvement over the tedium and confusion of the previous Drupal 7 interface). ",
      techs: [
        'Drupal 8',
        'Layout Builder (current)',
        'Panels IPE + Panelizer (previously)',
        'PatternLab',
        'Twig',
        'SCSS',
        'Gulp',
        'PHP',
        'HTML'
      ],
      role: 'Drupal development, front end development',
      links: [
        {
          href: 'https://www.ama-assn.org/topic/advocating-patients-and-physicians',
          text: 'View a live site example'
        },
        {
          href: 'https://www.drupal.org/case-study/american-medical-association-topics-pages',
          text: 'Read the Drupal.org case study by Avi Schwab'
        },
        {
          href: 'https://www.midcamp.org/topic/american-medical-association-topic-landing-pages-d8-case-study',
          text: 'Watch the Midcamp 2018 talk about this project'
        }
      ]
    }
  ]

export default src

  // return [
  //   {
  //     id: 'american-medical-association-living-style-guides',
  //     organization: 'American Medical Association',
  //     title: 'AMA Living Style Guides',
  //     shortDescription: 'PatternLab suite showcasing reusable atomic design elements to be used throughout the AMA’s digital products, including a custom Drupal 8 theme',
  //     techs: [
  //       'PatternLab',
  //       'Twig',
  //       'SCSS',
  //       'Gulp',
  //       'Atomic design'
  //     ],
  //     view: 'https://americanmedicalassociation.github.io/AMA-style-guide/',
  //     links: [
  //       {
  //         href: 'https://americanmedicalassociation.github.io/AMA-style-guide/',
  //         text: 'View the PatternLab instance on Github Pages'
  //       }
  //     ],
  //     year: '2018',
  //     role: 'Project Lead (v1), Front end development, design systems thinking',
  //     image: {
  //       src: 'ama-styleguides.png',
  //       alt: 'Image alt.',
  //       caption: 'The pattern library showcases reusable variants of design components. '
  //     },
  //     teaser: {
  //       src: 'teaser-ama-styleguide.png',
  //       alt: 'Image alt.'
  //     },
  //     caption: 'The pattern library showcases reusable variants of design components.'
  //   },
  //   {
  //     id: 'university-of-chicago-news',
  //     organization: 'The University of Chicago',
  //     department: 'Web Services',
  //     shortDescription: 'D6 to D7 migration project encompassing a total website redesign and major content reorganization',
  //     title: 'UChicago News',
  //     year: '2016',
  //     image: {
  //       src: 'uc-news.png',
  //       alt: 'Image alt.',
  //       caption: 'The UChicago News home page. '
  //     },
  //     teaser: {
  //       src: 'teaser-uc-news.png',
  //       alt: 'The UChicago News home page.'
  //     },
  //     techs: [
  //       'Rapid prototyping',
  //       'Adobe Photoshop',
  //       'Style Tiles',
  //       'Drupal',
  //       'HTML',
  //       'CSS/SCSS',
  //       'PHP',
  //       'Javascript/JQuery'
  //     ],
  //     description: 'Our main design goal was to give the site a sleek, responsive look that allowed the client to feature big stories in a captivating way. \n\nThis design phase spanned two months. I worked closely (usually hands-on in Photoshop) with the client over a series of eight weekly meetings. Meeting with the clients one-on-one was at times exhausting for both parties, but we made tangible progress quickly. We could answer questions and test drive ideas easily in person, avoiding email back-and-forth that might take days otherwise. In meetings, we focused on solidifying the basic layout first, and then built up the brand\'s look and feel (working in conjunction with the University’s existing brand guidelines). We did this by beginning with low-fi, grayscale mockups to represent layout and Style Tiles to represent look and feel, and worked our way up to detailed, colorful comps. \n\nThe main design challenge we faced was that we needed to display various permutations of node data on story pages. The layout of the page needed to remain highly flexible (being built in Drupal) while being editor-friendly. A news article could be as simple as a few paragraphs, or as complex as a main feature story with interactive embeds and a full-screen cover image. Thanks to our iterative approach to the design process, we were able to start with the simplest version first, and then expand it based on potential need. The resulting flexibility in layout gave the client a wide array of visual tactics for illustrating their stories.',
  //     role: 'Design Lead, design, front end development, drupal/module development',
  //     view: 'https://web.archive.org/web/20160603004748/https://news.uchicago.edu/',
  //     links: [
  //       {
  //         href: 'https://web.archive.org/web/20160603004748/https://news.uchicago.edu/',
  //         text: 'View this project on the Internet Archive'
  //       },
  //       {
  //         href: 'https://www.drupal.org/case-study/uchicago-news',
  //         text: 'Read the Drupal.org case study about this project'
  //       }
  //     ],
  //     credits: 'University of Chicago Web Services (link)',
  //   },
  //   {
  //     id: 'university-of-chicago-masters-arts-social-sciences',
  //     organization: 'The University of Chicago',
  //     title: 'UChicago MAPSS',
  //     year: '2016',
  //     techs: [
  //       'Drupal 7',
  //       'HTML',
  //       'CSS/SCSS',
  //       'PHP',
  //       'Javascript/JQuery'
  //     ],
  //     shortDescription: 'Customizable and themable Drupal boilerplate site for the UChicago Master of Arts Program in the Social Sciences',
  //     view: 'https://mapss.uchicago.edu/',
  //     links: [
  //       {
  //         href: 'https://mapss.uchicago.edu/',
  //         text: 'View live site example'
  //       }
  //     ],
  //     role: 'Front end development, Drupal/module development',
  //     image: {
  //       src: 'uc-mapss.png',
  //       alt: 'Image alt.',
  //     },
  //     caption: 'The MAPSS home page.',
  //     credits: 'University of Chicago Web Services (link)',
  //     teaser: {
  //       src: 'teaser-uc-mapss.png',
  //       alt: 'Screenshot of the MAPSS home page.'
  //     },
  //   },
  //   {
  //     id: 'university-of-chicago-it-services',
  //     year: '2015',
  //     title: 'UChicago IT Services',
  //     role: 'Design Lead, Design, Front end development, Drupal development',
  //     techs: [
  //       'Drupal 7',
  //       'HTML',
  //       'CSS/SCSS',
  //       'PHP',
  //       'Javascript/JQuery'
  //     ],
  //     image: {
  //       src: 'uc-itservices.png',
  //       alt: 'Image alt.',
  //       caption: 'The IT Services home page.'
  //     },
  //     shortDescription: '',
  //     view: 'https://web.archive.org/web/20150907233545/https://itservices.uchicago.edu/',
  //     links: [
  //       {
  //         href: 'https://web.archive.org/web/20150907233545/https://itservices.uchicago.edu/',
  //         text: 'View this project on the Internet Archive'
  //       }
  //     ],
  //     caption: 'The IT Services home page.',
  //     organization: 'The University of Chicago',
  //     teaser: {
  //       src: 'teaser-uc-itservices.png',
  //       alt: 'Alt text.'
  //     }
  //   },
  //   {
  //     id: 'horizon-rpg',
  //     year: '2013',
  //     title: 'Horizon RPG',
  //     role: 'Creator, Administrator (previously), Design, Custom ExpressionEngine module development',
  //     image: {
  //       src: 'horizon.png',
  //       alt: 'A screenshot of the Horizon home page.',
  //       caption: 'The Horizon home page. '
  //     },
  //     view: 'http://horizon.taiyae.com',
  //     shortDescription: 'Homebrew role-playing game built using ExpressionEngine, custom PHP modules, and lots of love',
  //     caption: 'A screenshot of the Horizon home page.',
  //     organization: 'Personal Project',
  //     teaser: {
  //       src: 'teaser-horizon-rpg.png',
  //       alt: 'Alt text.'
  //     }
  //   },
  // ]
// }
