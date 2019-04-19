import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [
    {
      linkedin: 'linkedin.com/in/c-nicole-nwakalor',
      github: 'github.com/Alive-Nicole',
      phoneNumber: '404-437-8507',
      email: 'nicole.nwakalor@gmail.com' 
    }
  ];
  constructor() { }
}
