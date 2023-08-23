import './Details.css'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
function Detail() {
    return (
       <div className='detail'>
            <h3>Details</h3>
            <h4>Name:</h4>
            <p>Rais Rahayu</p>
            <h4>Age:</h4>
            <p>24 years</p>
            <h4>Education:</h4>
            <p>Bachelor Degree in Civil Engineering, Universitas Pendidikan Indonesia</p>
            <h4>Location:</h4>
            <p>Cianjur, Indonesia</p>
            <a href='https://facebook.com/rais.rahayu' target='blank'><img src={facebook}></img></a>
            <a href='https://instagram.com/raisrahayu'target='blank'><img src={instagram}></img></a>
            
            

       </div> 
    )
}
export default Detail