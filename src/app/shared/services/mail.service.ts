import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MailFormat } from '../models/mail.model';
import { CONFIG } from '../../app.config';

@Injectable()
export class MailService {

  constructor(private http: Http) { }

  send(data: MailFormat) {
    return this.http.post(CONFIG.API.ENDPOINT, data);
  }
}
