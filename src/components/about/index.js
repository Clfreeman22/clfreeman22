import React from 'react';
import snowman from '../../snowman.jpg'

const About = () => {
    return(
        <section>
            <div className="myinfo">
                <h2>Charles "Charlie" Freeman</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga id quae alias sint quia ipsam quod. Quis, minima repudiandae molestiae laudantium voluptates iusto asperiores, cum accusamus deserunt corrupti nobis sequi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem totam perferendis quam dolorem, explicabo rerum sed architecto sunt at quasi quo incidunt vel porro eaque cum numquam adipisci ut. Harum.
                </p>
            </div>
            <img src={snowman} className='backgroundimg' style={{ width: '100%' }} alt='background' />
        </section>
    )
}

export default About;