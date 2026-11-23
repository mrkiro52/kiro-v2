import { createFileRoute } from '@tanstack/react-router'
import GuideDetailPage from '../../../pages/GuideDetailPage'

export const Route = createFileRoute('/_app/guide/$guideId')({
  component: GuideDetailPage,
})

