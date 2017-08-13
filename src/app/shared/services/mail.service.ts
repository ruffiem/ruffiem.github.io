import { Http } from '@angular/http';
import { MailFormat } from '../models/mail.model';
import { Injectable } from '@angular/core';

const API_ENDPOINT = '../../assets/api/mail.php';

@Injectable()
export class MailService {

  constructor(private http: Http) { }

  send(data: MailFormat) {
    return this.http.post(API_ENDPOINT, data);
  }
}
