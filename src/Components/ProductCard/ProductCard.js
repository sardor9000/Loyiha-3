import React, { Component } from 'react'
import '../css/section.css'




class ProductCard extends Component{
  constructor() {
    super()
  }
  render() {

    console.log(this.props.data)

    const data = this.props.data

    return <div className="card text-bg-light mb-3" id='section_card' style={{ maxWidth: "18rem" }}>
      <div class="card_header" id='section_card_name'>
        {this.props.data.card_header}
             </div>
              <div class="card-body" id='section_card_item_wrap'>
                  <h5 class="card_title" id='section_card_moth'>
                    {this.props.data.card_title}
                  </h5>
        <p class="card_text" id='section_card_p'>
          {this.props.data.card_text}
              </p>
            <button type="button" class="btn btn-primary" id='sectiion_card_btn'>Sign up for free</button>
            </div>
          </div>
  }
}


export default ProductCard