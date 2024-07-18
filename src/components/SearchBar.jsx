import { arrow } from "../data/indexImg"

const SearchBar = () => {
  return (
    <div className="h-2/5 min-w-full searchbar-container-desktop bg-cover flex flex-col gap-5 justify-center items-center">
      <h2 className="text-white font-bold items-center">IP Address Tracker</h2>
      <button className="search-box-btn" type="submit">
        <img src={arrow} alt="arrow-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
