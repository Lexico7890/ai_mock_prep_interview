import { animate, createScope, createSpring } from "animejs";
import { useEffect } from "react";

const useAnimation = () => {
    useEffect(() => {
        createScope({}).add(() => {
          animate(".facebook", {
            scale: [
              { to: 1.25, ease: "inOut(3)", duration: 200 },
              { to: 1, ease: createSpring({ stiffness: 300 }) },
            ],
            loop: true,
            opacity: [0, 1],
            loopDelay: 2500,
          });
          animate(".google", {
            scale: [
              { to: 1.25, ease: "inOut(3)", duration: 200 },
              { to: 1, ease: createSpring({ stiffness: 300 }) },
            ],
            loop: true,
            opacity: [0, 1],
            loopDelay: 2000,
          });
          animate(".amazon", {
            scale: [
              { to: 1.25, ease: "inOut(3)", duration: 200 },
              { to: 1, ease: createSpring({ stiffness: 300 }) },
            ],
            opacity: [0, 1],
            loop: true,
            loopDelay: 2200,
          });
          animate(".text-one", {
            opacity: [1],
            delay: 500,
          });
          animate(".text-two", {
            opacity: [1],
            delay: 600,
          });
          animate(".text-three", {
            opacity: [1],
            delay: 700,
          });
          animate(".div-buttons", {
            opacity: [1],
            delay: 800,
          });
          animate(".div-checks", {
            opacity: [1],
            delay: 900,
          });
        });
      }, []);
}

export default useAnimation