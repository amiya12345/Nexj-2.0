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
      <div className="mx-auto py-16">
        <div className="grid lg:gap-12 lg:mx-12 md:grid-cols-2 gap-4 mx-4">
          <WorksItem
            title="3D illustrataion"
            backgroundImg={Webi}
            projectUrl="/web"
            data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-offset="0" data-aos-duration="1000" data-aos-delay="0"
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
          <WorksItem 
          title="Typo" 
          backgroundImg={Type} 
          projectUrl="/typo" 
          />
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
