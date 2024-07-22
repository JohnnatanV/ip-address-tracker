import { arrowIcon } from "../data/indexImg";

const SearchBar = () => {
  return (
    <div className="h-2/5 min-w-full searchbar-container-desktop bg-cover flex flex-col gap-5 justify-center items-center">
      <h2 className="text-white font-bold items-center">IP Address Tracker</h2>
      <div className="md:w-1/2 sm:w-1/2 lg:w1/3 flex flex-col gap-5 justify-center items-center">
        <input
          type="text"
          className="w-4/5 h-full border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none placeholder:text-muted-foreground"
        />
        <div
          className="bg-black w-14 h-full flex justify-center items-center rounded-md cursor-pointer"
          type="submit"
        >
          <img src={arrowIcon} alt="arrow-icon" className="px-3 py-2" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
