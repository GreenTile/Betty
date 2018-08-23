import { BadReqError } from '../common/bad-req-error';
import { AppErr } from '../common/app-err';
import { NotFoundError } from '../common/not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError , map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http,private url:string) { }

  private handleError(error:Response){
    if(error.status === 404)
          return Observable.throw(new NotFoundError(error.json()));
    if(error.status === 400)
        return Observable.throw(new BadReqError(error.json()));
      return Observable.throw(new AppErr(error.json()));
      
  }

  getAll(){
    return this.http.get(this.url)
    .pipe(map(response => response.json()))
    .pipe(catchError(this.handleError));
  }


  createAll(resource){
    // return Observable.throw(new AppErr());
    return this.http.post(this.url,JSON.stringify(resource))
    .pipe(map(response => response.json()))
    .pipe(catchError(this.handleError));
  }

  update(resource){
    return this.http.patch(this.url+'/'+resource.id, JSON.stringify({ isRead: true}))
    .pipe(map(response => response.json()))
    .pipe(catchError(this.handleError));
  }

  delete(id){
        // return Observable.throw(new AppErr());
    return this.http.delete(this.url+'/'+id)
    .pipe(map(response => response.json()))
    .pipe(catchError(this.handleError));
  }
}
