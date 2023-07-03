import Stories from '@/app/components/marketStories';

export default function MarketStories() {
  return (
    <div className=" lg:p-[20px] lg:mx-8 p-[10px] mx-4">
      <h1 className="text-left text-base font-semibold text-red-500 mb-3">
        MARKET STORIES
      </h1>

      <Stories />
    </div>
  );
}
