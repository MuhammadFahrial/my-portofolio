import React, { useState } from "react";
import { userInterface } from "../../../../../details";
import Card from "../../../../molekuls/CardUI";

export default function UI_UX() {
  const [visibleImages, setVisibleImages] = useState(3); // jumlah gambar

  const handleViewMore = () => {
    setVisibleImages(visibleImages + 3); // menambahkan 3 gambar
  };

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
          {React.Children.toArray(
            userInterface
              .slice(0, visibleImages)
              .map(({ image, link }) => <Card image={image} link={link} />)
          )}
        </div>
        {visibleImages < userInterface.length && (
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
