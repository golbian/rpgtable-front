import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import sstk from  'shutterstock-api';
// const sstk = require("shutterstock-api");

const baseUrl = 'https://api.shutterstock.com';
// const applicationConsumerId = "R7E8VnAFMa8aAwEsCSB4kkTT1IH620je";
// const applicationConsumerSecret = "xA9SEpiGCshHV6NJ";
// sstk.setBasicAuth(applicationConsumerId, applicationConsumerSecret);
sstk.setAccessToken("v2/UjdFOFZuQUZNYThhQXdFc0NTQjRra1RUMUlINjIwamUvMzE3ODM1OTEzL2N1c3RvbWVyLzQvb2ktRGlmS0xUeGd4OWs3UXFMMlhXWlZ4a2VjS2VrRnpaOGF6WUhFb2tPRHFQQmdWdEZfa2RUN0FvYmRPajhOZ0oxT25tck16b0FDVTVTLTB0N2dSREZCRmVORkZtSG0zdDJILTd6cnltM0tLNmZpZjdyeGVXRTRGM1RrV1FoQ0pWUTlqNGdYUmxMaGNKYVhxR09kUWZqTC1PZ3VncGtTOGNhQWNFR29US281NWpZZjVmb1ktTVN6WWRpdUZmZzZuVkVoR3ViQ2lITF9hTXpJVE5OU05xZy9UQmxIanhUOXhqS2V5WmMyZXgxVmZB")
const imagesApi = new sstk.ImagesApi();
const queryParams = {
  // "query": "sprite sheet",
  // "image_type": "vector",
  // "page": 1,
  // "per_page": 100,
  // "sort": "relevance",
  // "spellcheck_query": "false",
  // "view": "full"
  "embed": "share_url",
  "page": "1",
  "per_page": "5",
};

@Injectable({
  providedIn: 'root'
})
export class ShutterstockService {
     
  constructor(private http: HttpClient) {

  }
  
  getSprites() {
    return imagesApi.getImageCollectionList(queryParams)
    // return this.http.get(baseUrl, { headers: headers });
  }

  getSprite(id:any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createCollection(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id:any, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
