async function fetchStories() {
  const response = await fetch('http://localhost:3000/marketdata');
  const stories = await response.json();
  return stories;
}

const Stories = async () => {
  const stories = await fetchStories();

  return (
    <div>
      <div className="flex flex-wrap xs:justify-center lg:justify-start  gap-3  overflow-hidden">
        {stories.map((story) => (
          <div
            key={story.id}
            className="rounded-md flex-none min-w-[200px] max-w-[20%] overflow-hidden"
          >
            <div
              className="relative"
              style={{
                width: '100%',
                height: 0,
                paddingBottom: '75%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${story.img})`,
              }}
            >
              <div className="absolute bottom-0 left-0 w-full bg-opacity-50 bg-black">
                <p className="text-xs text-white py-2 px-3">{story.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Stories;
