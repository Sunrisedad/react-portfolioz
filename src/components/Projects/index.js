import React from 'react'
import './Projects.css'

function Projects() {

        return (
                <section id="projects" class="Portfolio">
                <div class="myProjects">
                    <div class="project-container">
        
                        <a class="secondary image1" href="https://bhyland95.github.io/Project1/" target="_blank">
                            <div class="project-display ">
                                <div class="project-title">
                                    <h3>Travel Bonanza!</h3>
                                    <a className="github-link" href='https://github.com/Sunrisedad/GroupProject1' target="_blank"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                        </a>
        
                        <a class="secondary image2" href="https://mighty-beach-16124.herokuapp.com/" target="_blank">
                            <div class="project-display">
                                <div class="project-title">
                                    <h3>Note Taker</h3>
                                    <a className="github-link" href='https://github.com/Sunrisedad/note-taker' target="_blank"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                        </a>
        
                        <a class="secondary image3" href="https://sunrisedad.github.io/Weather-Dashboard/" target="_blank">
                            <div class="project-display">
                                <div class="project-title">
                                    <h3>Weather Dashboard</h3>
                                    <a className="github-link" href='https://github.com/Sunrisedad/Weather-Dashboard' target="_blank"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                        </a>
        
                        <a class="secondary image4" href="https://github.com/Sunrisedad/social-network-api" target="_blank">
                            <div class="project-display">
                                <div class="project-title">
                                    <h3>Social Network API</h3>
                                    <a className="github-link" href='https://github.com/Sunrisedad/social-network-api' target="_blank"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                        </a>

                        <a class="secondary image5" href="https://tomodachi-sadboitay.herokuapp.com/" target="_blank">
                            <div class="project-display">
                                <div class="project-title">
                                    <h3>Tomodachi</h3>
                                    <a className="github-link"  href='https://github.com/Johnson90cm/Tomodachi' target="_blank"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                        </a>

                        <a class="secondary image6" href="https://sunrisedad.github.io/run-buddy/" target="_blank">
                            <div class="project-display">
                                <div class="project-title">
                                    <h3>Run-Buddy</h3>
                                    <a className="github-link"  href='https://github.com/Sunrisedad/run-buddy' target="_blank"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </section>
        )
}

export default Projects