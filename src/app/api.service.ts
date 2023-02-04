import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * @author: L V Priyanka Muddamsetty
 * @Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


/**
 * @GET
 * @public
 * @param url 
 * @param reqParam
 * @returns 
 */
public get(url, reqParam): Promise<any> {
  return new Promise ((resolve, reject) => {
    this.http.get(url + reqParam)
    .subscribe(
      data => {
        resolve(this.handleResponse(data));
      },
      error => {
        reject(this.handleError(error));
      }
    )  
})
}

/**
 * Handle the service response
 * @param data 
 * @returns 
 */
private handleResponse(data: any) {
  //process data if any, before returning 
  return data;
}

/**
 * Handle the service error
 * @param error
 * @returns 
 */
private handleError(error) {
  return Promise.reject(error || 'service error');
}

}
