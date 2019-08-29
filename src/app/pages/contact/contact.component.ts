import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  endereco: any;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.buscarCep('02935150');
  }

  buscarCep(cep: string) {
    this.contactService.getCep(cep).subscribe( data => this.endereco = data);
  }

}
