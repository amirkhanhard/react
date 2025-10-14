function RestaurantSkeleton() {
  let a = [1, 2, 3, 4, 5,6,7,8,9,10,12,13];
  return (
    <div className="flex gap-5 flex-wrap">
      {a.map((val) => {
        return (
          <div key={"id_"+val} className="flex w-70 flex-col gap-4">
            <div className="skeleton h-80 w-full"></div>
            <div className="flex items-center gap-4">
              <div className="skeleton h-12 w-18 shrink-0"></div>
              <div className="flex flex-col gap-4">
                <div className="skeleton h-4 w-40"></div>
                <div className="skeleton h-4 w-48"></div>
                <div className="skeleton h-4 w-28"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantSkeleton;
