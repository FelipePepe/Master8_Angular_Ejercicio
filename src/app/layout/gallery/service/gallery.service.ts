import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { GalleryModel } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private header: HttpHeaders = new HttpHeaders().set("Authorization", environment.tokenGallery);


  constructor(private http: HttpClient) { }

  getNatureImageGallery(currentPage: number = 1): Observable<GalleryModel> {

    let result: Observable<GalleryModel>;

    result = this.http.get<GalleryModel>(`https://api.pexels.com/v1/search?query=nature&per_page=4&page=${currentPage}`, {
      headers: this.header
    });

    return result;

  }
}
