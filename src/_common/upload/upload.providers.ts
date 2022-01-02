import { upload } from './models/upload.model';

export const uploadProvider = [
  {
    provide: 'UPLOAD_REPOSITORY',
    useValue: upload,
  },
];
