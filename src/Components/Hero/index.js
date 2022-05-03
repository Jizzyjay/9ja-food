import React, { useState } from 'react'
import Navbar from "../Navbar";
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItem, HeroH1, HeroP, HeroBtn } from './HeroElement'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };


    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItem>
                    <HeroH1>9ja Food to the World</HeroH1>
                    <HeroP>Enjoy the food adventures all day, everyday!</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItem>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero