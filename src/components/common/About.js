import React from 'react';

const profile = {
    about: {
        value:
            [`10+ years developing quality applications, from backend services, front end applications, wpf interfaces for home automation
    purposes, screen scrappers, Golang, Docker, gRPC, Microservices. Mayor knowledge with .Net(WPF, Windows Phone, WCF, Web Api Rest, MVC, ASP.NET, REST API),
    HTML, JavaScript and some others JavaScript libraries and frameworks such as Datatable, Cycle, JQuery, JQuery UI, AngularJS,
    Angular, React.Experience in Android, Java, PHP.`,
                `Looking for new challenges to make myself a better person, and growth as a professional. Having exciting projects with new
        technologies and of course new experiences.`,
                ],
        label: 'About',
    },

    basicInfo: {
        value: {
            age: { label: 'Age' },
            email: { value: 'contact@gerardohp.dev', label: 'Email' },
            phone: { value: '+52 *** *** ****', label: 'Phone' },
            location: { value: 'León, Guanajuato México', label: 'Location' },
            languages: { value: 'English, Spanish', label: 'Language(s)' }
        }, label: 'Basic Information'
    },
}

const About = () => {
    const { basicInfo } = profile;
    basicInfo.value.age.value = (new Date().getFullYear()) - 1988;
    return (
        <div className="section" id="about">
            <div className="container">
                <div className="card" data-aos="fade-up" data-aos-offset="10">
                    <div className="row">
                        <CardBody label={profile.about.label} content={profile.about.value.map((paragraph, index) => <p key={index}>{paragraph}</p>)} />
                        <CardBody label={profile.basicInfo.label} content={Object.values(basicInfo.value).map((entry, index) => <InfoEntry key={index} firstEntry={index === 0} entry={entry} />)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const CardBody = ({ label, content }) => {
    return (
        <div className="col-lg-6 col-md-12">
            <div className="card-body">
                <div className="h4 mt-0 title" >{label}</div>
                {content}
            </div>
        </div>
    );
};

const InfoEntry = ({ firstEntry, entry: { value, label } }) => {
    return (
        <div className={`row${firstEntry ? '' : ' mt-3'}`}>
            <div className="col-sm-4">
                <strong className="text-uppercase">{label}:</strong>
            </div>
            <div className="col-sm-8">{value}</div>
        </div>
    );
}

export default About;