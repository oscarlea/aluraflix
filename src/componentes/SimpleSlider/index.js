import Slider from "react-slick";
import { useState, useEffect, useRef, useContext } from 'react';
import "./slick.css";
import "./slick-theme.css";
import { VideoDataContext } from "../../Context";
import ActionAreaCard from "../Card";
//import MovieCard from "../MovieCard";

export const SimpleSlider = ({ initialSlide = 1 }) => {

    const { videos } = useContext(VideoDataContext)

    const [hasSetPosition, setHasSetPosition] = useState(false);
    const slider = useRef();

    useEffect(() => {
        if (slider.current && !hasSetPosition) {
            slider.current.slickGoTo(initialSlide);
            setHasSetPosition(true);
        }
    }, [initialSlide, hasSetPosition, slider]);

    const settings = {
        focusOnSelect: true,
        adaptiveHeight: true,
        centerMode: true,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const handleImageLoad = () => {
        // Forzar actualización del componente cuando se carga una imagen
        slider.current && slider.current.forceUpdate();
    };

    return (
        <Slider ref={slider} {...settings}>
            {videos.map((video) => (
                <div key={video.id}>
                    <ActionAreaCard video={video} onLoad={handleImageLoad} />
                </div>
            ))}
        </Slider>
    )
}