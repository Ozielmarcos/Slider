import { PictureProps } from "./props";

export default function Picture({ alt, height, src, width }: PictureProps) {
  return (
    <>
      <img src={src} width={width} height={height} alt={alt} />
    </>
  )
}