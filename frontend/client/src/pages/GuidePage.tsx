import GuideCard from "../components/UI/GuideCard"
import { MockGuide } from "../mock/GuideMock"
import { type GuideCardProps } from "../types/GuideCard"


const GuidePage = () => {


  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {MockGuide.map((guideCard: GuideCardProps) => (
        <GuideCard
        {...guideCard}
        />
      ))}
    </div>
  )
}



export default GuidePage
