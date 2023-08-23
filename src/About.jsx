import './About.css'
import profile from './assets/profile.jpg'
function About() {
    return (
      <div className="container2">
        <img src={profile} className='profile'></img>
        <div>
            <h3>About me</h3>
            <p>
            I&apos;ve honed my skills in HTML, CSS, and JavaScript, allowing me to transform creative 
            ideas into interactive and visually appealing web interfaces. From structuring content 
            with semantic HTML to styling elements with CSS and implementing dynamic features using 
            JavaScript, I relish in the process of creating seamless user experiences.
            </p>
        </div>
        
      </div>
    )
  }
  export default About