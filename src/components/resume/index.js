import React from 'react';
import './style.css';
const Resume = () => {

    return(
        <section>
            <div className='sections'>
                <h2 className='title'>Education</h2>
                    <div className='highschool'>
                        <div>
                            <h3>Blackman High School</h3>
                            <div>3.67 GPA</div>
                            <div>Graduated in 2007 with honors</div>
                        </div>
                        <div>
                            <h4>Programs and Achivements</h4>
                            <ul className='list'>
                                <li>Varsity Baseball</li>
                                <li>Beta Club</li>
                                <li>National Honors Society</li>
                                <li>Robotics Team</li>
                                <li>Math Team</li>
                                <li>JROTC</li>
                            </ul>
                        </div>
                    </div>
                    <div className='college'>
                        <div>
                            <h3>Tennessee Tech</h3>
                            <div>2.9 GPA</div>
                            <div>Majored in Mechanical Engineering</div>
                        </div>
                    </div>
                    <div className='professionaltraining'>
                        <div>
                            <h3>Vanderbuilt Full-Stack Coding Bootcamp</h3>
                            <div>Graduated in February 2022</div>
                            <div>
                                <h4>Languages Covered</h4>
                                <ul className='list'>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Node</li>
                                    <li>Express</li>
                                    <li>SQL</li>
                                    <li>MongoDB</li>
                                    <li>React</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='sections'>
                <h2 className='title'>Work Experience</h2>
                    <div>
                        <h3>Hickory Falls</h3>
                        <div>2006-2007</div>
                        <div>Food Expeditor - 2 Years</div>
                        <p>Bussed tables, trayed and ran food, assisted servers with large tables and other misc. tasks when asked upon.</p>
                    </div>
                    <div>
                        <h3>US Cold Storage</h3>
                        <div>2008-2010</div>
                        <div>Forklift Operator - 2 Years</div>
                        <p>Forklift Operator, Loaded and unloaded trucks both international and local shipments. Worked with inventory
                           specialist to located missing product. Picked and put away loads off the main receiving dock. </p>
                    </div>
                    <div>
                        <h3>Chilis</h3>
                        <div>2011-2017</div>
                        <div>Server/Cook - 2 Years, Manager - 5 Years</div>
                        <p>Service and Bar manager, ordered liquor and managed liquor and bar inventory. Responsible for all hiring, training,
                           scheduling, and disciplining for all front of house staff. Handled guest complaints and owned the guest experience 
                           in the dining room.</p>
                    </div>
                    <div>
                        <h3>Red Robin</h3>
                        <div>2017-Current</div>
                        <div>Kitchen Manager - 3 Years, General Manager - 2 Years</div>
                        <p>General Manager, Responsible for all aspects of the restaurant. This includes recruiting, training, and discipline
                           of all team members and mangers. I tract and manage all budgets and restaurant metrics for guest satisfaction. I 
                           oversee ordering, food quality, food safety, and team member safety. I handle all forecasting and scheduling of 
                           staff and managers ensuring proper staffing for day to day operations, catering, and holidays. I handle the profit
                           loss statement and report this on a weekly basis. On a monthly and quarterly basis I create a full report detailing 
                           our successes and short comings with plans to adapt and correct for the next period or quarter. </p>
                    </div>
            </div>
        </section>
    );
}

export default Resume;