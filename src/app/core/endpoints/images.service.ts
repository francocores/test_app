import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../services/http.service';
import { Image } from './models/image.model';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(protected http: HttpService) { }


  public imagesRemote(id: number): Observable<String> {
    return this.http.get(`${environment.remote.images}${id}${environment.remote.resolution}`, true);
  }

  public imagesLocal(): Observable<Image[]> {
    return this.http.get(environment.local, false);
  }

}
