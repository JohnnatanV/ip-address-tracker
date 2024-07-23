import { useState } from "react";
import { arrowIcon } from "../data/indexImg";

const SearchBar = () => {
  const [ipAddress, setIpAddress] = useState("");

  const handleClick = () => {};
  return (
    <div className="h-2/5 min-w-full searchbar-container-desktop bg-cover flex flex-col gap-5 justify-center items-center">
      <h2 className="text-white font-bold items-center">IP Address Tracker</h2>
      <div className="md:w-1/2 sm:w-1/2 lg:w-1/3 flex justify-center items-center h-10">
        <input
          type="text"
          className="w-4/5 h-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none placeholder:text-muted-foreground"
          placeholder="Enter the IP Address here..."
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <div
          className="bg-black w-14 h-full flex justify-center items-center rounded-md cursor-pointer"
          onClick={handleClick}
        >
          <img src={arrowIcon} alt="arrow-icon" className="px-3 py-2" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
