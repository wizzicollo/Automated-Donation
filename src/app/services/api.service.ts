import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  createCharity(selectedCharity: any) {
    throw new Error("Method not implemented.");
  }
  deleteCharity(id: any) {
    throw new Error("Method not implemented.");
  }


  baseurl = "http://127.0.0.1:8000/"
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  token = JSON.parse(localStorage.getItem('accessToken'))

  headers = new HttpHeaders().set("Authorization",'Bearer' + this.token);
  getAllCharities: any;
  getOneCharity: any;
  updateCharity: any;

  constructor(private http: HttpClient) { }

  getAllStories(): Observable<any> {
    return this.http.get(this.baseurl + 'api/story/',
     { headers: this.headers })
  }
  getOneStory(id): Observable<any> {
    return this.http.get(this.baseurl + 'api/story/' + id + '/',
      { headers: this.httpHeaders });
  }
  updateStory(story): Observable<any> {
    const body = {  charity:story.charity, title: story.title, description: story.description, location: story.location };
    return this.http.put(this.baseurl + 'api/story/' + story.id + '/', body,
      { headers: this.httpHeaders });
  }
  createStory(story): Observable<any> {
    const body = { charity:story.charity, title: story.title, description: story.description, location: story.location };
    return this.http.post(this.baseurl + 'api/story/', body,
    {headers: this.httpHeaders});
  }
  deleteStory(id): Observable<any> {
    return this.http.delete(this.baseurl + 'api/story/' + id + '/',
    {headers: this.httpHeaders});
  }
}

