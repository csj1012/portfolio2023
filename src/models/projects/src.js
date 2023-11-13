const src =
  // Raw project info. Projects added here get processed into projects.json at build time 
  // or by running `node transform.js` manually.
  [
    {
      organization: {
        name: 'Last Call Media',
        url: 'https://lastcallmedia.com'
      },
      id: 'creativeground',
      title: 'CreativeGround: New England Foundation for the Arts',      
      shortDescription: 'A headless Drupal theme made with React, helping artists and patrons in New England foster creative partnerships.',
      image: {
        src: '/assets/images/creativeground.png',
        alt: 'Image alt.',
        caption: 'Desktop view of CreativeGround\'s extensive profile search filtered to show a specific subset of artist profiles.'
      },
      year: '2022',
      teaser: {
        alt: 'Teaser image for CreativeGround.',
        teaser: true,
        src: '/assets/images/teaser/teaser-creativeground.png'
      },
      video: {
        src: '/assets/creativeground.mp4'
      },
      description: [
        'Made possible by the New England Foundation for the Arts, CreativeGround hosts online profiles for thousands of artists in a robust, searchable database.',
        'This web app is powered by Drupal and leverages a custom headless React theme. The app allows artists to access a custom React UI to manage their profiles and promote their work. Patrons can then search the public-facing extensive digital database to find and contact artists. Meanwhile, NEFA staff administrates the profiles via the Drupal admin interface and guides artists in using the site.',
        'The diverse nature of the content demanded a simple UI to mask its complexity. It was important to standardize artist profiles while letting their unique qualities shine. Much of the front-end work centered around the editor experience for artists: once signed in, artists can curate photo galleries, update contact information, and describe their art with ease.',
        'This project also involved migrating from a previous version of Drupal. Our team invested considerable effort to keep the app well-organized in the process. We saved effort by using CircleCI for process automation and BackstopJS for visual regression testing. We also paid special attention to accessibility, auditing our own work closely. Amidst many moving pieces, the CreativeGround site is easy and pleasant to use.'
      ],
      aside: {
        src: '/assets/images/cg-mobile.png',
        alt: 'Mobile screenshot showing an artist-managed media gallery in a profile.',
        caption: 'Mobile view of an artist-managed media gallery in a profile.'
      },
      techs: [
        'Drupal',
        'React',
        'Headless theme',
        'Material UI',        
        'CSS-in-JS',
        'Circle CI',
        'Backstop JS',
        'Javascript'
      ],
      role: 'Front end development',
      links: [
        {
          href: 'https://creativeground.org',
          text: 'View the live site'
        }
      ]
    }
    ,
    {
      organization: {
        name: 'Last Call Media',
        url: 'https://www.lastcallmedia.com'
      },
      title: 'Instant Brands',
      abbreviation: 'instant-brands',
      shortDescription: 'A flexible, customizable look and feel for the Instant Brands (formerly Corelle) family of products.',
      image: {
        src: '/assets/images/instantbrands.png',
        alt: 'Image alt.',
        caption: 'We enhanced Instant Brands\' ecommerce site theming to accommodate the dynamic addition of new brands, ensuring a cohesive user experience during a pivotal sales period.'
      },
      video: {
        src: '/assets/instantbrands.mp4'
      },
      year: '2021',
      teaser: {
        alt: 'Teaser image for Instant Brands.',
        teaser: true,
        src: '/assets/images/teaser/teaser-instant-brands.png'
      },
      aside: {
        src: '/assets/images/ib-tablet.png',
        alt: 'Tablet screenshot showing a product page and sale masthead.',
        caption: 'Tablet screenshot showing an Instant Brands product page and sale masthead.'
      },
      description: [
        'Instant Brands, which encompasses seven distinct brands, wanted to simplify their marketing approach. They needed to keep each brand\'s e-commerce site visually unique. At the same time, the sites needed to be interconnected for ease of publication and management. Each site was also the source for customer support info, so it was crucial to display data in an organized manner.',
        'A wide variety of content required a theming overhaul to make everything consistent. With product manuals, warranty information, and product purchase points added into the mix, the site’s once-organized, SMACSS-based codebase had grown difficult to maintain. Mismatched styles were the norm rather than the exception. We worked to streamline the existing Drupal subtheme structure, sharing template files across brand multisites while unique stylesheets and template overrides defined each brand\'s more individual look and feel.',
        'At the end of this effort, customers could effortlessly locate and compare different models, and marketers could efficiently execute campaigns for brands and promote sales across the entire family.'
      ],
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
          text: 'View the live site'
        }
      ]
    },
    {
      organization: {
        name: 'Last Call Media',
        url: 'https://www.lastcallmedia.com'
      },
      title: 'Blackboard Corporate Rebrand',
      abbreviation: 'blackboard',
      featured: true,
      shortDescription: 'An accessible, atomically-designed component library and Drupal theme for Blackboard\'s corporate rebranding effort.',
      image: {
        src: '/assets/images/blackboard.png',
        alt: 'Image alt.',
        caption: 'The rebranded corporate-facing Drupal site empowered content editors to easily keep Blackboard’s customers in the loop via their complex portfolio of marketing content.'
      },
      video: {
        src: '/assets/blackboard.mp4'
      },
      year: '2020',
      teaser: {
        alt: 'Teaser image for Blackboard.',
        teaser: true,
        src: '/assets/images/teaser/teaser-blackboard.png'
      },
      aside: {
        src: '/assets/images/blackboard-mobile.png',
        alt: 'Mobile screenshot.',
        caption: 'Mobile screenshot of Blackboard.com.'
      },
      description: [
        "Blackboard's corporate website educates clients about their expanding range of platform services. Our team's work involved migrating the site to a new major version of Drupal, as well as executing a major rebrand. To this end, we crafted a WCAG 2.1 compliant component library and Drupal theme using atomic design principles.",
        "Given that this was a Drupal site, flexible content management was essential. Authors' additions needed to align with the theme, where visual organization and brand cohesion were paramount. To achieve this, we crafted a style guide using Mannequin, Last Call Media’s custom pattern library tool. This allowed us to construct user interfaces from the ground up, incorporating everything from theme palette colors to rich navigation menus. Mannequin served as the source of truth for our design system components; its primary advantage lay in its ability to let the Drupal theme directly integrate components from the style guide through template files. This integration empowered our development team to implement changes swiftly and effectively.",
       "In the CMS backend, authors had the option to choose from various 'paragraph' types (Drupal's Paragraph Types), enabling them to customize the appearance and functionality according to predefined color combinations, layouts, and specific use cases.",
       "Handling new feature requests also became a streamlined process, since our design team could include reusable components from the Mannequin library. Additionally, the collaboration between our design and dev teams was greatly enhanced through the use of exported transitions and other tools from Figma and Zero Height.",
       "Overall, the team's efforts led to a measured lower bounce rate on the site’s homepage and an increase in free trial signups, accomplishing Blackboard's stated primary business goal."
      ],
      techs: [
        'Drupal',
        'Mannequin',
        'Twig',
        'Atomic design',
        'SCSS',
        'Circle CI',
        'BackstopJS',
        'Javascript',
        'PHP'
      ],
      role: 'Front end development',
      links: [
        {
          href: 'https://www.blackboard.com',
          text: 'View the live site'
        },
        {
          href: 'https://lastcallmedia.com/clients/blackboard',
          text: 'Read the case studies about the rebranding and user testing efforts from Colin Panetta at Last Call Media'
        }
      ]
    },
    {
      organization: {
        name: 'The American Medical Association',
        url: 'https://ama-assn.org'
      },
      title: 'AMA Topic Pages and Style Guide',
      shortDescription: 'Drupal 8 minisites to act as a hub for the American Medical Association to promote specialized content using a bespoke pattern library.',
      image: {
        src: '/assets/images/ama-topic-pages.png',
        alt: 'Image alt.',
        caption: 'A scaleable drag-and-drop interface using Drupal 8’s Layout Builder allows content editors to create unique pages for each topic. The theme needed to maintain the integrity of the design without sacrificing flexibility for editors.'
      },
      video: {
        src: '/assets/amatopics.mp4'
      },
      year: '2018',
      teaser: {
        alt: 'Teaser image for AMA Topic Pages.',
        teaser: true,
        src: '/assets/images/teaser/teaser-ama-styleguide.png',
      },
      aside: {
        src: '/assets/images/ama-mobile.png',
        alt: 'Mobile screenshot of the AMA\'s PatternLab instance',
        caption: 'Mobile screenshot of the AMA\'s PatternLab instance.'
      },
      role: 'Project Lead (v1), Front end development',
      description: [
        "The American Medical Association provides medical professionals and the public with quality information about the latest topics in medicine. Our goal as their in-house team was to build, in addition to a new theme for their massive Drupal site, a component library that could be absorbed into digital projects organization-wide.",
        "We started with a component library, built in Pattern Lab. This \"living style guide\" (not to be confused with the AMA manual of style!) was created in a directory alongside the Drupal implementation. From there, the custom Drupal theme imported the template files. Template files were built to be flexible in displaying both Twig example data in PatternLab and and real data in the Drupal theme. This added some overhead to the development process, but the payoff was a strict level of visual consistency across both places that used the code. A strong adherence to best practices for writing CSS helped the team write better quality code that was more easily maintainable.",
        "On the Drupal implementation side, we used the Panelizer and Panels In Place Editor contrib modules (and later, Layout Builder in a newer version of the theme) to provide an interface where editors can drag and drop custom blocks from a CMS-controlled list of block types. Need to add a Promo Block? Just drag it into place and customize it with text. We were pleased to be able to make the content team’s editing experience a little easier (a much welcomed improvement over the tedium and confusion of the previous Drupal 7 interface)."
      ],
      techs: [
        'Drupal 8',
        'Layout Builder (current)',
        'Panels IPE + Panelizer (previously)',
        'PatternLab',
        'Twig',
        'SCSS',
        'Gulp',
        'PHP',
        'HTML',
        'PatternLab',
        'Atomic design'
      ],
      role: 'Drupal development, front end development',
      links: [
        {
          href: 'https://www.ama-assn.org/topic/advocating-patients-and-physicians',
          text: 'View the live site'
        },
        {
          href: 'https://americanmedicalassociation.github.io/AMA-style-guide/',
          text: 'View the PatternLab instance on Github Pages'
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
      id: 'university-of-chicago-news',
      organization: {
        name: 'The University of Chicago',
        url: 'https://uchicago.edu'
      },
      shortDescription: 'A Drupal 6 to Drupal 7 migration project encompassing a total website redesign and major content reorganization.',
      title: 'UChicago News',
      year: '2016',
      image: {
        src: '/assets/images/uc-news.png',
        alt: 'Image alt.',
        caption: 'The UChicago News home page (Wayback Machine).'
      },
      teaser: {
        src: '/assets/images/teaser/teaser-uc-news.png',
        alt: 'The UChicago News home page.'
      },
      video: {
        src: '/assets/news.mp4'
      },
      aside: {
        src: '/assets/images/news-mobile.png',
        alt: 'Mobile screenshot of an article on the UChicago news site',
        caption: 'Mobile screenshot of an article on the UChicago news site.'
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
      
      description: [
        'Our main design goal was to give the site a sleek, responsive look that allowed the client to feature big stories in a captivating way.',
        'This design phase spanned two months. I worked closely (usually hands-on in Photoshop) with the client over a series of eight weekly meetings. Meeting with the clients one-on-one was at times exhausting for both parties, but we made tangible progress quickly. We could answer questions and test drive ideas easily in person, avoiding email back-and-forth that might take days otherwise. In meetings, we focused on solidifying the basic layout first, and then built up the brand\'s look and feel (working in conjunction with the University’s existing brand guidelines). We did this by beginning with low-fi, grayscale mockups to represent layout and Style Tiles to represent look and feel, and worked our way up to detailed, colorful comps.',
        'The main design challenge we faced was that we needed to display various permutations of node data on story pages. The layout of the page needed to remain highly flexible (being built in Drupal) while being editor-friendly. A news article could be as simple as a few paragraphs, or as complex as a main feature story with interactive embeds and a full-screen cover image. Thanks to our iterative approach to the design process, we were able to start with the simplest version first, and then expand it based on potential need. The resulting flexibility in layout gave the client a wide array of visual tactics for illustrating their stories.'
      ],
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
      credits: 'UChicago Web Services',
    }
  ]

export default src