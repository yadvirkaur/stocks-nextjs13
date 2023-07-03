import Discussion from './(navbar)/discussionforum/page';
import MarketStories from './(navbar)/marketstories/page';

export default function Home() {
  return (
    <div className=" sm:p-[20px] sm:mx-8 overflow-hidden">
      <div className="flex flex-row justify-evenly">
        <Discussion />
        <div className="hidden lg:block">
          {/* Display MarketStories component above 1050px (lg breakpoint) */}
          <MarketStories />
        </div>
      </div>
    </div>
  );
}
