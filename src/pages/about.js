import React from 'react'
import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/Sidebar/index'

import pic8 from '../assets/images/pic08.jpg';


const About = () => (
    <Layout>
        <SideBar />
        
        <div id="main">
            <section id="about" className="three">
                <div className="container">
                    <header>
                        <h2>About Me</h2>
                    </header>

                    <a href="#" className="image featured">
                        <img src={pic8} alt="" />
                    </a>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.

                    </p>
                </div>
            </section>
        </div>
        <PageFooter />
    </Layout>
)

export default About