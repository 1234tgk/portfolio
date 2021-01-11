import React from 'react';
import './Projects.css';
import '../App.css';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <div className='projects' id='projects'>
            <h2>PROJECTS</h2>
            <div className='projects__container'>
                <div className='projects__wrapper'>
                <ul className='projects__cards'>
                        <ProjectCard
                            src='images/Set-Thumbnail.jpg'
                            text='Sunlight Exposure Tracker (SET) that tracks the amount of sunlight the user is exposed to.'
                            label='Hackathon'
                            path='https://devpost.com/software/sunlight-exposure-tracker-set'
                        />
                        <ProjectCard
                            src='images/Discord-Team-Builder-Thumbnail.png'
                            text='Discord team-building bot.'
                            label='Hackathon'
                            path='https://devpost.com/software/discord-team-builder'
                        />
                    </ul>
                    <ul className='projects__cards'>
                        <ProjectCard
                            src='images/Damp-Sky-Thumbnail.jpg'
                            text='JSON Course Schedule Viewer.'
                            label='Hackathon'
                            path='https://devpost.com/software/damp-sky-course-schedule-viewer'
                        />
                        <ProjectCard
                            src='images/RiNG-Thumbnail.jpg'
                            text='Android app that generates randomly-generated ridiculous names.'
                            label='Hackathon'
                            path='https://devpost.com/software/ridiculous-name-generator-ring'
                        />
                        <ProjectCard
                            src='images/Trash-Hunt-Thumbnail.jpg'
                            text='Simple pygame that controls a diver to collect garbage under the sea.'
                            label='Hackathon'
                            path='https://devpost.com/software/trash-hunt-kxjlv7'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects
