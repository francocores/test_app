import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() { }

  public get(
    endpoint: string,
    remote: boolean,
  ) {
    const options = {
      url: remote ? this.getUrl(endpoint) : endpoint,
    };

    return new Observable<any>(observer => {
      CapacitorHttp.get(options).then(a => {
        if (a.status >= 400)
          observer.error(a);
        else {
          observer.next(a);
          observer.complete();
        }
      }).catch((e) => {
        observer.error(e);
      })
    }).pipe(
      map((val: HttpResponse) => {
        return val.data
      }),
    );
  }

  private getUrl(endpoint: string) {
    return (
      environment.host +
      endpoint
    );
  }
}
