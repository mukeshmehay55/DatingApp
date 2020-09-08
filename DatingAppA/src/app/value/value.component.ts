import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss'],
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValue();
  }
  getValue() {
    this.http
      .get('http://localhost:49248/weatherforecast')
      .subscribe((response) => {
        this.values = response;
      },
      error => {
        console.log(error);
      });
  }
}
