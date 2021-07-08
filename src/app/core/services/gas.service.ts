import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecordGas } from '../models/record-gas.model';

@Injectable({
  providedIn: 'root'
})
export class GasService {

  constructor(private http: HttpClient) { }

  getLastRecordGas() {
    return this.http.get<RecordGas>(environment.endPointGetLastRecordGas);
  }

  getAllRecordsGas() {
    return this.http.get<RecordGas[]>(environment.endPointGetAllRecordsGas);
  }

}
