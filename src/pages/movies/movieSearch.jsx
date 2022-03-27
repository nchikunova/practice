import { searchMovies } from '../../api/movies-api';
import { useEffect, useState, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { createUseStyles } from 'react-jss';
import queryString from 'query-string';
import defaultImg from '../../utils/loadImage/noImage.png';

const useStyles = createUseStyles({
  movies: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    marginBottom: '40px',
    marginRight: '15px',
    width: 'calc((100% - 60px)/4)',
    objectFit: 'cover',
    '&:not(:nth-child(3n))': {
      marginRight: '15px',
    },
  },

  posterImg: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
});

const MovieSearch = () => {
  const classes = useStyles();

  const location = useLocation();
  //console.log('location:', location);
  const { pathname, search } = location;
  //console.log(pathname, search);
  const initialQueryState = queryString.parse(search); // ! parse(search)

  const navigate = useNavigate();

  const [query, setQuery] = useState(initialQueryState.query || '');

  // console.log('initialQueryState:', initialQueryState);

  const [list, setList] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    setQuery(e.target.value);
    navigate({
      ...location,
      search: `?query=${e.target.value}`,
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const movieSearch = useCallback(
    _.debounce(
      query => searchMovies(query).then(({ results }) => setList(results)),
      300,
    ),
    [],
  );

  useEffect(() => {
    if (!query) return;
    movieSearch(query);
  }, [query, movieSearch]);

  return (
    <div>
      <input type="text" value={query} ref={inputRef} onChange={handleChange} />
      <ul className={classes.movies}>
        {list.map(({ id, original_title, poster_path, overview }) => (
          <li key={id} className={classes.item}>
            <Link
              to={{
                pathname: `${pathname}/${id}`,
                state: {
                  query,
                },
              }}
            >
              {original_title}
              <img
                className={classes.posterImg}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : defaultImg
                }
                alt=""
              />
            </Link>
            <p>{overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
