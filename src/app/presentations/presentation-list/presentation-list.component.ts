import { Component, OnInit } from '@angular/core';
import { Presentation } from '../presentation';
import { PresentationService } from '../presentation.service';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.css'],
  providers: [PresentationService]
})
export class PresentationListComponent implements OnInit {


  presentations: Presentation[]
  selectedPresentation: Presentation


  constructor(private presentationService: PresentationService) { }

  ngOnInit() {
    this.presentationService
      .getPresentations()
      .then((presentations: Presentation[]) => {
        this.presentations = presentations.map((presentation) => {
          //if (!contact.phone) {
          //  contact.phone = {
          //    mobile: '',
          //    work: ''
          //  }
          //}
          return presentation;
        });
      });
  }

  selectPresentation(presentation: Presentation) {
    this.selectedPresentation = presentation
  }

  createNewPresentation() {
    var presentation: Presentation = {
      title: ''
    };

    this.selectPresentation(presentation);
  }

  private getIndexOfPresentation = (presentationId: String) => {
    return this.presentations.findIndex((presentation) => {
      return presentation._id === presentationId;
    });
  }

  deletePresentation = (presentationId: String) => {
    var idx = this.getIndexOfPresentation(presentationId);
    if (idx !== -1) {
      this.presentations.splice(idx, 1);
      this.selectPresentation(null);
    }
    return this.presentations;
  }

  addPresentation = (presentation: Presentation) => {
    this.presentations.push(presentation);
    this.selectPresentation(presentation);
    return this.presentations;
  }

  updatePresentation = (presentation: Presentation) => {
    var idx = this.getIndexOfPresentation(presentation._id);
    if (idx !== -1) {
      this.presentations[idx] = presentation;
      this.selectPresentation(presentation);
    }
    return this.presentations;
  }
}
