import React, { useState } from 'react'
import { ArrowForward, ArrowRigth, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroSectionElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'

const HeroSection = () => {

  const [ hover, setHover ] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towars your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Get Started { hover ? <ArrowForward /> : <ArrowRigth /> }
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection