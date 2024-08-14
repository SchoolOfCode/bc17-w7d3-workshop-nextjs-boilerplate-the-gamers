import Image from "next/image";

const CardImage = ({ src, alt }) => {
  console.log(src, alt);
  return <Image src={src} alt={alt} width="500" height="500" />;
};

export default CardImage;
