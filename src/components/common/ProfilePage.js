import React from 'react';
import SocialMedia from './SocialMedia';

const profile = {
    name: 'Gerardo Hernández',
    postion: 'Senior Software Engineer',
    contactLabel: 'Contact Me',
    downloadLabel: 'Download CV'
}

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <div className="wrapper">
                <div
                    className="page-header page-header-small"
                    filter-color="green"
                >
                    <div
                        className="page-header-image"
                        data-parallax="true"
                        style={{ backgroundColor: "#FF5C5C" }}
                    ></div>
                    <div className="container">
                        <div className="content-center">
                            <div className="cc-profile-image">
                                <a href="#profile">
                                    <img src="images/profileimage.jpg" alt="Profile" />
                                </a>
                            </div>
                            <div className="h2 title">{profile.name}</div>
                            <p className="category text-white">
                                {profile.postion}
                            </p>
                            <a
                                className="btn btn-primary smooth-scroll mr-2"
                                href="#contact"
                                data-aos="zoom-in"
                                data-aos-anchor="data-aos-anchor"
                            >
                                {profile.contactLabel}
                            </a>
                            <a
                                className="btn btn-primary"
                                href="gerardo_hernandez.pdf"
                                data-aos="zoom-in"
                                data-aos-anchor="data-aos-anchor"
                                download
                            >
                                {profile.downloadLabel}
                            </a>
                        </div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;