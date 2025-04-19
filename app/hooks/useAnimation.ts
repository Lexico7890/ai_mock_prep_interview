import { animate, createScope, createSpring, onScroll } from "animejs";
import { useEffect, useRef } from "react";

type Scope = ReturnType<typeof createScope>;

const useAnimation = () => {
  const scope = useRef<Scope | null>(null);
  useEffect(() => {
    scope.current = createScope({}).add(() => {
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
      animate(".text-features", {
        autoplay: onScroll({
          onEnter: ({ target }) => {
            animate(target, {
              opacity: [0, 1],
              translateY: [-50, 0],
              duration: 2000,
            });
          },
          onSyncComplete: self => self.revert()
        }),
      });
      animate(".cards", {
        autoplay: onScroll({
          onEnter: ({ target }) => {
            animate(target, {
              opacity: [0, 1],
              translateX: [-550, 0],
              duration: 2000,
            });
          },
          onSyncComplete: self => self.revert()
        }),
      });
      animate(".card-one", {
        autoplay: onScroll({
          onEnter: ({ target }) => {
            animate(target, {
              opacity: [0,1],
              delay: 500,
            })
          },
          onSyncComplete: self => self.revert()
        })
      });
      animate(".card-two", {
        autoplay: onScroll({
          onEnter: ({ target }) => {
            animate(target, {
              opacity: [0,1],
              delay: 800,
            })
          },
          onSyncComplete: self => self.revert()
        })
      })
      animate(".card-three", {
        autoplay: onScroll({
          onEnter: ({ target }) => {
            animate(target, {
              opacity: [0,1],
              delay: 1100,
            })
          },
          onSyncComplete: self => self.revert()
        })
      })
      animate(".card-four", {
        autoplay: onScroll({
          onEnter: ({ target }) => {
            animate(target, {
              opacity: [0,1],
              delay: 1400,
            })
          },
          onSyncComplete: self => self.revert()
        })
      })
    });
    return () => scope.current?.revert()
  }, []);
};

export default useAnimation;
