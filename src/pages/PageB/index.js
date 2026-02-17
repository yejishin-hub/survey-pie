import { Link } from 'react-router-dom';

function PageB() {
  return (
    <>
      <div>Page B</div>
      <div>
        <a href="/">Go to Page A by a tag</a>
        <br />
        <Link to="/">Go back to Page A</Link>
      </div>
    </>
  );
}

export default PageB;
