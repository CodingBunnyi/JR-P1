import React from 'react';
const HomePage = () => (
    <section class="page active-page" id="HOME">
        <div class="page-header flex">
            <div class="header-left">
                <div class="photo">
                    <img src="images/photo.png"></img>
                </div>
            </div>

            <div class="header-right">
                <div class="title-block">
                    <h1>John Doe</h1>

                    <div>
                        <span class="occupation">Fronted-developer</span>
                    </div>
                </div>

                <div class="social-link">
                    <a href="#">
                        <i class="fab fa-twitter">
                            
                        </i>
                    </a>

                    <a href="#">
                        <i class="fab fa-facebook">
                            
                        </i>
                    </a>

                    <a href="#">
                        <i class="fab fa-instagram">
                            
                        </i>
                    </a>
                </div>
            </div>
        </div>

        <div class="page-content flex">
            <div class="content-left">
                <div class="block-title">
                    <h3>About<span class="highlight"> Me</span></h3>
                </div>

                <p>
                    Hello! I’m John Doe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.
                </p>
            </div>

            <div class="content-right">
                <ul class="info-list">
                    <li>
                        <span class="title">Age</span>
                        <span class="value">29</span>
                    </li>

                    <li>
                        <span class="title">Residence</span>
                        <span class="value">Australia</span>
                    </li>

                    <li>
                        <span class="title">Address</span>
                        <span class="value">Level 3 / 57 Coronation, Brisbane</span>
                    </li>

                    <li>
                        <span class="title">e-mail</span>
                        <a href="#"><span class="value email">info@jiangren.com.au</span></a>
                    </li>

                    <li>
                        <span class="title">Phone</span>
                        <span class="value">+0123 123 456 789</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
);

export default HomePage;