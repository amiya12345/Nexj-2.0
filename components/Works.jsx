import React from "react";
import Ethp from "../public/assets/works/Ethp.webp";
import Type from "../public/assets/works/type.webp";
import Abstarcto from "../public/assets/works/Abstarcto.webp";
import Webi from "../public/assets/works/webi.webp";
import Cybr from "../public/assets/works/cyber.webp";
import WorksItem from "./Worksitem";

const Projects = () => {
  return (
    <div id="works" className="w-full font-omiofont2">
      <div className=" py-16 ">
        <div className="grid md:grid-cols-2">
          <WorksItem
            title="3D illustrataion"
            backgroundImg={Webi}
            projectUrl="/web"
          />
          <WorksItem
            title="Ether Portal"
            backgroundImg={Ethp}
            projectUrl="/eth"
          />
          <WorksItem
            title="Abstarcto"
            backgroundImg={Abstarcto}
            projectUrl="/abstarct"
          />
          <WorksItem title="Typo" backgroundImg={Type} projectUrl="/typo" />
          <WorksItem
            title="Cyberpunk"
            backgroundImg={Cybr}
            projectUrl="/cyber"
          />
          <WorksItem
            title="Cyberpunk"
            backgroundImg={Cybr}
            projectUrl="/cyber"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
