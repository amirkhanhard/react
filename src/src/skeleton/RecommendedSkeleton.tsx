function RecommendedSkeleton() {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13];
  return (
    <div className="flex gap-5 flex-wrap">
      {a.map((val) => {
        return (
          <div key={"id_" + val} className="flex w-[100%] flex-row gap-4">
            <div className="flex w-[100%] flex-row gap-4">
              <div className="w-[70%]">
              <div className="skeleton h-4 w-28 m-3"></div>
              <div className="skeleton h-4 w-38 m-3"></div>
              <div className="skeleton h-4 w-48 m-3"></div>
              </div>
              <div className="skeleton h-32 w-[20%]"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecommendedSkeleton;
