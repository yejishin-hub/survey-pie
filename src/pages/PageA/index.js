import { Link } from 'react-router-dom';

function PageA() {
  return (
    <>
      <div>Page A</div>
      <div>
        <a href="/2">Go to Page B by a tag</a>
        <br />
        <Link to="/2">Go to Page B</Link>
      </div>
    </>
  );
}

export default PageA;
