import React from 'react';

const ContactPage = () => (
    <section class="page" id="CONTACT">
        <div class="page-header">
            <h2>Contact</h2>
        </div>

        <div class="page-content flex">
            <div class="content-left">
                <div class="block-title">
                    <h3>Get in <span class="highlight">Touch</span></h3>
                </div>

                <div id="map"></div>

                <div class="contact-info-block">
                    <div class="ci-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>

                    <div class="ci-text">
                        <h5><span>Brisbane, Australia</span></h5>
                    </div>
                </div>

                <div class="contact-info-block">
                    <div class="ci-icon">
                        <i class="fa fa-envelope"></i>
                    </div>

                    <div class="ci-text">
                        <h5><span>info@jiangren.com.au</span></h5>
                    </div>
                </div>

                <div class="contact-info-block">
                    <div class="ci-icon">
                        <i class="fa fa-phone"></i>
                    </div>

                    <div class="ci-text">
                        <h5><span>+123 654 78900</span></h5>
                    </div>
                </div>

                <div class="contact-info-block">
                    <div class="ci-icon">
                        <i class="fa fa-check"></i>
                    </div>

                    <div class="ci-text">
                        <h5><span>Freelance Available</span></h5>
                    </div>
                </div>

            </div>

            <div class="content-right">
                <div class="block-title">
                    <h3>Contact <span class="highlight">Form</span></h3>
                </div>

                <form>
                    <div class="form-group">
                        <i class="fa fa-user"></i>
                        <label>Full Name</label>
                        <input id="form_name" type="text" name="name" class="form-control" placeholder required="required" />
                    </div>

                    <div class="form-group">
                        <i class="fa fa-envelope"></i>
                        <label>Email Address</label>
                        <input id="form_email" type="text" name="email" class="form-control" placeholder required="required" />
                    </div>

                    <div class="form-group">
                        <i class="fa fa-comment"></i>
                        <label>Message for Me</label>
                        <textarea id="form_comment" type="text" name="comment" class="form-control" placeholder required="required"></textarea>
                    </div>

                    <input class="submit-btn" type="submit" value="SEND MESSAGE" />
                </form>
            </div>        
        </div>
    </section>
);

export default ContactPage;