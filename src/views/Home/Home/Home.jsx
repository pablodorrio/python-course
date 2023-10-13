import './Home.css'
import Banner from '../../../components/Banner/Banner'
import Courses from '../../../components/Modules/Modules'
import Continue from '../../../components/Continue/Continue'

function Home() {
    return (
        <div className='home-container'>
            <Banner />
            <Continue />
            <Courses />
        </div>
    )
}

export default Home