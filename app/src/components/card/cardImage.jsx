import Image from "next/image";

const CardImage = ({ src, alt }) => {
  console.log(src, alt);
  return <Image src={src} alt={alt} width="350" height="350" />;
};

export default CardImage;
