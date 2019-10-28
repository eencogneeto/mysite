import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

// import about from './about'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Choi Wi Su"
        const siteDescription = "Choi Wi Su's site"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="about">
                        <header className="major">
                            <h2>Hello! I'm Wi Su.</h2>
                        </header>
                        <p>I am currently pursuing my Bachelor's in Computer Science at the National University of Singapore.</p>
                        <ul className="actions">
                            <Link to="/about" className="button">More about me</Link>
                        </ul>
                    </section>

                    <section id="skills">
                        <h2>Technical Skills</h2>
                        <p>
                            I am familiar with:
                            <ul>
                                <li>
                                    <strong>Javascript</strong> and <strong>React</strong> framework for the frontend.
                                </li>
                                <li>
                                    <strong>Python</strong> for working with data, web automation, scraping, <strong>Flask</strong> for 
                                    web framework.
                                </li>
                                <li>
                                    <strong>Scikit-learn</strong>, <strong>Tensorflow</strong> and <strong>Keras</strong> for 
                                    machine learning/deep learning.
                                </li>
                                <li>
                                    <strong>MongoDB</strong> for NoSQL.
                                </li>
                            </ul>
                        </p>
                        <p>
                            There are other technologies I have tinkered with in the past which I shall not detail here. 
                            My <strong>resume is available upon request</strong>, please do <a href="#getintouch">get in touch</a>! 
                        </p>
                        {/* <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul> */}
                    </section>

                    <section id="work">
                        <h2>Recent Work</h2>

                        {/* <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="https://github.com/eencogneeto" className="button">Github Portfolio</a></li>
                        </ul> */}

                        <p>
                            - Will be updating soon! -
                        </p>
                    </section>

                    <section id="getintouch">
                        <h2>Get In Touch</h2>
                        <p>Send me an email to my <a href="mailto:wisuchoi@gmail.com">personal</a> or <a href="mailto:wisuchoi@u.nus.edu">school</a> account 
                        to discuss possible job/internship opportunities, or if you simply want to have chat.</p>
                        {/* <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex