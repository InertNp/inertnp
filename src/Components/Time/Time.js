export function Time() {
  return (
    <div className="  absolute top-0 w-full flex justify-center">
      <div className="h-10 text-center flex p-1">
        <button className="">
          <GetTimeLocal />
        </button>
      </div>
    </div>
  );
}

function GetTimeLocal({ time }) {
  const d =  new Date().toLocaleDateString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute:"2-digit",
    second:"2-digit",
  });
  return <>{`${d}`}</>;
}
