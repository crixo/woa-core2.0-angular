import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { DataFilterService } from '../core/data-filter.service';
import { PazientiDataService } from './pazienti.data.service';
import { IPaziente } from './paziente.interface';
import { IPagedResults } from '../../shared/interfaces';

@Component({ 
  selector: 'pazienti', 
  templateUrl: './pazienti.component.html'
})
export class PazientiComponent implements OnInit {

  title: string;
  pazienti: IPaziente[] = [];
  //filteredCustomers: ICustomer[] = [];

  totalRecords: number = 0;
  pageSize: number = 10;

  constructor(private router: Router, 
              private dataService: PazientiDataService,
              //private dataFilter: DataFilterService
              ) { }
  
  ngOnInit() {
    this.title = 'Pazienti';
    //this.getCustomersPage(1);
    this.getPazienti();
  }

    getPazienti() {
    this.dataService.getPazienti()
        .subscribe((response: IPaziente[]) => {
          this.pazienti = response;
        },
        (err: any) => console.log(err),
        () => console.log('getCustomersPage() retrieved customers'));
  }

  /*
  filterChanged(filterText: string) {
    if (filterText && this.customers) {
        let props = ['firstName', 'lastName', 'address', 'city', 'state.name', 'orderTotal'];
        this.filteredCustomers = this.dataFilter.filter(this.customers, props, filterText);
    }
    else {
      this.filteredCustomers = this.customers;
    }
  }


  pageChanged(page: number) {
    this.getPazientiPage(page);
  }

  getPazientiPage(page: number) {
    this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
        .subscribe((response: IPagedResults<ICustomer[]>) => {
          this.customers = this.filteredCustomers = response.results;
          this.totalRecords = response.totalRecords;
        },
        (err: any) => console.log(err),
        () => console.log('getCustomersPage() retrieved customers'));
  }

    */

}