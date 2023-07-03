import Image from 'next/image';
import dummyData from '../(data)/discussiondata/dummyData.json';

function Cards() {
  return (
    <div className="flex flex-col gap-3  overflow-y-auto">
      {dummyData.map((card) => (
        <div
          key={card.id}
          className="flex flex-col border rounded-md w-[100%]  shadow-md p-4 "
        >
          <div className="flex items-center gap-6 mb-4">
            <Image
              className="rounded-full "
              src={card.img}
              alt="userImg"
              width={50}
              height={50}
            />
            <h2 className="font-medium">{card.name}</h2>
            <small className="bg-red-700 rounded-xl px-2">{card.sector}</small>
          </div>
          <p className="px-10">{card.comment}</p>

          <div className=" text-xs px-10 flex flex-wrap justify-between gap-4 mt-4">
            <span className="flex items-center gap-2">
              <svg className=" h-[12px] w-[12px]  ">
                <use href="/images/icons.svg#icon-heart"></use>
              </svg>
              2k
            </span>
            <span className="flex items-center gap-2">
              <svg className=" h-[12px] w-[12px] ">
                <use href="/images/icons.svg#icon-eye"></use>
              </svg>
              2K
            </span>
            <span className="flex items-center gap-2">
              <svg className=" h-[12px] w-[12px] ">
                <use href="/images/icons.svg#icon-comment"></use>
              </svg>
              2K Comments
            </span>
            <span className="flex items-center gap-2">
              <svg className=" h-[12px] w-[12px] ">
                <use href="/images/icons.svg#icon-share"></use>
              </svg>
              Share
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Cards;
