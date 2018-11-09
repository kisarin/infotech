import {OnInit, Component} from "@angular/core";
import {PeopleRequest} from "../../model/people-request";
import {RequestService} from "../request.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html'
})

export class RequestListComponent implements OnInit {
  requests: PeopleRequest[];

  reqTypesDict = [
    {id: 0, value: 'Обращение по телефону'},
    {id: 0, value: 'Обращение по ЕПГУ'},
    {id: 0, value: 'МФЦ'}
  ];

  constructor (private reqService: RequestService,
  private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.requests = this.reqService.getRequests();
  }

  onNewRequest() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEditRequest(index: number) {
    console.log('Open ' + index + ' request.' )
    this.router.navigate([index, 'edit'], {relativeTo: this.route});
  }

  onDeleteRequest(index: number) {
    this.reqService.deleteRequest(index);
  }

}