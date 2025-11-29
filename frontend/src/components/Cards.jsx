import React from "react";

function Cards({ item }) {
  // Keep this purely presentational — no new data/features added.
  return (
    <article className="mt-4 my-3 p-3 flex justify-center">
      <div
        className="card w-96 shadow-xl bg-linear-to-br from-gray-900/80 via-gray-900 to-black/60 border border-gray-700 transition-transform duration-300 transform hover:scale-105 focus-within:scale-105 rounded-xl overflow-hidden"
        tabIndex={0}
        aria-label={`Card for ${item.name}`}
      >
        <div className="relative h-56 overflow-hidden bg-slate-800">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out transform hover:scale-105"
          />

          {/* subtle overlay with title shown on hover */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="text-sm text-gray-200 backdrop-blur-sm">
              <div className="font-semibold text-lg leading-tight">
                {item.name}
              </div>
              <div className="text-xs text-gray-300 mt-1 truncate">
                {item.category}
              </div>
            </div>
          </div>
        </div>

        <div className="card-body p-4 pb-5">
          <div className="flex items-start justify-between gap-3">
            <div className="w-full">
              <h3 className="text-white text-xl font-semibold leading-snug">
                {item.name}
              </h3>
              <p className="text-gray-300 text-sm mt-1 line-clamp-3">
                {item.title}
              </p>
            </div>
            <span className="ml-2 inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium border border-gray-600 text-gray-200 bg-gray-800/40">
              {item.category}
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 mt-4">
            <div className="text-2xl font-bold text-amber-400 shadow-sm px-3 py-1 rounded-md bg-clip-padding bg-linear-to-r from-amber-500/20 to-amber-300/5 border border-amber-400/20">
              ${item.price}
            </div>

            {/* Use a real button for accessibility and keyboard visibility */}
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 transition-transform duration-150 active:scale-95"
              aria-label={`Buy ${item.name} for ${item.price} dollars`}
              onClick={() => {
                // keep interaction presentational — no new features added
                // triggers a tiny visual confirmation via CSS only; avoid navigation/side effects
                // console.log can help devs while keeping user behavior unchanged
                // eslint-disable-next-line no-console
                console.log(`Buy clicked: ${item.name}`);
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Cards;
