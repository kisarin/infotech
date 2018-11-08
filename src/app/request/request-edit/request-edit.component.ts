import {Component} from "@angular/core";
import {PeopleRequest} from "../../model/people-request";

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
})

export class RequestEditComponent {
  request: PeopleRequest;
  editMode = false;
  reqIndex: number;

}