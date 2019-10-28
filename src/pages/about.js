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
                            My studies are focused on AI, Machine Learning and Deep Learning. While I do find the theroretical 
                            foundations and logic beneath the subject interesting, I very much prefer to be building something 
                            which I, and hopefully many others can use.
                        </p>
                        <p>
                            My career goal is to be a full stack developer, in the machine learning domain, to get machine learning 
                            models deployed to a wider audience to solve some problems or satisfy unmet needs.
                        </p>
                        <p>
                            When I am not coding or grinding through academics, I spend my time mainly on the following:
                            <ul>
                                <li>
                                    <strong>Music</strong>: Beyond Grade 8 piano, violin and theory, I attended some 
                                    higher-level theory classes in the Yong Siew Toh Conservatory on Bach Suites, Romantic Styles 
                                    and 20th-century music.
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