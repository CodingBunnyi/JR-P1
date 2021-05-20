import React from 'react';

const HomeHeader =  () => (
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
);

export default HomeHeader;