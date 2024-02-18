import React, { useState } from "react";
import { projectWeb } from "../../../../../details";
import Card from "../../../../molekuls/Card";
import Prev from "../../../../../assets/prev.png";
import Next from "../../../../../assets/next.png";

export default function Web() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const project = projectWeb.map((el) => (
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

  const nextIndex = () => {
    currentIndex === project.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  const prevIndex = () => {
    currentIndex === 0
      ? setCurrentIndex(project.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  return (
    <>
      <section>
        <div className="flex items-center justify-between">
          <button onClick={prevIndex} className="w-[32px]">
            <img src={Prev} alt="" />
          </button>
          {project[currentIndex]}
          <button onClick={nextIndex} className="w-[32px]">
            <img src={Next} alt="" />
          </button>
        </div>
      </section>
    </>
  );
}
