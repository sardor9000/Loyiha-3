import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ProductCard from './Components/ProductCard/ProductCard';
import Footer from './Components/Footer/Footer';

// Header uchun data
const headerData = {
  companyName: "Company Name",
  links: ["Features", "Enterprise", "Support", "Pricing"],
  buttonText: "Sign up"
};

// Card uchun data
const dataProducts = [
  {
     card_header: 'Header',
     card_title: '$13 / mo',
     card_text: '43432 users included   2 GB of storage Email support Help center access.',
               
  },
    {
     card_header: 'Standart',
     card_title: '$99 / mo',
     card_text: '43432 users included   2 GB of storage Email support Help center access.',
               
  },
      {
     card_header: 'Pro',
     card_title: '$100 / mo',
     card_text: '43432 users included   2 GB of storage Email support Help center access.',
               
  },

]

// Footer uchun data
const footerData = {
  features: ["Random feature", "Team feature", "Stuff for developers", "Another one", "Last time"],
  resources: ["Resource", "Resource name", "Another resources", "Final resource"],
  about: ["Team", "Locations", "Privacy", "Terms"]
};




class App extends Component{
  render() {
    return <div className="App">
      {/* Bu joyda header qismi qoyilgan  */}
        <Header 
          companyName={headerData.companyName}
          links={headerData.links}
          buttonText={headerData.buttonText}
        />
      <section className='section'>
        <h1 className='section_h1'>Pricing</h1>
        <p className='section_p'>
          Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.
        </p>
        <div className='section_box_wrapper'>
          {/* Bu joyda card qismi qoyilgan  */}
          {
            dataProducts.map((value, index) => {
             return <div key={index}>
                 <ProductCard data={value} />
              </div>
            })
          }
        </div>
      </section>
      <div>
     <Footer 
        features={footerData.features} 
        resources={footerData.resources} 
        about={footerData.about} 
/>


      </div>
    </div>
  }
}

export default App;
