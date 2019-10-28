import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Choi Wi Su </strong><br />
                    Coder | Musician <br />
                    </h1>
                    <br />
                    {/* crafted by <a href="http://html5up.net">HTML5 UP</a>.</h1> */}
                    <h5><a href="#">  About  </a><br /></h5>
                    <h5><a href="#skills">  Skills  </a><br /></h5>
                    <h5><a href="#work">  Work  </a><br /></h5>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
