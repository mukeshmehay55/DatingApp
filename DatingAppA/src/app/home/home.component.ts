import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  // values: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // this.getValue();
  }
  registerToggle() {
    this.registerMode = true;
  }

  // getValue() {
  //   this.http.get('http://localhost:49248/weatherforecast').subscribe(
  //     (response) => {
  //       this.values = response;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  cancelRegisterMode(registeMode: boolean) {
    this.registerMode = registeMode;
  }
}
