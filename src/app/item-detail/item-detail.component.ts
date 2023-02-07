import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import * as fromRoot from '../app-state';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  public coffeeList: any;
  public detail:any;
  private detailId:any;  
  
  
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private readonly store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.detailId = this.route.snapshot.paramMap.get('id');
    console.log("detailId", this.detailId)
    this.store.select(fromRoot.getList).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.coffeeList = data.list['response'];
      this.detail = this.coffeeList.filter(list => {
      return list.id.toString() === this.detailId.toString()});
      console.log(this.detail );
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
