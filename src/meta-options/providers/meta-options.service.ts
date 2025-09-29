import { Injectable } from '@nestjs/common'
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto'
import { Repository } from 'typeorm'
import { MetaOption } from '../meta-option.entity'

@Injectable()
export class MetaOptionsService {

  constructor(
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}

  public async create(createPostMetaOptionsDto: CreatePostMetaOptionsDto) {}
}
