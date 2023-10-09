import React, { useState } from "react";
import { projectWeb } from "../../../../../details";
import Card from "../../../../molekuls/Card";

export default function Web() {
  const [visibleImages, setVisibleImages] = useState(6); // jumlah gambar

  const handleViewMore = () => {
    setVisibleImages(visibleImages + 3); // menambahkan 3 gambar
  };

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
          {React.Children.toArray(
            projectWeb
              .slice(0, visibleImages) // untuk membatasi gambar yang ingin di tampilkan
              .map(
                ({
                  title,
                  image,
                  imageHTML,
                  imageCSS,
                  imageJS,
                  imageReact,
                  imageTail,
                  imagePHP,
                  // description,
                  techStack,
                  previewLink,
                  githubLink,
                }) => (
                  <Card
                    title={title}
                    image={image}
                    // description={description}
                    imageHTML={imageHTML}
                    imageCSS={imageCSS}
                    imageJS={imageJS}
                    imageReact={imageReact}
                    imageTail={imageTail}
                    imagePHP={imagePHP}
                    techStack={techStack}
                    previewLink={previewLink}
                    githubLink={githubLink}
                  />
                )
              )
          )}
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
