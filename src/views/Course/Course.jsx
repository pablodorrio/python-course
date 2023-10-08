import './Course.css'
import Button from '../../components/Button/Button'

function Course() {
    return (
        <div className="course">
            <Button next={false} />
            <Button next={true} />
        </div>
    )
}

export default Course