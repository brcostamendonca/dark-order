import { Component, OnInit, Input } from '@angular/core';
import { PresentationService } from '../presentation.service';
import { Presentation } from '../presentation';

@Component({
  selector: 'presentation-details',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  @Input()
  presentation: Presentation;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  ngOnInit() {
  }

  constructor(private presentaitonService: PresentationService) { }

  createPresentation(presentation: Presentation) {
    this.presentaitonService.createPresentation(presentation);
    this.presentaitonService.createPresentation(presentation).then((newPresentation: Presentation) => {
      this.createHandler(newPresentation);
    });
  }

  updatePresentation(presentation: Presentation): void {
    this.presentaitonService.updatePresentation(presentation);
    this.presentaitonService.updatePresentation(presentation).then((updatedPresentation: Presentation) => {
      this.updateHandler(updatedPresentation);
    });
  }

  deletePresentation(presentationId: String): void {
    this.presentaitonService.deletePresentation(presentationId);
    this.presentaitonService.deletePresentation(presentationId).then((deletedPresentationId: String) => {
      this.deleteHandler(deletedPresentationId);
    });

  }

}
