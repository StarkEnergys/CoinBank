import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    styleUrls: ['dashboard.component.css',
                'icon.css'
              ],
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

  public canvas : any;
  
 

    ngOnInit(){
      

      var speedCanvas = document.getElementById("speedChart");

      var dataFirst = {
        data: [120,100,50,58,90,25,55,64,87,95,24,125,25,7,45,62,41],
        fill: true,
        borderColor: '#51CACF',
        backgroundColor: 'transparent',
        pointBorderColor: '#51CACF',
        pointRadius: 5,
        pointHoverRadius: 2,
        pointBorderWidth: 8,
      };

   

      var speedData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec","4"],
        datasets: [dataFirst]
      };

      var chartOptions = {
        legend: {
          display: false,
          position: 'top'
        }
      };

      var lineChart = new Chart(speedCanvas, {
        type: 'line',
        hover: true,
        data: speedData,
        options: chartOptions
      });
    }
}
