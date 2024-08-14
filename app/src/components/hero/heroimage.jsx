import Image from "next/image"; 

// import styles from '.HeroImage.module.css' 

const HeroImage = () => {
    return ( 
        <Image 
        src="hero-mobile.png"
        alt="Living room with cozy fireplace"
        width="500"
        height="500"
        />
    )
}

export default HeroImage 