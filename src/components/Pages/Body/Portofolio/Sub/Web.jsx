import React, { useState } from "react";
import { projectWeb } from "../../../../../details";
import Card from "../../../../molekuls/Card";

export default function Web() {
  const [visibleImages, setVisibleImages] = useState(6); // jumlah gambar

  const handleViewMore = () => {
    setVisibleImages(visibleImages + 3); // menambahkan 3 gambar
  };

  const project = projectWeb
    .slice(0, visibleImages) // untuk membatasi gambar yang ingin di tampilkan
    .map((el) => (
      <Card
        title={el.title}
        image={el.image}
        description={el.description}
        imageHTML={el.imageHTML}
        imageCSS={el.imageCSS}
        imageJS={el.imageJS}
        imageReact={el.imageReact}
        imageRedux={el.imageRedux}
        imageTail={el.imageTail}
        imagePHP={el.imagePHP}
        techStack={el.techStack}
        previewLink={el.previewLink}
        githubLink={el.githubLink}
      />
    ));

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
          {project}
        </div>
        {visibleImages < projectWeb.length && (
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
