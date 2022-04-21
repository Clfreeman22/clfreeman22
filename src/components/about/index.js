import React from 'react';
import snowman from '../../snowman.jpg';
import './style.css';

const About = () => {
    return(
        <section>
            <div className='mybio'>                  
                <img src={snowman} alt='Professional Profile' className='profilepic'/>               
                <p className='myinfo'>
                    My name is Charlie Freeman.  I have a 7 year old son and live in Smyrna, TN. I have lived in TN 
                    for over 20 years and enjoy the Nashville area. With my personal time I enjoy kayaking, camping, 
                    fishing, shooting, playing cards, board games, and playing baseball and basketball with my son. 
                    In my professional life I am a leader that believes fluidity and teamwork are keys to success. I am very confident 
                    in my ability to problem solve and think through solutions looking for potential problems. I enjoy 
                    and am constantly learning everything I can. This gives me the ability to see the big picture and 
                    make decisions that are sustainable and impactful over the long haul. I especially value my team 
                    members and their own growth in my company. I love coaching and giving my staff ownership of small 
                    responsibilities to increase buy-in.
                </p>
            </div>
            <div className='interests'>
                <h2 className='title'>Professional Ambitions and Interests</h2>
                <p className='myinfo'>
                    My name is Charlie Freeman.  I have a 7 year old son and live in Smyrna, TN. I have lived in TN 
                    for over 20 years and enjoy the Nashville area. With my personal time I enjoy kayaking, camping, 
                    fishing, shooting, playing cards, board games, and playing baseball and basketball with my son. 
                    In my professional life I am a leader that believes fluidity and teamwork are keys to success. I am very confident 
                    in my ability to problem solve and think through solutions looking for potential problems. I enjoy 
                    and am constantly learning everything I can. This gives me the ability to see the big picture and 
                    make decisions that are sustainable and impactful over the long haul. I especially value my team 
                    members and their own growth in my company. I love coaching and giving my staff ownership of small 
                    responsibilities to increase buy-in.
                </p>
            </div>
        </section>
    )
}

export default About;