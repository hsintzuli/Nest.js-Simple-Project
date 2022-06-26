import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ExamineTimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(
      '[ExamineTimeInterceptor] Receive request to url:',
      context.switchToHttp().getRequest().route?.path,
    );
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(
            `[ExamineTimeInterceptor] Response! Spent ${Date.now() - now}ms`,
          ),
        ),
      );
  }
}
