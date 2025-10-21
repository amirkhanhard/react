const Recommended = ({itemCard}:any) => {
    const info = itemCard?.card?.info;
    const badge = info?.itemAttribute?.vegClassifier=="VEG"?"success":"error";
  return (
    <>
      <div className="card card-side bg-base-100 shadow-sm p-10">
        <div className="card-body">
            <div className={`badge badge-dash badge-${badge}`}>{info?.itemAttribute?.vegClassifier}</div>
          <b>{info?.name}</b>
          <p></p>
          <p>Click the button to watch on Jetflix app.</p>
          <b>${info?.defaultPrice/100}</b>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
        <figure>
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${info?.imageId}`}
            alt="Movie"
          />
        </figure>
      </div>
      <div className="border-t-blue-300 h-px shadow-xl/30"></div>
    </>
  );
};
export default Recommended;
