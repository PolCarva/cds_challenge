import { FaCircleXmark, FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = ({ handleSearch, searchValue = null, setSearchValue }) => {

  const handleResetInput = () => {
    setSearchValue("");
  };

  const handleSearchInputKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center w-full lg:w-1/2 h-full relative">
      <label htmlFor="search-input" className="sr-only">
        Search Videos
      </label>
      <input
        id="search-input"
        type="text"
        className="focus:border-primary w-full rounded-l-full h-full pl-4 text-sm text-gray-500 bg-white border border-gray-100 bg-transparent outline-none shadow-inner"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyUp={handleSearchInputKeyUp}
      />
      {searchValue && (
        <FaCircleXmark
          className="absolute right-[4rem] z-20 hover:text-red-500 cursor-pointer"
          onClick={handleResetInput}
        />
      )}
      <div className="group relative">
        <button
          onClick={handleSearch}
          className="py-3 px-5 h-full rounded-r-full bg-gray-100 hover:bg-gray-200 hover:shadow-inner transition-colors ease-in-out"
        >
          <FaMagnifyingGlass />
        </button>
        <span className="absolute z-20 hidden lg:group-hover:block text-sm -bottom-full left-1/2 translate-x-[-50%] bg-gray-500 bg-opacity-80 py-1 px-2 rounded-md text-white">
          Search
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
