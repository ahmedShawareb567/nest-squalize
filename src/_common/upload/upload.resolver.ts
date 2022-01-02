import { upload } from './models/upload.model';
import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { UploadService } from './upload.service';

@Resolver((of) => upload)
export class UploadResolver {
  constructor(private uploadService: UploadService) {}

  @Query(() => upload)
  fileById() {
    return {};
  }

  @Mutation(() => upload)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: FileUpload,
  ) {
    return await this.uploadService.uploadFile(file);
  }
}
