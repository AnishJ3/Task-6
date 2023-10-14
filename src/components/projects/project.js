import './project.css'
import web1 from '../../assets/web1.png'
import web2 from '../../assets/web2.png'
import web3 from '../../assets/web3.png'
import web4 from '../../assets/web4.png'

const Project =() =>
{
    return(

        <section id='projects'>
            <div className='projects-title'>

                <span>My </span><span style={{color:"red"}}>Projects</span>
            </div>
           
            <div className='projects-img'>
                <img src={web1} />
                <img src={web2} />
                <img src={web3} />
                <img src={web4} />
               
            </div>


        </section>
    )

}

export default Project;