import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ImagesService } from "src/app/core/endpoints/images.service";
export const image = [{
  id: 1,
  photo: "https://picsum.photos/id/1/500/500",
  text: 'Text: Minim aute magna laboris culpa. Consectetur ullamco nostrud in ea aute aliquip in Lorem quis sunt adipisicing. Aliqua Lorem deserunt in sint occaecat esse dolore labore aliqua ipsum ut sunt sint. Occaecat laboris deserunt mollit duis laborum est elit ut do. Proident in occaecat nulla ut officia pariatur quis irure ullamco consequat fugiat voluptate cupidatat. Culpa sit mollit Lorem ex et excepteur enim minim. Occaecat reprehenderit non sunt quis do amet. Dolor aliquip cupidatat ullamco.'
}];

@Injectable({
  providedIn: 'root',
})
export class ImagesServiceMock extends ImagesService {
  override imagesLocal() {
    return new Observable<any>(observer => {
      observer.next(image);
      observer.complete();
    })
  }
}
