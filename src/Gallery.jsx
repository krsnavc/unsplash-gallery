import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from './context';

const URL = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_SOME_KEY
}`;

function Gallery() {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ['gallery', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${URL}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="images-container">
        <div className="loading" style={{ marginTop: '4rem' }}></div>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className="images-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="images-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            key={item.id}
            alt={item.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
}

export default Gallery;
