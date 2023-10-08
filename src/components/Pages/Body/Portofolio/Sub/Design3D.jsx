import React, { useState } from "react";
import { design3D } from "../../../../../details";
import Card from "../../../../molekuls/Card3d";

export default function Design3D() {
  const [visibleImages, setVisibleImages] = useState(6); // jumlah gambar

  const handleViewMore = () => {
    setVisibleImages(visibleImages + 3); // menambahkan 3 gambar
  };

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
          {React.Children.toArray(
            design3D
              .slice(0, visibleImages)
              .map(({ image }) => <Card image={image} />)
          )}
        </div>
        {visibleImages < design3D.length && (
          <button
            onClick={handleViewMore}
            className="flex justify-center content-center bg-[#2600ff] text-whiite px-3 py-2 m-auto mt-4 text-[14px] rounded-md"
          >
            View More
          </button>
        )}
      </section>
    </>
  );
}
