import React, {useState, useEffect, useRef} from 'react'
import { FaSlideshare, FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import styled, { css } from 'styled-components/macro'


// Styles
const Section = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
    
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: absolute;
`;

const Slide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

const Slider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    heigth: 100%;
    display: flex;
    align-item: center;

    &::before {
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        
    }
`;

const Gradient = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 21.41%, rgba(0, 0, 0, 0) 80.8%);
    z-index: 10;
`;


const SImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const Content = styled.div`
    position: relative;
    z-index: 10000;
    display: flex;
    align-items: left;
    flex-direction: column;
    max-width: 1600px;
    width: 50%;
    color: #fff;
    margin-top: 40vh;
    margin-left: 20vw;
    
    
    @media screen and (max-width: 760px){
        margin-left: 20vw;
        margin-top: 20vh;
    } 
`;

const Title = styled.h1`
    font-size: clamp(3rem, 1vw, 1rem);
    font-weight: 400;
    align-text: left;
    text-transform: uppercase;

    @media screen and (max-width: 760px){
        text-align: center;
    } 
`;

const Subtitle = styled.p`
    color: #FB564E;
    font-size: 30px;
    font-weight: 400;

    @media screen and (max-width: 600px){
        text-align: center;
    }
`;

const SliderButtons = styled.div`
    position: absolute;
    right: 50px;
    bottom: 50px;
    display: flex;
    z-index: 10;
    justify-content: center;
    
`;

const arrowButtons = css`
    width: 50px;
    heigt: 50px;
    font-size: 50px;
    color: white;
    cursor: pointer;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover {
        color: #FED5D3;
        transform: scale(1.5);

    }
`;

const PrevArrow = styled(FaArrowAltCircleLeft)`
    ${arrowButtons}
`;

const NextArrow = styled(FaArrowAltCircleRight)`
    ${arrowButtons} 
`;

// JSX
function Hero({ slides }) {

    const [currentSlide, setCurrentSlide] = useState(0)
    const length = slides.length;
    const timeout = useRef(null)

    useEffect(() => {
        const onNextSlide = () => {
            setCurrentSlide(currentSlide => (currentSlide === length -1 ? 0 : currentSlide +1 ))
        }

        timeout.current = setTimeout(onNextSlide, 9000);

        return function() {
            if(timeout.currentSlide) {
                clearTimeout(timeout.currentSlide)
            }
        }
    }, [currentSlide, length])

    const onNextSlidePressed = () => {
        if(timeout.currentSlide) {
            clearTimeout(timeout.currentSlide)
        }

        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)

        console.log(currentSlide)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const onPrevSlidePressed = () => {
        if(timeout.currentSlide) {
            clearTimeout(timeout.currentSlide)
        }

        setCurrentSlide(currentSlide === 0  ? length -1 : currentSlide - 1)

        console.log(currentSlide)
    }

    return (
        <Section>
            <Wrapper>
                
                {slides.map((slide, index) => (
                    <Slide>
                        { index === currentSlide && (
                            <Slider>
                            
                            <SImage src={slide.image} alt={slide.alt}/>
                            
                            <Content>
                                <Title>{slide.title}</Title>
                                <Subtitle>{slide.subtitle}</Subtitle>
                            </Content>
                        </Slider>
                        )}
                        
                    </Slide>
                ))}
                
                <SliderButtons>
                    <PrevArrow onClick={onPrevSlidePressed}/>
                    <NextArrow onClick={onNextSlidePressed}/>
                </SliderButtons>
            </Wrapper>
        </Section>
    )
}

export default Hero
