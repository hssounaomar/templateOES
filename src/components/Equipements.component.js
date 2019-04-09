
import React, { Component } from 'react';
import Filter from './Filter.component';

class Equipements extends Component {

    state = {
        toggleFilter: false
    }

    toggleClassFilter = (e) => {
        this.setState({toggleFilter: !this.state.toggleFilter})
    }

  render() {
    return (


<section className="htc__product__area shop__page ptb--130 bg__white">
            <div className="container">
                <div className="htc__product__container">
                  
                    <div className="row">
                       
                        <div className="col-md-12">
                            <div className="filter__menu__container">
                                <div className="product__menu" id="test1">
                                    <button data-filter="*"  className="is-checked">All</button>
                                    <button data-filter=".cat--1">Furnitures</button>
                                    <button data-filter=".cat--2">Bags</button>
                                    <button data-filter=".cat--3">Decoration</button>
                                    <button data-filter=".cat--4">Accessories</button>
                                </div>
                                <div className="filter__box">
                                    <a className="filter__menu" onClick={this.toggleClassFilter}  href="#">filter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    <Filter toggleFilter={this.toggleClassFilter} className={this.state.toggleFilter ? 'filter__wrap filter__menu__on' : 'filter__wrap'}></Filter>

                    <div className="row">
                        <div className="product__list another-product-style">
                     
                            <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/1.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                      
                            <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/2.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">BO&Play Wireless Speaker</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--2">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/3.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Brone Candle</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--4">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/4.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Brone Lamp Glasses</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                     
                            <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12 cat--2">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/5.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Clothes Boxed</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--3">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/6.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Liquid Unero Ginger Lily</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--2">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/7.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Miliraty Backpack</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--2">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/8.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Saved Wines Corkscrew</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                     
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--4">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/9.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Simple Fabric Bags</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--3">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/10.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Simple Fabric Chair</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--4">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/11.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Unero Round Sunglass</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--3">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/12.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Unero Small Bag</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                       
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--3">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/13.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Wood Complex Lamp Box</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                       
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--4">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/14.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Wood Long TV Board</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          
                            <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--4">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/15.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Wood Simple Chair V2</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                         
                            <div className="col-md-3 single__pro col-lg-3 hidden-sm col-xs-12 cat--3">
                                <div className="product foo">
                                    <div className="product__inner">
                                        <div className="pro__thumb">
                                            <a href="#">
                                                <img src="images/product/16.png" alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="product__hover__info">
                                            <ul className="product__action">
                                                <li><a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#"><span className="ti-plus"></span></a></li>
                                                <li><a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span></a></li>
                                                <li><a title="Wishlist" href="wishlist.html"><span className="ti-heart"></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product__details">
                                        <h2><a href="product-details.html">Wood Simple Clock</a></h2>
                                        <ul className="product__price">
                                            <li className="old__price">$16.00</li>
                                            <li className="new__price">$10.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                
                    <div className="row mt--60">
                        <div className="col-md-12">
                            <div className="htc__loadmore__btn">
                                <a href="#">load more</a>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </section>
)
    }
}

export default Equipements 