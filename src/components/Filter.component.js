import React, { Component } from 'react';


class Filter extends Component {
  render() {
    return (
        <div className={this.props.className}>
            <div className="filter__cart">
                <div className="filter__cart__inner">
                    <div onClick={this.props.toggleFilter} className="filter__menu__close__btn">
                        <a href="#"><i className="zmdi zmdi-close"></i></a>
                    </div>
                    <div className="filter__content">
                        
                        <div className="fiter__content__inner">
                            <div className="single__filter">
                                <h2>Sort By</h2>
                                <ul className="filter__list">
                                    <li><a href="#default" id="test">Default</a></li>
                                    <li><a href="#accessories">Accessories</a></li>
                                    <li><a href="#bags">Bags</a></li>
                                    <li><a href="#chair">Chair</a></li>
                                    <li><a href="#decoration">Decoration</a></li>
                                    <li><a href="#fashion">Fashion</a></li>
                                </ul>
                            </div>
                            <div className="single__filter">
                                <h2>Size</h2>
                                <ul className="filter__list">
                                    <li><a href="#xxl">XXL</a></li>
                                    <li><a href="#xl">XL</a></li>
                                    <li><a href="#x">X</a></li>
                                    <li><a href="#l">L</a></li>
                                    <li><a href="#m">M</a></li>
                                    <li><a href="#s">S</a></li>
                                </ul>
                            </div>
                            <div className="single__filter">
                                <h2>Tags</h2>
                                <ul className="filter__list">
                                    <li><a href="#">All</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Bags</a></li>
                                    <li><a href="#">Chair</a></li>
                                    <li><a href="#">Decoration</a></li>
                                    <li><a href="#">Fashion</a></li>
                                </ul>
                            </div>
                            <div className="single__filter">
                                <h2>Price</h2>
                                <ul className="filter__list">
                                    <li><a href="#">$0.00 - $50.00</a></li>
                                    <li><a href="#">$50.00 - $100.00</a></li>
                                    <li><a href="#">$100.00 - $150.00</a></li>
                                    <li><a href="#">$150.00 - $200.00</a></li>
                                    <li><a href="#">$300.00 - $500.00</a></li>
                                    <li><a href="#">$500.00 - $700.00</a></li>
                                </ul>
                            </div>
                            <div className="single__filter">
                                <h2>Color</h2>
                                <ul className="filter__list sidebar__list">
                                    <li className="black"><a href="#"><i className="zmdi zmdi-circle"></i>Black</a></li>
                                    <li className="blue"><a href="#"><i className="zmdi zmdi-circle"></i>Blue</a></li>
                                    <li className="brown"><a href="#"><i className="zmdi zmdi-circle"></i>Brown</a></li>
                                    <li className="red"><a href="#"><i className="zmdi zmdi-circle"></i>Red</a></li>
                                    <li className="orange"><a href="#"><i className="zmdi zmdi-circle"></i>Orange</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Filter
