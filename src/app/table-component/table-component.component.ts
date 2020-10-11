import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
// export interface PeriodicElement {
//   Pos:number;
//   Player:string;
//   Mat:number;
//   Inns:number;
//   No:number;
//   Runs:number;
//   HS:number;
//   Avg:number;
//   BF:number;
//   SR:number;
//   hundred:string;
//   fifty:string;
//   four:string;
//   six:string;
// }



@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  

  ngOnInit(): void {
  }
  private _jsonURL = 'assets/exceldataJSon.json';
  data:any=[];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(resp => {
     this.data= resp; 
     console.log  (" RESP , resp ", this.data ); 

    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
