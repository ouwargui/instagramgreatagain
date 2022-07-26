import {S3} from '@aws-sdk/client-s3';
import {AWS_BUCKET, AWS_REGION} from '../../../config/env';
import {File} from '../IFileUploader';

class AWSFileUploader {
  private client: S3;
  private readonly bucket = AWS_BUCKET;

  constructor() {
    this.client = new S3({
      region: AWS_REGION,
    });
  }

  private generateFileKey(file: File, timestamp: number): string {
    return `${file.name}-${timestamp}.${file.extension}`;
  }

  private async uploadFile(file: File): Promise<string> {
    const timestamp = Date.now();
    const fileKey = this.generateFileKey(file, timestamp);
    await this.client.putObject({
      Bucket: this.bucket,
      Key: fileKey,
      ContentType: file.type,
      Body: file.content,
      ACL: 'public-read',
    });

    return `${this.bucket}.s3.sa-east-1.amazonaws.com/${fileKey}`;
  }

  async upload(files: File | File[]): Promise<string[] | undefined> {
    try {
      if (Array.isArray(files)) {
        const paths = await Promise.all(
          files.map(async (file) => this.uploadFile(file)),
        );
        return paths;
      }

      const path = await this.uploadFile(files);
      return [path];
    } catch {
      return undefined;
    }
  }
}

export default AWSFileUploader;
