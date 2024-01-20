import {Component, effect, input, OnInit} from '@angular/core';

/**
 *
 * @author ozay tunctan
 *
 **/

@Component({
  selector: 'conversation',
  templateUrl: 'conversation.component.html',
  styleUrl: 'conversation.component.scss',
  standalone: true
})

export class ConversationComponent implements OnInit {

  conversationId = input<number>(0, {
    alias: "consId"
  })

  constructor() {
    effect(() => {
        console.log(`conversion page id:${this.conversationId()}`)
      }
    );
  }

  ngOnInit() {
  }

}
