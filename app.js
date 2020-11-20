barba.init({
    views: [
      {
        namespace: "home",
        beforeEnter() {
          
          logo.href = "./index.html";
        },
        beforeLeave() {
        }
      },
      {
        namespace: "fashion",
        beforeEnter() {
          
        },
        beforeLeave() {
        
        }
      }
    ],
    transitions: [
      {
        leave({ current, next }) {
          let done = this.async();
          //An Animation
          const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
          tl.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0 });
          tl.fromTo(
            ".swipe",
            0.75,
            { x: "-100%" },
            { x: "0%", onComplete: done },
            "-=0.5"
          );
        },
        enter({ current, next }) {
          let done = this.async();
          //Scroll to the top
          window.scrollTo(0, 0);
          //An Animation
          const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
          tl.fromTo(
            ".swipe",
            1,
            { x: "0%" },
  
            { x: "100%", stagger: 0.2, onComplete: done }
          );
          tl.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 });
          tl.fromTo(
            ".nav-header",
            1,
            { y: "-100%" },
            { y: "0%", ease: "power2.inOut" },
            "-=1.5"
          );
        }
      }
    ]
  });