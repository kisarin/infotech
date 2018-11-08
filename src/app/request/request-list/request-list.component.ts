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

  constructor (private reqService: RequestService,
  private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.requests = this.reqService.getRequests();
  }

  onNewRequest() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEditRequest(index: number) {
    this.router.navigate([index, 'edit'], {relativeTo: this.route});
  }

  onDeleteRequest(index: number) {
    this.reqService.deleteRequest(index);
  }

}