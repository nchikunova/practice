import { search } from '../api/movies-api';
import { useEffect, useState, useCallback } from 'react';
import _ from 'lodash';
import { createUseStyles } from 'react-jss';
import defaultImg from '../assets/error';

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
});

export const MovieSearch = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [list, setList] = useState([]);

  const handleChange = e => setQuery(e.target.value);

  const movieSearch = useCallback(
    _.debounce(
      query => search(query).then(({ results }) => setList(results)),
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
      <input type="text" value={query} onChange={handleChange} />
      <ul className={classes.movies}>
        {list.map(({ id, original_title, poster_path, overview }) => (
          <li key={id} className={classes.item}>
            {original_title}
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : defaultImg
              }
              alt=""
            />
            <p>{overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
