import { upload } from './models/upload.model';
import { Inject, Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';
import { createWriteStream, promises } from 'fs';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export class UploadService {
  constructor(
    @Inject('UPLOAD_REPOSITORY') private uploadRepo: typeof upload,
    private configService: ConfigService,
  ) {}

  async uploadFile(file: FileUpload): Promise<upload> {
    const { createReadStream, filename, mimetype } = file;

    return new Promise((resolve, reject) => {
      createReadStream()
        .pipe(createWriteStream(`./uploads/${filename}`))
        .on('finish', async () => {
          const fileState = await promises.stat(
            `${process.cwd()}/uploads/${filename}`,
          );

          const path = `${this.configService.get<string>(
            'API_BASE',
          )}/uploads/${filename}`;

          const fileUploaded = await this.uploadRepo.create({
            name: filename,
            path,
            size: fileState.size,
            mimeType: mimetype,
          });
          resolve(fileUploaded);
        })
        .on('error', () => reject(false));
    });
  }
}
