import React from "react";
import { projectWeb } from "../../../../../details";
import Card from "../../../../molekuls/Card";

export default function Web() {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
          {React.Children.toArray(
            projectWeb.map(
              ({
                title,
                image,
                description,
                techStack,
                previewLink,
                githubLink,
              }) => (
                <Card
                  title={title}
                  image={image}
                  // description={description}
                  techStack={techStack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </>
  );
}
