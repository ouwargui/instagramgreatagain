export interface File {
  name: string;
  size: number;
  type: string;
  extension: string;
  content: ArrayBuffer;
}

export interface IFileUploader {
  upload: (files: File[]) => Promise<string[] | undefined>;
}
