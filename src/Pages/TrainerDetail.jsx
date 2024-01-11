import { useParams } from "react-router-dom"
import { trainers } from "../UI/trainers"
import { classposts } from "../UI/classposts"
import TrainerIntro from "../components/trainer/TrainerIntro"
import TrainerBody from "../components/trainer/TrainerBody"
import TrainerClasses from "../components/trainer/TrainerClasses"
export default function TrainerDetail() {
    const params = useParams()
    const data = params.name
    const filteredClasses = classposts.filter(a => a.trainer === data)
    return (
        <>
            <TrainerIntro data={trainers[data]} />
            <TrainerBody data={data} />
            <TrainerClasses filteredClasses={filteredClasses} data={data} />
        </>
    )
}