import React from "react";
import { motionGraphic } from "../../../../../details";
import Card from "../../../../molekuls/CardVideo";

const Motion = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3">
          {React.Children.toArray(
            motionGraphic.map(({ video }) => <Card video={video} />)
          )}
        </div>
      </section>
    </>
  );
};

export default Motion;
