import ListContainer from "@/features/BoardList/components/ListContainer";
import SearchInput from "@/components/shared/SearchInput";
import Left from "@/components/shared/svgs/Left";
import Right from "@/components/shared/svgs/Right";
import { getBoardLists } from "@/lib/utils";

export default function CalendarView() {
  const boardLists = getBoardLists();

  return (
    <section className="dashboard-container grow flex flex-col">
      <header className="flex justify-between items-center basis-16">
        <div className="flex items-center gap-2">
          <span className="lg:text-2xl font-semibold">2 August 2023</span>
          <div className="inline-flex gap-2">
            <button>
              <Left />
            </button>
            <button>
              <Right />
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <SearchInput />
        </div>
      </header>
      <main className="flex justify-between gap-4 max-h-[calc(100vh-75px)] pt-2 px-1">
        {boardLists.map((boardList) => (
          <ListContainer boardList={boardList} key={boardList.title} />
        ))}
      </main>
    </section>
  );
}
