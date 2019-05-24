import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
        <div class="footer">
            <div class="container">
                <div class="social">
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                    </ul>
                </div>
                <div class="border"></div>
                <div class="agileits-w3layouts-copyright">
                    <p>© 2017 Photo Maker. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
                </div>
            </div>
        </div>
        );
    }
}

export default Footer;