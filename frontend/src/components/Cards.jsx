import React from "react";

function Cards({item}) {
  
  return (
    <>
      <div className="mt-4 my-3 p-3 flex justify-evenly">
        <div className="card w-96 shadow-xl bg-gray-900 border border-blue-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-105">
          <figure className="">
            <img
            className="w-full overflow-hidden"
              src={item.image}
              alt={item.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>
              {item.title}
            </p>
            <div className="card-actions justify-between py-3">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-3 py-3 rounded-full  badge badge-outline hover:bg-pink-500 text-white duration-300">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
