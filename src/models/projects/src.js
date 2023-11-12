const src =
  // Raw project info. Projects added here get processed into projects.json at build time 
  // or by running `node transform.js` manually.
  [
    {
      organization: 'Last Call Media',
      id: 'creativeground',
      title: 'CreativeGround: New England Foundation for the Arts',      
      shortDescription: 'A headless Drupal theme made with React, helping artists and patrons in New England foster creative partnerships',
      image: {
        src: '/src/assets/images/creativeground.png',
        alt: 'Screenshot of the CreativeGround.org website.',
        caption: 'An interactive web app to connect New England creatives and patrons.'
      },
      year: '2022',
      teaser: {
        alt: 'Teaser image for CreativeGround.',
        teaser: true,
        src: '/src/assets/images/teaser/teaser-creativeground.png'
      },
      description: "We built a decoupled React front end theme for the nonprofit's Creativeground.org Drupal site, helping artists and patrons in New England foster creative partnerships.",
      techs: [
        'Drupal 9',
        'React',
        'Mannequin',        
        'SCSS',
        'Circle CI',
        'Javascript',      
        'HTML'
      ],
      role: 'Front end development',
      links: [
        {
          href: 'https://creativeground.org',
          text: 'View a live site example'
        },
        {
          href: 'https://www.lastcallmedia.com',
          text: 'Visit Last Call Media\'s website'
        }
      ]
    }
    ,
    {
      organization: 'Last Call Media',
      title: 'Instant Brands',
      abbreviation: 'instant-brands',
      shortDescription: 'A flexible, customizable look and feel for the Instant Brands (formerly Corelle) family of products',
      image: {
        src: '/src/assets/images/instantbrands.png',
        alt: 'Image alt.',
        caption: 'Screenshot of instantbrands.com'
      },
      year: '2021',
      teaser: {
        alt: 'Teaser image for Instant Brands.',
        teaser: true,
        src: '/src/assets/images/teaser/teaser-instant-brands.png'
      },
      description: "We enhanced the ecommerce site’s styling using SCSS and JS to accommodate the dynamic addition of new brands, ensuring a cohesive user experience during a pivotal sales period.",
      techs: [
        'Drupal 8',        
        'SCSS',        
        'Javascript',        
        'HTML'
      ],
      role: 'Front end development',
      links: [
        {
          href: 'https://www.instantbrands.com',
          text: 'View a live site example'
        },
        {
          href: 'https://www.lastcallmedia.com',
          text: 'Visit Last Call Media\'s website'
        }
      ]
    },
    {
      organization: 'Last Call Media',
      title: 'Blackboard Corporate Rebrand',
      abbreviation: 'blackboard',
      featured: true,
      shortDescription: 'Accessible, atomically-designed component library and Drupal theme for Blackboard\'s corporate rebranding effort.',
      image: {
        src: '/src/assets/images/blackboard.png',
        alt: 'Image alt.',
        caption: 'Screenshot of Blackboard.com'
      },
      year: '2020',
      teaser: {
        alt: 'Teaser image for Blackboard.',
        teaser: true,
        src: '/src/assets/images/teaser/teaser-blackboard.png'
      },
      description: "We crafted a WCAG 2.1 compliant component library and Drupal theme using atomic design principles, SCSS, Twig, and JS, leading to a lower bounce rate on the site’s homepage and an increase in free trial signups.",
      techs: [
        'Drupal 9',
        'Mannequin',
        'Twig',
        'SCSS',
        'Circle CI',
        'Javascript',
        'PHP',
        'HTML'
      ],
      role: 'Front end development',
      links: [
        {
          href: 'https://www.blackboard.com',
          text: 'View a live site example'
        },
        {
          href: 'https://lastcallmedia.com/clients/blackboard',
          text: 'Read the case studies about the rebranding and user testing efforts from Colin Panetta at Last Call Media'
        },
        {
          href: 'https://www.lastcallmedia.com',
          text: 'Visit Last Call Media\'s website'
        }
      ]
    },
    {
      organization: 'American Medical Association',
      title: 'AMA Topic Pages',
      shortDescription: 'Drupal 8 minisites to act as a hub for the AMA to promote specialized content using AMA Style Guide elements',
      image: {
        src: '/src/assets/images/ama-topic-pages.png',
        alt: 'Image alt.',
        caption: 'A scaleable drag-and-drop interface using Drupal 8’s Layout Builder allows content editors to create unique pages for each topic. The theme needed to maintain the integrity of the design without sacrificing flexibility for editors.'
      },
      year: '2018',
      teaser: {
        alt: 'Teaser image for AMA Topic Pages.',
        teaser: true,
        src: '/src/assets/images/teaser/teaser-ama-topic-pages.png'
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
    },
    {
      id: 'american-medical-association-living-style-guides',
      organization: 'American Medical Association',
      title: 'AMA Living Style Guides',
      shortDescription: 'PatternLab suite showcasing reusable atomic design elements to be used throughout the AMA’s digital products, including a custom Drupal 8 theme',
      techs: [
        'PatternLab',
        'Twig',
        'SCSS',
        'Gulp',
        'Atomic design'
      ],
      view: 'https://americanmedicalassociation.github.io/AMA-style-guide/',
      links: [
        {
          href: 'https://americanmedicalassociation.github.io/AMA-style-guide/',
          text: 'View the PatternLab instance on Github Pages'
        }
      ],
      year: '2018',
      role: 'Project Lead (v1), Front end development, design systems thinking',
      image: {
        src: '/src/assets/images/ama-styleguides.png',
        alt: 'Image alt.',
        caption: 'The pattern library showcases reusable variants of design components. '
      },
      teaser: {
        src: '/src/assets/images/teaser/teaser-ama-styleguide.png',
        alt: 'Image alt.'
      },
      caption: 'The pattern library showcases reusable variants of design components.'
    },
    {
      id: 'university-of-chicago-news',
      organization: 'The University of Chicago, Web Services',
      shortDescription: 'D6 to D7 migration project encompassing a total website redesign and major content reorganization',
      title: 'UChicago News',
      year: '2016',
      image: {
        src: '/src/assets/images/uc-news.png',
        alt: 'Image alt.',
        caption: 'The UChicago News home page. '
      },
      teaser: {
        src: '/src/assets/images/teaser/teaser-uc-news.png',
        alt: 'The UChicago News home page.'
      },
      techs: [
        'Rapid prototyping',
        'Adobe Photoshop',
        'Style Tiles',
        'Drupal',
        'HTML',
        'CSS/SCSS',
        'PHP',
        'Javascript/JQuery'
      ],
      description: 'Our main design goal was to give the site a sleek, responsive look that allowed the client to feature big stories in a captivating way. \n\nThis design phase spanned two months. I worked closely (usually hands-on in Photoshop) with the client over a series of eight weekly meetings. Meeting with the clients one-on-one was at times exhausting for both parties, but we made tangible progress quickly. We could answer questions and test drive ideas easily in person, avoiding email back-and-forth that might take days otherwise. In meetings, we focused on solidifying the basic layout first, and then built up the brand\'s look and feel (working in conjunction with the University’s existing brand guidelines). We did this by beginning with low-fi, grayscale mockups to represent layout and Style Tiles to represent look and feel, and worked our way up to detailed, colorful comps. \n\nThe main design challenge we faced was that we needed to display various permutations of node data on story pages. The layout of the page needed to remain highly flexible (being built in Drupal) while being editor-friendly. A news article could be as simple as a few paragraphs, or as complex as a main feature story with interactive embeds and a full-screen cover image. Thanks to our iterative approach to the design process, we were able to start with the simplest version first, and then expand it based on potential need. The resulting flexibility in layout gave the client a wide array of visual tactics for illustrating their stories.',
      role: 'Design Lead, design, front end development, drupal/module development',
      view: 'https://web.archive.org/web/20160603004748/https://news.uchicago.edu/',
      links: [
        {
          href: 'https://web.archive.org/web/20160603004748/https://news.uchicago.edu/',
          text: 'View this project on the Internet Archive'
        },
        {
          href: 'https://www.drupal.org/case-study/uchicago-news',
          text: 'Read the Drupal.org case study about this project'
        }
      ],
      credits: 'University of Chicago Web Services (link)',
    },
    {
      id: 'university-of-chicago-masters-arts-social-sciences',
      organization: 'The University of Chicago, Web Services',
      title: 'UChicago Master of Arts in the Social Sciences',
      year: '2016',
      techs: [
        'Drupal 7',
        'HTML',
        'CSS/SCSS',
        'PHP',
        'Javascript/JQuery'
      ],
      shortDescription: 'Customizable and themable Drupal boilerplate site for the UChicago Master of Arts Program in the Social Sciences',
      view: 'https://mapss.uchicago.edu/',
      links: [
        {
          href: 'https://mapss.uchicago.edu/',
          text: 'View live site example'
        }
      ],
      role: 'Front end development, Drupal/module development',
      image: {
        src: '/src/assets/images/uc-mapss.png',
        alt: 'Image alt.',
      },
      caption: 'The MAPSS home page.',
      credits: 'University of Chicago Web Services (link)',
      teaser: {
        src: '/src/assets/images/teaser/teaser-uc-mapss.png',
        alt: 'Screenshot of the MAPSS home page.'
      },
    },
    {
      id: 'university-of-chicago-it-services',
      year: '2015',
      title: 'UChicago IT Services Portal',
      organization: 'The University of Chicago, Web Services',
      role: 'Design Lead, Design, Front end development, Drupal development',
      techs: [
        'Drupal 7',
        'HTML',
        'CSS/SCSS',
        'PHP',
        'Javascript/JQuery'
      ],
      image: {
        src: '/src/assets/images/uc-itservices.png',
        alt: 'Image alt.',
        caption: 'The IT Services home page.'
      },
      shortDescription: '',
      view: 'https://web.archive.org/web/20150907233545/https://itservices.uchicago.edu/',
      links: [
        {
          href: 'https://web.archive.org/web/20150907233545/https://itservices.uchicago.edu/',
          text: 'View this project on the Internet Archive'
        }
      ],
      caption: 'The IT Services home page.',
      organization: 'The University of Chicago',
      teaser: {
        src: '/src/assets/images/teaser/teaser-uc-itservices.png',
        alt: 'Alt text.'
      }
    },
    {
      id: 'horizon-rpg',
      year: '2013',
      title: 'Horizon RPG',
      role: 'Creator, Administrator (previously), Design, Custom ExpressionEngine module development',
      image: {
        src: '/src/assets/images/horizon.png',
        alt: 'A screenshot of the Horizon home page.',
        caption: 'The Horizon home page. '
      },
      view: 'http://horizon.taiyae.com',
      shortDescription: 'Homebrew role-playing game built using ExpressionEngine, custom PHP modules, and lots of love',
      caption: 'A screenshot of the Horizon home page.',
      organization: 'Personal Project',
      teaser: {
        src: '/src/assets/images/teaser/teaser-horizon-rpg.png',
        alt: 'Alt text.'
      }
    },

  ]

export default src