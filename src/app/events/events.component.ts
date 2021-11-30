import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any = [];
  constructor(private _eventsSevice: EventService) { }

  ngOnInit(): void 
  {
    this._eventsSevice.getEvents().subscribe(
      res => this.events = res,
      error => console.log(error)
    )
  }
  
}
