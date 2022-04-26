import React from 'react';
import profilepic from '../../utils/images/profile-pic.jpg';
import './style.css';

const About = () => {
    return(
        <section>
            <div className='mybio'>                  
                <img src={profilepic} alt='Professional Profile' className='profilepic'/>               
                <p className='myinfo'>
                    My name is Charlie Freeman. I live in Smyrna, TN and have a eight year old son named Wyatt. I am looking 
                    for opportunities in which allow growth and continued development in a career field that better fits my 
                    personal interests. I enjoy learning new skills and applying them in my daily routine. In my free time I 
                    love puzzles, board games, social events, and playing sports or being outdoors with my son. In my 
                    professional life I am committed to achieving a standard that exceeds what is set by my employer. I 
                    continue to learn and improve on whatever it is I am currently working on. 
                </p>
            </div>
            <div className='interests'>
                <h2 className='title'>Professional Ambitions and Interests</h2>
                <p className='myinfo'>
                    I have always taken an intrest in computers and engineering. In highschool I took three different elective classes 
                    in computer hardware and networking. I was also on the Robotics and Math team. I took two different classes 
                    in college that pertained to coding one was MatLab. The other was in material analysis where we used excell to 
                    collect and analyze data sets on different materials to determine specific properites. In school I took more 
                    interest in physics and math. As technology has progressed and coding has become an intergal part of all 
                    engineering fields so has my interest in this field. I am especially interested in machine learning, data management,
                    and robotics. The coding I have covered up to this point I enjoy the most is back-end code such as SQL and MongoDB. 
                    Front-end code has been quicker for me to learn and utilize. As with this site I am currently working on adding a 
                    back-end server using node and express to create an interactive contact page that will foward emails directly to 
                    my personal email.   
                </p>
            </div>
        </section>
    )
}

export default About;