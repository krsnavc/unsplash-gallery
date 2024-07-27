import { ToastContainer, toast } from 'react-toastify';
import { useGlobalContext } from './context';

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    if (!searchValue) {
      toast.error('Please enter a search value');
      return;
    }
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
