import limit from '../assets/group.svg'
import arrowDown from '../assets/arrowDown.svg'

export const Slicer = () => {
    return(
        <>
        <div className='mainSearch'>
        <div className='limit'>
            <img src={limit} alt='delimit' />
        </div>
        <span className='searchSpan'>Find your next place to visit</span>
        <div className='searchDiv'>
            <button>Location <img src={arrowDown} alt='arrow' /></button>
            <button>Type<img src={arrowDown} alt='arrow' /></button>
            <button>Price<img src={arrowDown} alt='arrow' /></button>
        </div>
        </div>
        </>
    )
}