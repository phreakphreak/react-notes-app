import DynamicIcon from "./DynamicIcon";

export default function SearchBar() {
  return (
    <form>
      <label className="sr-only" htmlFor="note-input">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <DynamicIcon
            iconName="ai/AiOutlineSearch"
            className="text-2xl text-gray-400 "
          />
        </div>
        <input
          type="search"
          className="box-content w-full p-4 pl-10 text-gray-900 border-0 border-transparent rounded-lg outline-none text-md"
          placeholder="Search"
        />
      </div>
    </form>
  );
}
