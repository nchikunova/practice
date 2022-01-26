import { useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="movie-details">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, vitae!
      </p>
      <button onClick={handleGoBack}>Вернуться к списку фильмов</button>
    </div>
  );
};

export default MovieDetails;
