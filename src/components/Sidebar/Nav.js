import React from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from '../Scroll';
import { Link } from 'gatsby'

import './sidebar.css'


export default function Nav({ sections = [] }) {
  return (
    <nav id="nav">
      <ul>
        <li>
        <Link to="/" className="NavItems">
        <span className="icon fa-home" />
          Home
        </Link>
        </li>
        
        <li>
        <Link to="/about">
        <span className="icon fa-user" />
          About Me
        </Link>
        </li>

        <li >
        <Link to="/shop">
          <span className="icon fa-cart-plus " />
          Shop
        </Link>
        </li>

        <li>
        <Link to="/gallery">
          <span className="icon fa-photo" />
          Gallery
        </Link>
        </li>

        {/*<Scrollspy
          items={sections.map(s => s.id)}
          currentClassName="active"
          offset={-300}
        >
          {sections.map(s => {
            return (
              <li key={s.id}>
                <Scroll type="id" element={s.id}>
                  <a href={`#${s.id}`} id="top-link">
                    <span className={`icon ${s.icon}`}>{s.name}</span>
                  </a>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>*/}
      </ul>
    </nav>
  );
}
