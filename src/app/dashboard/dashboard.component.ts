import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {CommonService} from '../common.service';

/**
 * @author: L V Priyanka Muddamsetty
 * @Component
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public coffeeList: any;
  public dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['blend_name', 'variety', 'notes'];
  
  constructor(private service:CommonService) { }

  ngOnInit(): void {
    this.service.getList().then((res:any) => {
      console.log(res);
      this.coffeeList = res.data;      
      console.log(this.coffeeList);
      
  this.dataSource = new MatTableDataSource(this.coffeeList);
    }, error => {
      console.error("Error", error);
    });
  }

}

export interface Element {
  blend_name: string;
  variety: string;
  notes:string;
};

