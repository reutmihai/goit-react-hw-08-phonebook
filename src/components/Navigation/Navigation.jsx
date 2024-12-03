import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
};

export default Navigation;
