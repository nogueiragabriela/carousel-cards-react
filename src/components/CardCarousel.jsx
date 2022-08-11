import React, {useState} from 'react'
import { CardsData } from './CardData'
import { MdChevronLeft, MdChevronRight  } from 'react-icons/md'


export const CardCarousel = ({cards}) => {
    const [current, setCurrent] = useState(0)
    const length = cards.length

    const nextCard = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

   const previousCard = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
   }

    if(!Array.isArray(cards) || cards.length <= 0) {
        return null;
    }

  return (
   <section className='main-card-container'>
    <MdChevronLeft size={40} className='left-arrow' onClick={previousCard}/>
    <MdChevronRight size={40} className='right-arrow' onClick={nextCard}/>
   {CardsData.map((card, index) => {
    return (
        <div className={index === current ? 'card active' : 'card'} key={index}>
            {index === current && (
                <div>
                    <img src={card.image} alt="" className='card-image'/>
                    <p className='card-name'>{card.name}</p>
                    <p className='card-description'>Job Role: {card.profession}</p>
                    <p className='card-description'>Hobbies: {card.hobbies}</p>
                </div>
            )}
            <div>
                
            </div>    
        </div>
    )    
    })}
   </section>
  )
};
