import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <form class="example-form">
      <mat-form-field class="example-full-width" appearance="fill">
        <mat-label>Favorite food</mat-label>
        <input matInput placeholder="Ex. Pizza" value="Sushi">
      </mat-form-field>

      <mat-form-field class="example-full-width" appearance="fill">
        <mat-label>Leave a comment</mat-label>
        <textarea matInput placeholder="Ex. It makes me feel..."></textarea>
      </mat-form-field>
    </form>
  `,
  styleUrls: ['my-lib.component.scss']
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
