import { Link } from "react-router-dom";

export const ErrorPage = () => {
    return (
      <div>
        <h1>Jseš tady špatně</h1>
        <Link to="/">Náhrat na homepage</Link>
      </div>
    );
  };
  