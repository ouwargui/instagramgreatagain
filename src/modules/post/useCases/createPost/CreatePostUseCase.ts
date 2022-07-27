import {
  File,
  IFileUploader,
} from '../../../../infra/fileUploader/IFileUploader';
import {Post} from '../../model/Post';
import {IPostsRepository} from '../../repositories/IPostsRepository';

interface ICreatePost {
  author_id: number;
  files: File[];
  description: string;
}

class CreatePostUseCase {
  private postsRepository: IPostsRepository;
  private fileUploader: IFileUploader;

  constructor(postsRepository: IPostsRepository, fileUploader: IFileUploader) {
    this.postsRepository = postsRepository;
    this.fileUploader = fileUploader;
  }

  async execute({author_id, files, description}: ICreatePost): Promise<Post> {
    if (!author_id || !files || !description) {
      throw new Error('Missing required fields');
    }

    const pics = await this.fileUploader.upload(files);

    if (!pics) {
      throw new Error('Error uploading files');
    }

    return this.postsRepository.create({author_id, pics, description});
  }
}

export default CreatePostUseCase;
