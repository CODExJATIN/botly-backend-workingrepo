
import React from "react";
import Lottie from "lottie-react";



const LottieAnimation = ({
  animationPath,
  className = "",
  loop = true,
  autoplay = true,
}) => {
  return (
    <div className={className}>
      <Lottie
        animationData={animationPath}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
    </div>
  );
};

export default LottieAnimation;
