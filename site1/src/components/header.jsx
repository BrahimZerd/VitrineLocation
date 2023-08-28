import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import Arrow from '../assets/Arrow.svg'



export const HeaderRent = () => {

    return(
    <header>
    <div className="header">
        <img src={Logo} alt='logo real-estate'/>
    </div>
    <div className='navigation'>
        <nav>
            <ul>
                <li><Link to='/' />Find a location</li>
                <li><Link to='/' />Rent your own</li>
                <li><Link to='/' />Nav Link</li>
                <li className='shareWork'>
                    <Link to='/' />Work with me
                    <img src={Arrow} alt='arrow link' />
                </li>
            </ul>
        </nav>
    </div>
    </header>
    )
}