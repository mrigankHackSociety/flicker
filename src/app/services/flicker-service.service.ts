import { environment } from './../../environments/environment.prod';
import { FlickerImageModel } from './../Models/flickr-image.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlickerServiceService {

  constructor(private httpClient: HttpClient) { }

  getInterestingImage(imagePayloadDetails): Observable<FlickerImageModel> {
    return this.httpClient.get<FlickerImageModel>(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${environment.api_key}&tags=${imagePayloadDetails.tags}&sort=${imagePayloadDetails.sort}&content_type=&media=&extras=${imagePayloadDetails.extras}&per_page=${imagePayloadDetails.perPage}&format=json&nojsoncallback=1`)
  }
}
