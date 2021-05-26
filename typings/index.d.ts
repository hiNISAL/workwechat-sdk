declare module 'wechat-crypto';
declare module 'xml2js';
declare module 'mimetype';
declare module 'concat-stream';

interface AccessToken {
  accessToken?: string;
}

interface AppConfig {
  corpId: string;
  corpSecret: string;
  appToken?: string;
  encodingAESKey?: string;
  accessToken?: string;
  agentId?: string|number;
  id?: string;
}

// -------------------------------------------------------------------------------
// Message 相关
interface MessageSendMsgOptions {
  touser?: string[]|string;
  toparty?: string[]|string;
  totag?: string[]|string;
  agentid?: number|string;
  safe?: 1|0;
}

interface MessageSendTextOptions extends MessageSendMsgOptions {
  content: string|number;
}

interface MessageSendImageOptions extends MessageSendMsgOptions {
  mediaId: string;
}

interface MessageSendTextCardOptions extends MessageSendMsgOptions {
  title: string;
  desc: string;
  url: string;
  btntxt?: string;
}

interface MessageSendMarkdownOptions extends MessageSendMsgOptions {
  content: string;
}

interface MessageSendNewsOptions extends MessageSendMsgOptions {
  articles: {
    title: string;
    desc?: string;
    url: string;
    picurl?: string;
  }[],
}

interface MessageSendMPNewsOptions extends MessageSendMsgOptions {
  articles: {
    title: string;
    thumbMediaId: string;
    author?: string;
    contentSourceURL?: string;
    content: string;
    digest?: string;
  }[];
}

// -------------------------------------------------------------------------------
// Cryptor 相关
interface CryptorURLVerifyOptions {
  // 微信接口调用带过来的参数
  msgSignature: string;
  echostr: string;
  timestamp: string;
  nonce: string;

  cryptor?: any;
}

interface CryptorPushMessageDecodeOptions {
  msgSignature: string;
  timestamp: string;
  nonce: string;
  // 就起企业微信发过来的请求的 body 部分
  originXML: string;

  cryptor?: any,
}

// -------------------------------------------------------------------------------
// Group 相关
interface GroupSendTextOptions {
  safe?: 0|1;
  content: string;
  chatid: string;
}

interface GroupSendMarkdownOptions {
  chatid: string;
  content: string;
  safe?: 0|1;
}

interface GroupSendNewsOptions {
  safe?: 0|1;
  chatid: string;
  articles: {
    title: string;
    desc?: string;
    url: string;
    picurl?: string;
  }[];
}


interface GroupSendMPNewsOptions {
  chatid: string;
  safe?: 0|1;
  articles: {
    title: string;
    thumbMediaId: string;
    author?: string;
    contentSourceURL?: string;
    content: string;
    digest?: string;
  }[];
}

interface GroupSendTextCardOptions {
  safe?: 0|1;
  chatid: string;
  title: string;
  desc: string;
  url: string;
  btntxt?: string;
}

interface GroupCreateOptions {
  name?: string;
  owner?: string;
  userlist: string[];
  chatid?: string;
}

// -------------------------------------------------------------------------------
// Source 相关
type UploadMediaType = 'image'|'voice'|'video'|'file';
interface SourceUploadOptions {
  filename: string;
  media: any;
  type: UploadMediaType;
}

interface SourceUploadMediaCommonOptions {
  media: any;
  filename: string;
}

// -------------------------------------------------------------------------------
// User 相关
interface UserInfoOptions {
  userId: string;
}
