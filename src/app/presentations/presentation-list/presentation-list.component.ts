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
}
