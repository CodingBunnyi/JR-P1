import React from 'react';

const ServicesPage = () => (
    <section class="page" id="SERVICES">
        <div class="page-header">
            <h2>Sevices</h2>
        </div>

        <div class="page-content">                 
            <div class="block-title">
                <h3>My <span class="highlight">Services</span></h3>
            </div>

            <div class="flex">                  
                <div class="services-block">
                    <div class="service-info">
                        <div class="service-image">
                            <img src="images/service/web_design_icon.png"></img>
                        </div>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>

                <div class="services-block">
                    <div class="service-info">
                        <div class="service-image">
                            <img src="images/service/photography_icon.png"></img>
                        </div>
                        <h4>Photography</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>

                <div class="services-block">
                    <div class="service-info">
                        <div class="service-image">
                            <img src="images/service/creativity_icon.png"></img>
                        </div>
                        <h4>Management</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>

                <div class="services-block">
                    <div class="service-info">
                        <div class="service-image">
                            <img src="images/service/advetising_icon.png"></img>
                        </div>
                        <h4>Advetising</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>

            <div class="block-title">
                <h3>Clients</h3>
            </div>

            <div class="flex client-content">
                <div class="client-block">
                    <a href="#">
                        <img src="images/clients/client_1.png"></img>
                    </a>
                </div>

                <div class="client-block">
                    <a href="#">
                        <img src="images/clients/client_2.png"></img>
                    </a>
                </div>

                <div class="client-block">
                    <a href="#">
                        <img src="images/clients/client_3.png"></img>
                    </a>
                </div>

                <div class="client-block">
                    <a href="#">
                        <img src="images/clients/client_4.png"></img>
                    </a>
                </div>

                <div class="client-block">
                    <a href="#">
                        <img src="images/clients/client_5.png"></img>
                    </a>
                </div>

                <div class="client-block">
                    <a href="#">
                        <img src="images/clients/client_6.png"></img>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default ServicesPage;