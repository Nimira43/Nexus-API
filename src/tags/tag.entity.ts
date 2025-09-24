import { Entity } from 'typeorm'

@Entity()
export class Tag {
  id: number
  name: string
  slug: string
  description: string
  schema: string
  featuredImageUrl: string
}

