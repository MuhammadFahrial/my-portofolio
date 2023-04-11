import React from "react";
import { userInterface } from "../../../../../details";
import Card from "../../../../molekuls/CardUI";

export default function UI_UX() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
          {React.Children.toArray(
            userInterface.map(
              ({
                title,
                image,
                description,
                techStack,
                previewLink,
                githubLink,
              }) => (
                <Card
                  // title={title}
                  image={image}
                  // description={description}
                  // techStack={techStack}
                  // previewLink={previewLink}
                  // githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </>
  );
}
