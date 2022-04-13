import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { bookingChartOptions, miniChartOptions, bookingStatusOptions } from '../../utils/line-chart.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  lineChartData = {
    datasets: [
      {
        data: [ 59, 80, 81, 56, 55, 40 ],
        borderColor: '#147AD6'
      },
      {
        data: [ 48, 40, 19, 86, 27, 90 ],
        borderColor: '#EC6666'
      }
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ]
  };
  compBookChartData:any;
  compBookChartOptions:any = bookingStatusOptions;
  
  pendBookChartData:any;
  
  inProgBookChartData:any;

  lateData = [{
    title:'Booking Trick',
    date:'02 Jan 2022'
  }, {
    title:'How to communicate',
    date:'02 Jan 2022'
  },{
    title:'Tricks to concert cold',
    date:'02 Jan 2022'
  }]
  notiData = [{
    title:'Meet w/',
    time:'01:00 PM - 02:00'
  }, {
    title:'Fitness',
    time:'01:00 PM - 02:00'
  },{
    title:'Reading',
    time:'01:00 PM - 02:00'
  }]
  miniChartData:any = {
    datasets:[
      {
        data: [ 2, 0, 6 ],
        borderColor:"#fff"
      }
    ],
    label:["a", "b", "c"]
  }
  public lineChartOptions: any = bookingChartOptions;
  public miniChartOptions:any = miniChartOptions;
  constructor(private el:ElementRef, private cdr: ChangeDetectorRef) { 
   } 

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    var x = window.matchMedia("(max-width: 768px)")
    if(x.matches){
      let smallCards:HTMLElement =  this.el.nativeElement.querySelector('#smallCards');
      let copyForParent:HTMLElement = smallCards;
      smallCards.remove();
      let parentCard:any =  this.el.nativeElement.querySelector('#bigHCards');
      parentCard.append(copyForParent)
    }
    var ctx = this.el.nativeElement.querySelector("#chart1").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(20, 122, 214, 1)');   
    gradient.addColorStop(1, 'rgba(20, 122, 214, 0)');
    var ctx2 = this.el.nativeElement.querySelector("#chart2").getContext("2d");
    var gradient2 = ctx2.createLinearGradient(0, 0, 0, 200);
    gradient2.addColorStop(0, 'rgba(236, 102, 102, 1)');   
    gradient2.addColorStop(1, 'rgba(236, 102, 102, 0)');
    var ctx3 = this.el.nativeElement.querySelector("#chart3").getContext("2d");
    var gradient3 = ctx3.createLinearGradient(0, 0, 0, 200);
    gradient3.addColorStop(0, 'rgba(121, 210, 222, 1)');   
    gradient3.addColorStop(1, 'rgba(121, 210, 222, 0)');
    this.compBookChartData = {
      datasets:[
        {
          data: [ 65, 59, 80, 81, 56, 55, 40 ],
          fill:true,
          backgroundColor: gradient,
          borderColor: '#147AD6',
          pointBackgroundColor: '#147AD6',
          pointBorderColor: '#147AD6',
          pointHoverBackgroundColor: '#147AD6',
          pointHoverBorderColor: '#FFF'
        }
      ],
      labels: ["M", "T", "W", "T", "F", "S", "S"]
    };
    this.pendBookChartData = {
      datasets:[
        {
          data: [ 65, 59, 80, 81, 56, 55, 40 ],
          fill:true,
          backgroundColor: gradient2,
          borderColor: '#EC6666',
          pointBackgroundColor: '#EC6666',
          pointBorderColor: '#EC6666',
          pointHoverBackgroundColor: '#EC6666',
          pointHoverBorderColor: '#FFF'
        }
      ],
      labels: ["M", "T", "W", "T", "F", "S", "S"]
    };
    this.inProgBookChartData = {
      datasets:[
        {
          data: [ 65, 59, 80, 81, 56, 55, 40 ],
          fill:true,
          backgroundColor: gradient3,
          borderColor: '#79D2DE',
          pointBackgroundColor: '#79D2DE',
          pointBorderColor: '#79D2DE',
          pointHoverBackgroundColor: '#79D2DE',
          pointHoverBorderColor: '#FFF'
        }
      ],
      labels: ["M", "T", "W", "T", "F", "S", "S"]
    };
    
    this.cdr.detectChanges();
  }

}
