import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <section>
      <div className="section section-center">
        <h1>There was an error. Error text: {error.statusText}</h1>;
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </section>
  );
};
export default Error;
