import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TitanicRequest, TitanicResponse } from './titanic-request.interface';

@Injectable()
export class TitanicPredictionService {
  private TitanicEndpoint =
    'https://europe-west3-closeracademy-handson.cloudfunctions.net/jomnteiro-predictions_endpoint/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getPrediction(requestData: TitanicRequest): Observable<TitanicResponse> {
    console.log(
      this.http
        .post<TitanicResponse>(
          this.TitanicEndpoint,
          requestData,
          this.httpOptions
        )
        .subscribe((response) => {
          console.log(response);
        })
    );
    return this.http.post<TitanicResponse>(
      this.TitanicEndpoint,
      requestData,
      this.httpOptions
    );
  }
}
