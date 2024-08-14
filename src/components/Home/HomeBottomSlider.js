import React, { useState } from 'react';
import '../../assets/css/homeSlider.css'; // Create this CSS file for styling
import davidImg from '../../assets/images/david-mihm.jpg';
import davidurbinatiImg from '../../assets/images/DavidUrbinati.jpg';
import natImg from '../../assets/images/nat.jpg';
import jonGoldImg from '../../assets/images/jold.jpg';

const HomeBottomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
        image: davidImg,
        name: 'David Mihm',
        position: 'Founder of TidingsCo', 
        content: "For all my Freelancer / Small Agency followers, I wish I’d discovered @bonsaiinc long ago - great templated contract" 
    },
    { 
        image: davidurbinatiImg,
        position: 'Motion design / animation', 
        name: 'David Urbinati', 
        content: '@bonsaiinc is probably my all time favorite freelance tool. hands down. the team is super responsive and accessible when i have questions.' 
    },
    { 
        image: natImg,
        position: 'Product Design', 
        name: 'Nathanael Smith', 
        content: "Anyone doing #freelance work should use @bonsaiinc for contracts/payment. It's amazing and saves boatloads of time." 
    },
    { 
        image: jonGoldImg,
        position: 'Designer and engineer', 
        name: 'Jon Gold', 
        content: "Wow, @bonsaiinc's contracts are completely wonderful. If you freelance you have to check it out. Really lovely experience. h/t @hemeon" 
    },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
        <div className='text-center'>
            <h2>Don't just take it from us.</h2>
        </div>
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 50}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} className='img-fluid rounded'/>
            <h3>{slide.title}</h3>
            <p>{slide.content}</p>
            <h4>{slide.name}</h4>
            <small className='text-start'>{slide.position}</small>
          </div>
        ))}
      </div>
      <div className="dots">
        {[0, 1,2,3].map((index) => (
          <div
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBottomSlider;
