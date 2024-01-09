import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  private apiUrl = 'your_backend_api_url';

  constructor(private http: HttpClient) {}

  getShortLinks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/short-links`);
  }

  createShortLink(linkData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-short-link`, linkData);
  }
}
