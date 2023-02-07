import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {CommonService} from '../common.service';
import * as appActions from '../app-state/common.action';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

import * as fromRoot from '../app-state';
import { Subject } from 'rxjs';

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
  public coffeeList: MatTableDataSource<any>;
  displayedColumns: string[] = ['blend_name', 'variety', 'notes'];
  list: any[] = [];
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service:CommonService, private readonly store: Store) {
    
    
   }
   destroy$: Subject<boolean> = new Subject<boolean>();
  ngOnInit(): void {
    this.store.dispatch(appActions.getList());

    this.store.select(fromRoot.getList).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      console.log('data.list =====', data.list);
      this.list = data.list;
      //this.coffeeList = this.list['response'];
      this.coffeeList =  new MatTableDataSource(this.list['response']);
      this.coffeeList.paginator = this.paginator;
    });


    this.service.getList().then((res:any) => {
      console.log(res);
     // this.coffeeList = res.data;      
      console.log(this.coffeeList);
      
  //this.dataSource = new MatTableDataSource(this.coffeeList);
    }, error => {
      console.error("Error", error);
    });

    
  }

  ngAfterViewInit() {
    //this.coffeeList.paginator = this.paginator;
  }

}

export interface Element {
  blend_name: string;
  variety: string;
  notes:string;
};

