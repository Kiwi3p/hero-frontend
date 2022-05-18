import Particles from "react-tsparticles";
import { particlesParams } from "../data/particle";

const Stars = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      {/* <div id="particles-js"></div>
      <div className="count-particles">
        {" "}
        <span className="js-count-particles">--</span> particles{" "}
      </div>f
      <Script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" />
      <Script src="http://threejs.org/examples/js/libs/stats.min.js" />
      <Script src="/data/particle.js" /> */}
      {/* <div id="tsparticles"></div> */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesParams}
      />
    </>
  );
};

export default Stars;
