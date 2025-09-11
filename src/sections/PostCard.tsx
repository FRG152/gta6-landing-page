import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const PostCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".post-card",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.to(
          videoRef.current,
          {
            currentTime: videoRef.current?.duration,
            duration: 3,
            ease: "power1.inOut",
          },
          "<"
        );
      };
    }
  });

  return (
    <div className="post-card">
      <div className="animated-gradient-bg" />
      <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">
        <img src="/images/overlay.webp" alt="" />

        <video
          ref={videoRef}
          muted
          autoPlay
          playsInline
          preload="auto"
          src="/videos/postcard-vd.mp4"
        />
      </div>
    </div>
  );
};

export default PostCard;
