import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
/**
 * @author: L V Priyanka Muddamsetty
 * @Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiUrl: string = 'https://random-data-api.com/api';
  
  constructor(private api: ApiService) { }


  public getList(){
    return new Promise((resolve, reject) => {
      this.api.get(this.apiUrl, '/coffee/random_coffee?size=10').then((data: any) => {
        resolve({ isSuccess: true, data});
      }, error => {
        reject(error);
      })
    });
  }


}
