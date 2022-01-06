import React from 'react'
import './about.css'

function About() {

        return (
                <div class="section">
                        <div class="container">
                                <div class="content-section">
                                        <div class="title">
                                                <h2>Hi, I'm Sheldon Collins!</h2>
                                        </div>
                                        <div class="content">
                                                <h4>Web Developer</h4>
                                                <p>My name is Sheldon Collins, I was born in Texas but spent most of my life in Utah. I am an aspiring Full Stack Developer
                                                and have always had interest in Web Development. You will find some of my work under the Projects section. Enjoy!
                                                        
                                                </p>

                                        </div>

                                        

                                </div>


                                <div class="image-section">
                                        <img className="same" src={require("../../Assets/Profile.jpg").default}></img>
                                </div>
                        </div>
                </div>
        )
}

export default About

