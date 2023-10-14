import './intro.css'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.jpg'


const Intro = () =>{

    return(

        <section id="intro">
            <div className="intro-content">
                <span className="title">Hello,</span>
                <div>
                    <span className="introText">I'm </span><span className='intro-name'>Anish</span>
                </div>
                <span className='text'>A web developer</span>
                <p className="IntroPara">I am a web developer with 
                excellence in creating visually appealing and user friendly websites </p>
                
                <ul className="socials">
                    <li>
                        <a href="https://www.linkedin.com/in/anish-joshi-5008b0228/"><img src={linkedin} /></a>
                    </li>
                    <li>
                    <a href="https://github.com/AnishJ3"><img src = {github} style={{width:70,height:70}}/></a>
                    </li>
                </ul>
                <button className="hireme">Hire Me</button>

            </div>
        </section>
    )
}

export default Intro