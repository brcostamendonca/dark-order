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

  ngOnInit() {
  }

  constructor(private presentaitonService: PresentationService) { }

  createPresentation(presentation: Presentation) {
    this.presentaitonService.createPresentation(presentation);
    //this.contactService.createContact(contact).then((newContact: Contact) => {
    //  this.createHandler(newContact);
    //});
  }

  updatePresentation(presentation: Presentation): void {
    this.presentaitonService.updatePresentation(presentation);
    //this.contactService.updateContact(contact).then((updatedContact: Contact) => {
    //  this.updateHandler(updatedContact);
    //});
  }

  deletePresentation(presentationId: String): void {
    this.presentaitonService.deletePresentation(presentationId);
    //this.contactService.deleteContact(contactId).then((deletedContactId: String) => {
    //  this.deleteHandler(deletedContactId);
    //});

  }

}
