import React from 'react'
import { Link } from "gatsby"
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'

class Mazegeneratesolve extends React.Component {

    render() {
        const siteTitle = "project mazegeneratesolve"
        const siteDescription = "project mazegeneratesolve"

        return (
            <Layout>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Maze Generation and Solver</h2>
                        </header>
                        <p>
                            This is a simple javascript website which visualizes the generation and solving of mazes.
                        </p>
                        <p>
                            For maze generation, I have implemented random walk (Aldous-Broder). I will be implementing Wilson's soon.
                        </p>
                        <p>
                            For maze solving, I have implemented DFS, BFS and Best First Search.
                        </p>
                        <p>
                            Using this tool is simple, just click on the buttons in the order:
                            <ul>
                                <li>
                                    Generate a maze.
                                </li>
                                <li>
                                    After the maze is completely generated, solve the maze using one of the solving algorithms. Easy!
                                </li>
                                <li>
                                    Pause animation and click on step-by-step button to see the algorithm by step, resume if you're tired.
                                </li>
                            </ul>
                        </p>
                        <p>
                            Do check out the <a href="https://eencogneeto.github.io/maze-generater-solver/">site directly</a>, there may be some bugs.
                        </p>
                        <p>
                            I hope you will find this tool useful!
                        </p>
                        <iframe title={siteTitle} src="https://eencogneeto.github.io/maze-generater-solver/" width="900" height="600"></iframe>
                        <ul className="actions">
                            <Link to="/#work" className="button">Back</Link>
                        </ul>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default Mazegeneratesolve