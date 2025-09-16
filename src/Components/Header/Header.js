import React, { Component } from 'react';
import '../css/header.css';

class Header extends Component {
  render() {
    const { companyName, links, buttonText } = this.props;

    return (
      <div>
        <header className='header'>
          <a className='header_a'>{companyName}</a>
          <ul className='header_items'>
            {links.map((link, index) => (
              <li key={index}><a>{link}</a></li>
            ))}
            <button type="button" className="btn btn-primary">{buttonText}</button>
          </ul>
        </header>
      </div>
    )
  }
}

export default Header;
