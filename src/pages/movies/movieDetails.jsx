import { useNavigate, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state, query, search, hash } = location;
  console.log(
    'state:',
    state,
    'query:',
    query,
    'search:',
    search,
    'hash:',
    hash,
  );

  const handleGoBack = () => {
    navigate(`/movies?query=${state?.query}`);
  };

  return (
    <div className="movie-details">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        vero neque atque, nihil ipsum nemo illum architecto? Amet ipsam,
        quibusdam est labore, ex tempore corrupti unde eius facilis autem quasi
        quaerat. Eos quaerat voluptatem, tempora quae velit sit, dolore fugit
        dignissimos totam incidunt doloremque sequi deserunt, fugiat laudantium
        nostrum. Aliquid!
      </p>
      <button onClick={handleGoBack}>Вернуться к списку фильмов</button>
    </div>
  );
};

export default MovieDetails;
