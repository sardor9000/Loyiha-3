import React, { Component } from 'react'
import '../css/footer.css';

class Footer extends Component {
  render() {
    const { features, resources, about } = this.props;
    return (
      <div>
        <footer>
          <div>
            <img src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg' alt="logo"/>
            <p>© 2017-2018</p>
          </div>

          <div>
            <h3>Features</h3>
            {features.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>

          <div>
            <h3>Resources</h3>
            {resources.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>

          <div>
            <h3>About</h3>
            {about.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
