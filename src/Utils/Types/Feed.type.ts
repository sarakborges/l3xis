import { CommentType } from '@/Utils/Types/Comment.type'

export type FeedType = {
  id: string
  type: 'new-picture' | 'publish' | string
  content: string
  time: Date | string
  likedBy?: Array<string>
  comments?: Array<CommentType>
}
