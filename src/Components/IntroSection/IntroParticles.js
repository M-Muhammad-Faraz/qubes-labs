import React from "react";
import Particles from "react-tsparticles";
import classes from "./IntroParticles.module.css";

const IntroParticles = () => {
  return (
    <Particles
      className="container"
      canvasClassName={classes.particlesize}
      params={{
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            
          },
        },
        particles: {
          color: {
            value: "#1092b2",
            animation: {
              h: {
                enable: true,
                speed: 12,
              },
            },
          },
          links: {
            color: {
              value: "#1092b2",
            },
            enable: true,
            opacity: 0.7,
          },
          move: {
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            speed: 6,
          },
          number: {
            density: {
              enable: true,
            },
            value: 200,
          },
          opacity: {
            value: 0.8,
          },
          size: {
            value: {
              min: 0.1,
              max: 3,
            },
          },
        },
      }}
      // options={{
      //   particles: {
      //     number: {
      //       value: 80,
      //       density: {
      //         enable: true,
      //         value_area: 800,
      //       },
      //     },
      //     color: {
      //       value: "#000002",
      //     },
      //     shape: {
      //       type: "circle",
      //       stroke: {
      //         width: 0,
      //         color: "#000001",
      //       },
      //       polygon: {
      //         nb_sides: 5,
      //       },
      //       // image: {
      //       //   src: "img/github.svg",
      //       //   width: 100,
      //       //   height: 100,
      //       // },
      //     },
      //     opacity: {
      //       value: 0.5,
      //       random: false,
      //       anim: {
      //         enable: false,
      //         speed: 1,
      //         opacity_min: 0.1,
      //         sync: false,
      //       },
      //     },
      //     size: {
      //       value: 3,
      //       random: true,
      //       anim: {
      //         enable: false,
      //         speed: 40,
      //         size_min: 0.1,
      //         sync: false,
      //       },
      //     },
      //     line_linked: {
      //       enable: true,
      //       distance: 150,
      //       color: "#122111",
      //       opacity: 0.4,
      //       width: 1,
      //     },
      //     move: {
      //       enable: true,
      //       speed: 6,
      //       direction: "none",
      //       random: false,
      //       straight: false,
      //       out_mode: "out",
      //       bounce: false,
      //       attract: {
      //         enable: false,
      //         rotateX: 600,
      //         rotateY: 1200,
      //       },
      //     },
      //   },
      //   interactivity: {
      //     detect_on: "canvas",
      //     events: {
      //       onhover: {
      //         enable: true,
      //         mode: "repulse",
      //       },
      //       onclick: {
      //         enable: true,
      //         mode: "push",
      //       },
      //       resize: true,
      //     },
      //     modes: {
      //       grab: {
      //         distance: 400,
      //         line_linked: {
      //           opacity: 1,
      //         },
      //       },
      //       bubble: {
      //         distance: 400,
      //         size: 40,
      //         duration: 2,
      //         opacity: 8,
      //         speed: 3,
      //       },
      //       repulse: {
      //         distance: 200,
      //         duration: 0.4,
      //       },
      //       push: {
      //         particles_nb: 4,
      //       },
      //       remove: {
      //         particles_nb: 2,
      //       },
      //     },
      //   },
      //   retina_detect: true,
      // }}
    />
  );
};

export default IntroParticles;
