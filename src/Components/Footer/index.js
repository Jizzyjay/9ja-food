import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer,
        FooterWrapper,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        SocialIcons,
        SocialIconLink
    } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>9ja FoodHub</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="facebook.com" target='_blank'
                                aria-label='Facebook' rel='noopener noreferrer'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="instagram.com" target='_blank'
                                aria-label='Instagram' rel='noopener noreferrer'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="twitter.com/jizzy_jay423" target='_blank'
                                aria-label='Twitter' rel='noopener noreferrer'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="youtube.com" target='_blank'
                                aria-label='Youtube' rel='noopener noreferrer'>
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer