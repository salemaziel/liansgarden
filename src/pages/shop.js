import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/Sidebar/index'
import Rgallery from '../components/Rgallery'
import Shoptop from '../assets/images/hills10.jpg'

import { Link } from 'gatsby'

const sections = [
    { id: 'shoptop', name: 'Featured', icon: 'fa-home' },
    { id: 'mygallery', name: 'Gallery', icon: 'fa-th' },
    { id: 'about', name: 'About Me', icon: 'fa-user' },
    { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
  ];

const Shop = () => (
    <Layout>
        <SideBar sections={sections} />
        <Link id="home" to="/" rel="preload" />
        <div id="main">
            {/*<section id="shoptop">
                <div className="container">
                    <div>
                        <img src={Shoptop} />
                    </div>
                </div>

</section>*/}
            <section id="mygallery" className="mygallery">
                <div className="container">
                    <Rgallery id="rgallery"/>
                </div>
                </section>
        </div>


    </Layout>
)

export default Shop