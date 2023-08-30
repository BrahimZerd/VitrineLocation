import limit from '../assets/group.svg'
import arrowDown from '../assets/arrowDown.svg'
import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../store/posts";
import { useEffect } from "react";
import { Card } from './card';
export const Slicer = () => {

    const dispatch = useDispatch();
    const appartement = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadposts());
    }, [dispatch]);
    console.log(appartement.map(element => element))
    
    return(
        <>
        <div className='mainSearch'>
        <div className='limit'>
            <img src={limit} alt='delimit' />
        </div>
        <span className='searchSpan'>Find your next place to visit</span>
        <div className='searchDiv'>
            <div className='div-button'>
            <button>Bedroom <img src={arrowDown} alt='arrow' /></button>
            <button>Type<img src={arrowDown} alt='arrow' /></button>
            <button>Price<img src={arrowDown} alt='arrow' /></button>
            </div>
            
        
        <div className='card-holder'>
        {appartement.map((element =>  
        <Card 
        name={element.name}
        img={element.picture_url.url}
        city={element.city}
        country={element.country}
        price={element.price}
        />))}
        </div>
        </div>
        </div>
        </>
    )
}