import BaseModule from '..';
import { upload } from './methods';

class Source extends BaseModule {
  public upload(options: SourceUploadOptions) {
    const {
      type,
      media,
      filename,
    } = options;
    return upload({
      type,
      media,
      filename,
      request: this.request!,
    });
  }

  public uploadImage(options: SourceUploadMediaCommonOptions) {
    return this.upload({
      type: 'image',
      ...options,
    });
  }

  public uploadVoice(options: SourceUploadMediaCommonOptions) {
    return this.upload({
      type: 'voice',
      ...options,
    });
  }

  public uploadFile(options: SourceUploadMediaCommonOptions) {
    return this.upload({
      type: 'file',
      ...options,
    });
  }

  public uploadVideo(options: SourceUploadMediaCommonOptions) {
    return this.upload({
      type: 'video',
      ...options,
    });
  }
}

export default Source;
