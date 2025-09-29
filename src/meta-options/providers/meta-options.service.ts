import { Injectable } from '@nestjs/common'
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto'

@Injectable()
export class MetaOptionsService {
  public async create(createPostMetaOptionsDto: CreatePostMetaOptionsDto) {}
}
