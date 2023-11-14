import React, { Component } from 'react'
import Header from './Header'
import Banner from './Banner'
import Category from './Category'
import Footer from './Footer'

// Style CSS
import "./style.css"
export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Banner />
        <Category />
        <Footer />
      </>
    )
  }
}
