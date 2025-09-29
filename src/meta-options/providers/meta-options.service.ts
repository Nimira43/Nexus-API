import { Injectable } from '@nestjs/common'
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto'
import { Repository } from 'typeorm'

@Injectable()
export class MetaOptionsService {

  constructor(
    private readonly metaOptionsRepository: Repository,
  ) {}

  public async create(createPostMetaOptionsDto: CreatePostMetaOptionsDto) {}
}
