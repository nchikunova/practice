import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>404</h2>
      <p style={{ color: 'red' }}>Page not found</p>
      <button onClick={handleGoBack}>Go Home</button>
      {/* <Link to="/">Go Home</Link> */}
    </div>
  );
};

export default Page404;
