import React from 'react'
import './resume.css'
function Resume() {

        return (
                <section>
                        <br />
                        
                <div>
                        <h2>Front-end Skills</h2>
                        <ul className="skills">
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>responsive design</li>
                                

                        </ul>
                </div>
                        
                <div>
                        <h2>Back-end Skills</h2>
                        <ul className="skills">
                                <li>APIs</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL, Sequelize</li>
                                <li>MongoDB, Mongoose</li>
                                <li>REST</li>
                                <li>GraphQL</li>

                        </ul>
                </div>
                </section>
        )
}

export default Resume