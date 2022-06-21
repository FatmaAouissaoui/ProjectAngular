import { Component, OnInit } from '@angular/core';
import { StorageTraitementService } from '../services/storage-traitement.service';
import { from } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.scss']
})
export class TableBasicComponent implements OnInit {
  dataSource: any = [];

  constructor( private storageTraitementService: StorageTraitementService) { }

  ngOnInit(): void {
    this.storageTraitementService.getJSON().subscribe(data => {
      console.log(data);
      this.dataSource= data;
  });
  }
  displayedColumns: string[] = ['Techno', 'Nombre de replicas', 'CPU Request', 'CPU Limit', 'Ram Request', 'Ram Limit'];

}
