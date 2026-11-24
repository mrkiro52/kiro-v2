import { Route } from "../routes/_app/feed/$feedId"
import { MockFeed } from "../mock/FeedMock"

const FeedDetailPage = () => {

    const {feedId} = Route.useParams()
    const feed = MockFeed.find((feed) => String(feed.id) === feedId )

    return(
        <>
        <p>{feedId}</p>
        <p>{feed.title}</p>
        </>
    )
}
export default FeedDetailPage