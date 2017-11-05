import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { IPaziente } from './paziente.interface';
import { IPagedResults } from '../../shared/interfaces';

@Injectable()
export class PazientiDataService {

    //If you're on Angular 4.3 or higher you can use HttpClientModule. See data.service.ts.httpclient
  
    baseUrl: string = 'api/pazienti';

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) { 
        console.info('baseUrl:'+baseUrl);
        this.baseUrl = baseUrl + this.baseUrl;
    }
    
    getPazienti() : Observable<IPaziente[]> {
        return this.http.get(this.baseUrl)
                   .map((res: Response) => {
                       let pazienti = res.json();
                       return pazienti;
                   });
                   //.catch(this.handleError);
    }


    
    private handleError(error: any) {
        console.error('server error:', error); 
        /*
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'ASP.NET Core server error');
        */
    }

}
