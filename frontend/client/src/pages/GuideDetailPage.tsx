import { Route } from "../routes/_app/guide/$guideId"
import { MockGuide } from "../mock/GuideMock"


const GuideDetailPage = () => {

    const {guideId} = Route.useParams()
    const guide = MockGuide.find((guide) => String(guide.id) === guideId)

    if (!guide){
        return <p>Нету ликбеза</p>
    }


    return(
        <>
        <p>страница ликбеза: {guideId}</p>
        <p>{guide.category}</p>
        <p>{guide.description}</p>
        </>
    )
}


export default GuideDetailPage