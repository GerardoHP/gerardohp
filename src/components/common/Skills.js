import React from 'react';

const profile = {
    skillsLabel: 'Professional Skills',
    skills: [
        { technology: 'HTML', percent: 90, years: 9 },
        { technology: 'JavaScript', percent: 90, years: 8 },
        { technology: 'CSS', percent: 90, years: 9 },
        { technology: 'SASS', percent: 90, years: 3 },
        { technology: 'C#', percent: 95, years: 9 },
        { technology: 'React', percent: 90, years: 1 },
        { technology: 'AngularJS', percent: 90, years: 4 },
        { technology: 'Angular', percent: 90, years: 2 },
        { technology: 'NodeJS', percent: 75, years: 2 },
        { technology: 'Java', percent: 50, years: 1 },
    ]

}

const Skills = () => {
    return (
        <div className="section" id="skill">
            <div className="container">
                <div className="h4 text-center mb-4 title">
                    {profile.skillsLabel}
                </div>
                <div className="card"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <div className="card-body">
                        <div className="row">
                            {profile.skills.map(skill=><Skill key={skill.technology} {...skill}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ToDo: Add changer to display the years of experience 

const Skill = ({ technology, percent }) => {
    return (<div className="col-md-6">
        <div className="progress-container progress-primary">
            <span className="progress-badge">{technology}</span>
            <div className="progress">
                <div
                    className="progress-bar progress-bar-primary"
                    data-aos="progress-full"
                    data-aos-offset="10"
                    data-aos-duration="2000"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${percent}%` }}
                ></div>
                <span className="progress-value">{percent}%</span>
            </div>
        </div>
    </div>)
}

export default Skills;