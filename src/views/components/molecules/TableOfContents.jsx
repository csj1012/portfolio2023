import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function useScrollToAnchor() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // A slight delay can sometimes help with timing issues
    }
  }, [hash]); // Reacting to changes in hash

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold value as needed
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const link = document.querySelector(`a[href="${pathname}#${id}"]`);
          if (link) {
            link.classList.add('active');
          }
        } else {
          const id = entry.target.id;
          const link = document.querySelector(`a[href="${pathname}#${id}"]`);
          if (link) {
            link.classList.remove('active');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}

export default function TableOfContents({ headings }) {
  const location = useLocation();  // This needs to be inside the component using it
  useScrollToAnchor(); // Use the hook at the top level of your component

  const Headings = ({ headings, location }) => (  // Passing location as a prop
    <ul>
      {headings.map((heading) => (
        <li key={heading.anchor}>
          <Link to={`${location.pathname}#${heading.anchor}`}>{heading.title}</Link>
          {heading.items && heading.items.length > 0 && (
            <ul>
              {heading.items.map((child) => (
                <li key={child.anchor}>
                  <Link to={`${location.pathname}#${child.anchor}`}>{child.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <nav aria-label="Table of contents">
      <Headings headings={headings} location={location} />
    </nav>
  );
}
