import { Expose } from 'class-transformer';

export class RequestContext {
  @Expose()
  userId: string;

  @Expose()
  userName: string;

  @Expose()
  email: string;
}
