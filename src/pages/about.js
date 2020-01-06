import React from 'react'
import { Link } from "gatsby"
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'

class About extends React.Component {

    render() {
        const siteTitle = "Choi Wi Su about"
        const siteDescription = "Choi Wi Su's about"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Hello! I'm Wi Su.</h2>
                        </header>
                        <p>
                            I am currently pursuing my Bachelor's in Computer Science at the National University of Singapore.
                        </p>
                        <p>
                            My studies are focused on AI, Machine Learning and Deep Learning. I also have some interest in cloud 
                            computing, quantum computing and robotics. While I do find the theroretical foundations and logic 
                            beneath the subject interesting, I prefer to be building solutions which I, and hopefully many others 
                            out there, can find useful.
                        </p>
                        <p>
                            My career goal is to be a full stack developer involved in some of the domains listed above, and 
                            eventually a software architect.
                        </p>
                        <p>
                            During my free time, I spend my time mainly on the following:
                            <ul>
                                <li>
                                    <strong>Music</strong>: Beyond Grade 8 piano, violin and theory, I attended some 
                                    higher-level theory classes in the Yong Siew Toh Conservatory on Bach Suites, Romantic Styles 
                                    and 20th-century music. I have some interest in how machine learning can be applied to the 
                                    composition and analytical process.
                                </li>
                                <li>
                                    <strong>German</strong>: My goal is to eventually be able to sit through Wagner's <i>Der 
                                    Ring des Nibelungen</i> in its entirety without having to refer to a translation. 
                                    This will actually be my 4<sup>th</sup> language.
                                </li>
                            </ul>
                        </p>
                        <ul className="actions">
                            <Link to="/" className="button">Back</Link>
                            {/* <li><a href="#" className="button">Learn More</a></li> */}
                        </ul>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default About