import React from 'react'
import { Link } from "gatsby"
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'

class Twelvetonematrix extends React.Component {

    render() {
        const siteTitle = "project twelvetonematrix"
        const siteDescription = "project twelvetonematrix"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Twelve-Tone matrix generator</h2>
                        </header>
                        <p>
                            For more information on twelve-tone serialism, you can read up on <a href="https://en.wikipedia.org/wiki/Twelve-tone_technique#Tone_row">wikipedia</a>.
                        </p>
                        <p>
                            One of the most time-consuming aspects of this is to write out the 12x12 matrix to be used in the analysis 
                            of such compositions, and forming the basis of your own composition. Having experienced spending time writing 
                            it out for myself, that formed the motivation to create this simple online tool.
                        </p>
                        <p>
                            Using this tool is simple:
                            <ul>
                                <li>
                                    Define your <strong>prime form of the row</strong> by sliding the notes around horizontally and rearranging 
                                    to your needs.
                                </li>
                                <li>
                                    Click on the blue <strong>Generate Matrix</strong> button to generate the matrix. Easy!
                                </li>
                            </ul>
                        </p>
                        <p>
                            Do visit the <a href="https://twelvetonematrix.netlify.com/">site directly</a>, and use on desktop fullscreen, I have not optimized resizing yet.
                        </p>
                        <p>
                            I hope you will find this tool useful! (especially you music students)
                        </p>
                        <iframe src="https://twelvetonematrix.netlify.com/" width="900" height="600"></iframe>
                        <ul className="actions">
                            <Link to="/#work" className="button">Back</Link>
                        </ul>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default Twelvetonematrix