import Cards from '@/app/components/discussionForumCard';

export default function Discussion() {
  return (
    <div className=" lg:p-[20px] lg:mx-8 p-[10px] mx-4 ">
      <h1 className="text-left text-base font-semibold text-red-500 mb-3">
        DISCUSSION FORUM
      </h1>

      <Cards />
    </div>
  );
}
