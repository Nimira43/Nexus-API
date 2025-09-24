export class CreateTagDto {
  name: string
  slug: string
  description?: string
  schema?: string
  featuredImageUrl?: string
  createDate: Date
  updateDate: Date
  deletedAt: Date
}