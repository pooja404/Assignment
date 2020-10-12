import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  chart :Chart;

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: dringlichkeiten.map(x => x.country),
        datasets: [
          {
            label: 'Cases(In Thousands)',
            data: dringlichkeiten.map(x => x.cases),
            backgroundColor: ['red', 'green', 'yellow', 'blue', 'orange', 'grey','blue' ,'powderblue','cyan']
          }
        ]
      },
    });
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
var dringlichkeiten  = 
  [{
      "country": "Karnataka",
      "cases": 641
  },
  {
      "country": "Maharashtra",
      "cases": 50.44
  },
  {
      "country": "Andhra Pradesh",
      "cases": 719
  },
  {
      "country": "Tamil Nadu",
      "cases": 620
  },
  {
      "country": "Uttar Pradesh",
      "cases": 414
  },
  {
      "country": "Delhi",
      "cases": 291
  },
  {
      "country": "West Bengal",
      "cases": 270
  },
  {
      "country": "Bangalore Urban",
      "cases": 250
  },
  {
      "country": "Odisha",
      "cases": 235
  }];
