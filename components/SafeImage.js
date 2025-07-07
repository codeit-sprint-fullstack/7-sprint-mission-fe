"use client";
import Image from "next/image";
import { useState } from "react";
import placeHolder from "@/public/assets/logos/panda_question.svg";
import LoadingSpinner from "./LoadingSpinner";

export default function SafeImage({ src, alt, width, height, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        priority
        onLoad={() => setIsLoading(false)}
        onError={() => {
          console.log('엑박이라 placeholder로 대체')
          setImgSrc(placeHolder);
          setIsLoading(false);
        }}
        {...props}
      />
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}
