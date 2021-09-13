import {
  MatSnackBar
} from '@angular/material/snack-bar';
import {
  Injectable
} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  map
} from 'rxjs/operators';
import {
  appContants
} from '../Contants/app.contants';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    return next.handle(req).pipe(map((event: HttpEvent < any > ) => {
      if (event instanceof HttpResponse) {
        if (event.body.stat === 'fail') {
          this.snackBar.open(`${event.body.message}`, 'OK', {
            duration: appContants.snackBarDuration
          });
        }
      }
      return event;
    }));
  }
}
