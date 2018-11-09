import {Injectable} from "@angular/core";
import {PeopleRequest} from "../model/people-request";
import {Subject} from "rxjs";
@Injectable()

export class RequestService {
  requestsChanged = new Subject<PeopleRequest[]>();

  private requests: PeopleRequest[] = [
    new PeopleRequest(1, '2018-11-08', 1, 'Обращение за ЖКХ', 1),
    new PeopleRequest(2, '2018-11-07', 2, 'Обращение за пособием на ребенка', 1),
    new PeopleRequest(3, '2018-10-11', 0, 'Обращение за субсидией', 1)
  ];

  setRequests(requests: PeopleRequest[]) {
    this.requests = requests;
    this.requestsChanged.next(this.requests.slice());
  }

  getRequests() {
    return this.requests.slice();
  }

  getRequest(index: number) {
    return this.requests.find(x => x.id == index);  // [index];
  }

  addRequest(request: PeopleRequest) {
    this.requests.push(request);
    this.requestsChanged.next(this.requests.slice());
  }

  updateRequest(index: number, updRequest: PeopleRequest) {
    this.requests[index] = updRequest;
    this.requestsChanged.next(this.requests.slice());
  }

  deleteRequest(index: number) {
    this.requests.slice(index, 1);
    this.requestsChanged.next(this.requests.slice());
  }

}