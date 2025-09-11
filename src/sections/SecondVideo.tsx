import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const SecondVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.set(".lucia", { marginTop: "-150vh", opacity: 0 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lucia",
        start: "top top",
        end: "+=200% top",
        scrub: true,
        pin: true,
      },
    });
    tl.to(".jason", { delay: 0.5, opacity: 0, ease: "power1.inOut" });
    tl.to(".lucia", {
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });
    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => [
        tl.to(
          videoRef.current,
          {
            currentTime: videoRef.current?.duration,
            duration: 3,
            ease: "power1.inOut",
          },
          "<"
        ),
      ];
    }
  }, []);

  return (
    <section className="lucia">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output2.mp4"
          className="size-full object-cover second-vd"
          style={{ objectPosition: "30% 0%" }}
        />
      </div>
    </section>
  );
};

export default SecondVideo;
