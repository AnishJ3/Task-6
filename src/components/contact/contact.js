import {useRef} from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';


const Contact = () =>
{

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d246ri6', 'template_j0aaur7', form.current, 'fR66WKAa99ES_-XFP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log( error.text);
            });
    };

    return(


        <div id="contact">
            <span className='contact-title'>My </span>
            <span className='contact-title' style={{ color: "red" }}>Contact</span>


            <p className='contact-text'>Please fill out the form below to contact me
                for future opportunities</p>

            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name="your_name"/>
                <input type="email" className='email' placeholder='Your Email'name="your_email" />
                <textarea name='message' className="msg" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>

            </form>


        </div>

    )

}

export default Contact;



/*
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/AnishJ3/Task-6.git
git push -u origin main


*/