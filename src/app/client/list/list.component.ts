import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';
import { IClientModel } from 'src/app/i-client-model';
import { ITableHeaders } from 'src/app/i-table-headers';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  List:IClientModel[] = [];
  tableHeaders:ITableHeaders;
  displayedColumns;
  displayedColumns2 = ['id'];
  constructor(private service:ClientService) { 
    this.tableHeaders = new ITableHeaders();
    this.displayedColumns = this.tableHeaders.headers.filter(a=>a.exist===true).map(a=>a.key);
    console.log(this.displayedColumns)
  }
  ngOnInit() {    
    this.service.getAll().subscribe(
        arg => {
          this.List = arg;
        }
      );
  }
  

  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    residence: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
      Validators.minLength(10)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
      Validators.minLength(10)
    ]),
    salesMan: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3)
    ]),
    clientSource: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3)
    ]),
    clientClassfication: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3)
    ]),
    telephone1: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(7)
    ]),
    telephone2: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(7)
    ]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.maxLength(11),
      Validators.minLength(11)
    ]),
    whatsapp: new FormControl('', [
      Validators.required,
      Validators.maxLength(11),
      Validators.minLength(11)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ])
  });
}