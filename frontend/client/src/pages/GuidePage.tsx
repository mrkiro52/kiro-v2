import GuideCard from "../components/UI/GuideCard"
import { MockGuide } from "../mock/GuideMock"


const GuidePage = () => {


  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {MockGuide.map(({id, order, category, title, description, lessonCount, duration, completedLessons, onOpen}) => (
        <GuideCard
        key={id}
        id={id}
        order={order}
        category={category}
        title={title}
        description={description}
        lessonCount={lessonCount}
        duration={duration}
        completedLessons={completedLessons}
        onOpen={onOpen}
        />
      ))}
    </div>
  )
}



export default GuidePage
