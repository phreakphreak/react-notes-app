import SearchBar from "../components/SearchBar";

export default function Notes() {
  return (
    <div className="flex flex-row w-screen bg-gray-100 ">
      <div className="flex flex-row items-center w-full h-16 p-3 bg-white shadow-sm">
        <SearchBar />
      </div>
    </div>
  );
}
