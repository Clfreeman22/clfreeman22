import React from "react";
import backyardtrails from '../../utils/images/backyardtrails.png';
import ttw from '../../utils/images/ttw.png';
import urmapp from '../../utils/images/urmapp.png';
import github from '../../utils/images/github-black-logo.png';
import './style.css';

const Portfolio = () => {

    return(
        <section>
            <h1 className="title">Projects I have worked on</h1>
            <div>
                <a href="https://lara-destein13.github.io/my-backyard-trails/" target='_blank' rel="noreferrer" >
                    <img src = {backyardtrails} alt='' className='projectlink'></img>
                </a>
                <p className="description"> This is a website that uses Google's Geocoder and Trails Api to finds trails near the user or near a specified address.
                    It will also show the location of the trail on a map and provide a link to the website. </p>
                <div className="githublink">
                    <p className="text">View on</p>
                    <a href="https://github.com/lara-destein13/my-backyard-trails.git" target='_blank' rel="noreferrer" className="view" >
                        <img src = {github} alt='' className='githublogo'></img>
                    </a>
                </div>
            </div>
            <div>
                <a href="https://glacial-wave-35066.herokuapp.com/" target='_blank' rel="noreferrer">
                    <img src = {ttw} alt='' className='projectlink'></img>
                </a>
                <p className="description"> Table Top Warriors is a website designed for trading card game enthusiasts to create, edit, and store their deck collection. 
                    Whether the users deck exists in real life, or virtually, Table Top Warriors is a useful tool in organizing the 
                    three most famous trading card games in the card game market.</p>
                <div className="githublink">                    
                    <p className="text">View on</p>
                    <a href="https://github.com/Ericcrain77/table-top-warriors.git" target='_blank' rel="noreferrer" className="view">
                        <img src = {github} alt='' className='githublogo'></img>
                    </a>
                </div>
            </div>
            <div>
                <a href="https://nameless-beach-59792.herokuapp.com/" target='_blank' rel="noreferrer">
                    <img src = {urmapp} alt='' className='projectlink'></img>
                </a>
                <p className="description"> UrMapp is a react application that uses the Google Javascript Maps API and AmCharts to display a clickable map that allows you to 
                      show off all the states in the US that you've been to.</p>
                <div className="githublink">                     
                    <p className="text">View on</p>
                    <a href="https://github.com/Ericcrain77/urmapp" target='_blank' rel="noreferrer"className="view">
                        <img src = {github} alt='' className='githublogo'></img>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;