import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <a className='header_a'>Company Name</a>
          <ul className='header_items'>
            <li><a>Features</a></li>
            <li><a>Enterprise</a></li>
            <li><a>Support</a></li>
            <li><a>Pricing</a></li>
            <button type="button" class="btn btn-primary">Sign up</button>
         </ul>
      </header>
      <section className='section'>
        <h1 className='section_h1'>Pricing</h1>
        <p className='section_p'>
          Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
        </p>
        <div className='section_box_wrapper'>
          <div className="card text-bg-light mb-3" id='section_card' style={{ maxWidth: "18rem" }}>
             <div class="card-header" id='section_card_name'>Header</div>
              <div class="card-body" id='section_card_item_wrap'>
                  <h5 class="card-title" id='section_card_moth'>$0 / mo</h5>
              <p class="card-text" id='section_card_p'>10 users included
                    2 GB of storage
                    Email support
                    Help center access.</p>
            <button type="button" class="btn btn-primary" id='sectiion_card_btn'>Sign up for free</button>
            </div>
          </div>
           <div className="card text-bg-light mb-3" id='section_card' style={{ maxWidth: "18rem" }}>
             <div class="card-header" id='section_card_name'>Pro</div>
              <div class="card-body" id='section_card_item_wrap'>
                  <h5 class="card-title" id='section_card_moth'>$15 / mo</h5>
              <p class="card-text" id='section_card_p'>20 users included
                      10 GB of storage
                      Priority email support
                Help center access
              </p>
            <button type="button" class="btn btn-primary" id='sectiion_card_btn2'>Get started</button>
            </div>
          </div>
           <div className="card text-bg-light mb-3" id='section_card' style={{ maxWidth: "18rem" }}>
             <div class="card-header" id='section_card_name'>Enterprise</div>
              <div class="card-body" id='section_card_item_wrap'>
                  <h5 class="card-title" id='section_card_moth'>$29 / mo</h5>
              <p class="card-text" id='section_card_p'>30 users included
                    15 GB of storage
                    Phone and email support
                    Help center access</p>
            <button type="button" class="btn btn-primary" id='sectiion_card_btn2'>Contact us</button>
            </div>
          </div>
         <div className='section_underline'></div>
        </div>
      </section>

      <footer>
        <div>
          <img src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg'></img>
          <p>© 2017-2018</p>
        </div>
        <div>
          <h3>Features</h3>
          <li>Random feature</li>
          <li>Team feature</li>
          <li>Stuff for developers</li>
          <li>Another one</li>
          <li>Last time</li>
        </div>
         <div>
          <h3>Resources</h3>
          <li>Resource</li>
          <li>Resource name</li>
          <li>Another resources</li>
          <li> Final resource</li>
        </div>
         <div>
          <h3>About</h3>
          <li>Team</li>
          <li>Locations</li>
          <li>Privacy</li>
          <li>Terms</li>
        </div>
      </footer>
    </div>
  );
}

export default App;
