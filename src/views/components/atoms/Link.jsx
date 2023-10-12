import { NavLink } from 'react-router-dom';

export default function Link({ className, ...props }) {
  return <NavLink className={`custom-class ${className}`} {...props} />;
}