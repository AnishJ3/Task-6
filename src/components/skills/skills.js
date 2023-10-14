import './skills.css';

import html from '../../assets/html.png';
import css from '../../assets/css.png';
import react from '../../assets/react.png'

const Skills = () =>
{

    return(
        <section id='skills'>
            <div className='skills-title'>
                <span >About</span> <span style={{color:"red"}}>Me</span>
            </div>
            <p className='title-text'>I'm a web developer with a focus on the MERN stack, but still exploring 
            other technologies and frameworks that catch my interest! if you're 
            looking for a developer to add to your team, I'd love to hear from you!


            </p>

            <div className='bars'>
                <div className='bar'>
                    <img className="logo" src={html} />
                    <div className='bar-text'>
                        <span className='tit'>HTML</span>
                        
                    </div>
                </div>
           
                <div className='bar'>
                    <img className="logo" src={css} /> 
                    <div className='bar-text'>
                        <span className='tit'>CSS</span>
                        
                    </div>
                </div>
           

          
                <div className='bar'>
                    <img className="logo" src={react} />
                    <div className='bar-text'>
                        <span className='tit'>React JS</span>
                        
                    </div>
                </div>



            </div>


        </section>
    )

}

export default Skills;