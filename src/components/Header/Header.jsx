import {Link} from 'react-router-dom'
import './header.css'

function Header(){
    return(
        <>
         <header className="header">
                <div className="d-header" >
                <img src="./logoNatureza365.png" alt="logo" />
                                <Link className='btn-link' to='/home'>
                        <button className='btn-header'>Home</button>
                    </Link>
                </div>
          </header >
        </>
    )
}

export default Header;