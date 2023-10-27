import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  emailUrl='http://localhost:8080/emlInv/'
  httpOptions={headers: new HttpHeaders({'Content-Type' : 'application/json'})};

constructor(private Http:HttpClient) { }


  public sendEmail(from:string, subject:string, text :string):Observable<any>{
    return this.Http.post<any>(this.emailUrl+'send/'+from+'/'+subject+'/'+text,this.httpOptions);
  }
}
