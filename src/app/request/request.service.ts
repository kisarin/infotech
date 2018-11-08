import {Injectable} from "@angular/core";
import {PeopleRequest} from "../model/people-request";
@Injectable()

export class RequestService {
  private requests: PeopleRequest[] = [
    new PeopleRequest(1, '2018-11-08', 1, 'Обращение за ЖКХ', 1),
    new PeopleRequest(2, '2018-11-07', 2, 'Обращение за пособием на ребенка', 1)
  ];

  setRequests(requests: PeopleRequest[]) {
    this.requests = requests;
  }

  getRequests() {
    return this.requests.slice();
  }

  getRequest(index: number) {
    return this.requests[index];
  }

  addRequest(request: PeopleRequest) {
    this.requests.push(request);
  }

  updateRequest(index: number, updRequest: PeopleRequest) {
    this.requests[index] = updRequest;
  }

  deleteRequest(index: number) {
    this.requests.slice(index, 1);
  }

}