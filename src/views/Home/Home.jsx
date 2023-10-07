import './Home.css'
import Banner from '../../components/Banner/Banner'
import Courses from '../../components/Modules/Modules'

function Home() {
    return (
        <div className='home-container'>
            <Banner />
            <Courses />
        </div>
    )
}

export default Home