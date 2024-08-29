import Search from "./svgs/Search";

export default function SearchInput() {
  return (
    <div className="border inline-flex focus-within:outline outline-app-blue gap-2 px-2 items-start rounded-sm">
      <span className="mt-0.5">
      <Search/>
      </span>
      <input type="text" name="" id="" className="outline-none" placeholder="Search"/>
    </div>
  );
}
