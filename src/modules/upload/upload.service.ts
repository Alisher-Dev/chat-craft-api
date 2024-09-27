import { Injectable } from "@nestjs/common";

@Injectable()
export class UploadService {
  async uploadFile(file: Express.Multer.File) {
    return {
      filename: file.filename,
      size: file.size,
      originalname: file.originalname,
      mimetype: file.mimetype,
    };
  }
}
