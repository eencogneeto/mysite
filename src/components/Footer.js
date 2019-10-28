import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        {/* <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li> */}
                        {/* <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li> */}
                        {/* <li><a href="#" className="icon fa-facebook"><span className="label">Facebbok</span></a></li> */}
                        <li><a href="mailto:wisuchoi@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                        <li><a href="https://github.com/eencogneeto" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://sg.linkedin.com/in/wisuchoi" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; </li><li>Image: White Cliffs at Dover, UK</li>
                        {/* <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
