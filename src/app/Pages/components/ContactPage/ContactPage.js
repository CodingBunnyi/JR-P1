import React from 'react';
import styled from 'styled-components';
import PageTitle from '~/components/PageTitle';
import PageHeader from '~/components/PageHeader';
import PageContent from '~/components/PageContent';
import SubTitle from '~/components/SubTitle';

const ContactPageContent = styled(PageContent)`
    display: flex;
`;

const ContactInfo = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const ContactPage = () => (
    <section className="page" id="CONTACT">
        <PageHeader>
            <PageTitle>Contact</PageTitle>
        </PageHeader>

        <ContactPageContent>
            <div class="content-left">
                <div class="block-title">
                    <SubTitle>Get in <span class="highlight">Touch</span></SubTitle>
                </div>

                <div id="map"></div>

                <ContactInfo>
                    <div class="ci-icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>

                    <div class="ci-text">
                        <h5><span>Brisbane, Australia</span></h5>
                    </div>
                </ContactInfo>

                <ContactInfo>
                    <div class="ci-icon">
                        <i class="fa fa-envelope"></i>
                    </div>

                    <div class="ci-text">
                        <h5><span>info@jiangren.com.au</span></h5>
                    </div>
                </ContactInfo>

                <ContactInfo>
                    <div class="ci-icon">
                        <i class="fa fa-phone"></i>
                    </div>

                    <div class="ci-text">
                        <h5><span>+123 654 78900</span></h5>
                    </div>
                </ContactInfo>

                <ContactInfo>
                    <div class="ci-icon">
                        <i class="fa fa-check"></i>
                    </div>

                    <div class="ci-text">
                        <h5><span>Freelance Available</span></h5>
                    </div>
                </ContactInfo>

            </div>

            <div class="content-right">
                <div class="block-title">
                    <SubTitle>Contact <span class="highlight">Form</span></SubTitle>
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
        </ContactPageContent>
    </section>
);

export default ContactPage;