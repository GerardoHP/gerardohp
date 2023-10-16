import React from 'react';
import Header from './common/Header';
import About from './common/About';
import ProfilePage from './common/ProfilePage';
import Skills from './common/Skills';
import CardContainer from './common/CardContainer';
import Contact from './common/Contact';
import Footer from './common/Footer';

class App extends React.PureComponent {
  profile = {
    experience: {
      section: 'experience',
      title: 'Work Experience',
      cards: [
        {
          range: '2020-PRESENT',
          header: 'Wizeline',
          position: 'Senior Software Engineer | Tech Lead',
          description: `Promoter of best practices in the team, including correct usage of ORM (EFCore) tools, branch 
          management, solution structure, team communication. Collaborating as Squad lead, using design patterns to 
          create scalable, easy to understand and maintainable code. `,
          bullets: {
            description: `Designing and implementing architecture patterns 
          to improve the performance and maintainability of the code such as: 
          `,
            list:[
               "Orchestrator pattern for the registrations project",
               "Builder design pattern for the applicants",
               "Adding API gateway to the all the solution",
            ]
          },
          link: '/experience/wizeline'
        },
        {
          range: '2015-2020',
          header: 'Unosquare',
          position: 'Senior Fullstack Software Engineer',
          description: `Working on different kind of apps, services, platforms. Working on several business types 
          medical, insurance, banking, apps. `,
          link: '/experience/unosquare',
        },
        {
          range: '2015',
          header: 'KSP',
          position: 'Senior Fullstack Software Engineer',
          description: `Development from scratch an ERP for a leader company of footwear business in Mexico.`
        },
        {
          range: '2011-2014',
          header: 'Andrea',
          position: 'Software Engineer',
          description: `Maintaining legacy site and developing new modules that helps the business increase sales by 
          providing tools to create new footwear deals and publish them.`,
          link: '/experience/andrea',
        },
        {
          range: '2010-2011',
          header: 'PHI-IT',
          position: 'Junior Software Engineer',
          description: `Creating an invoice system from scratch and having the ability to update the system as the 
          Service tax administration releases new requirements.`,
          link: '/experience/phi-it',
        },
      ]
    },
    education: {
      section: 'education',
      title: 'Education',
      cards: [
        {
          range: '2005-2009',
          header: "Bachelor's Degree",
          position: 'Technological Institute of Celaya',
          category: 'Computer Systems Engineer',
          description: `Obtain and maintain an scholarship throughout all the studies, having an average of 87. And 
          finishing the degree through a project obtaining 100 score that led to automatically obtaining the degree.`,
        }
      ]
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="page-content">
          <div>
            <ProfilePage />
            <About />
            <Skills />
            {/* <Portfolio /> Not displaying for the moment */}
            <CardContainer {...this.profile.experience} />
            <CardContainer {...this.profile.education} />
            {/* <Reference /> Not displaying for the moment */}
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
