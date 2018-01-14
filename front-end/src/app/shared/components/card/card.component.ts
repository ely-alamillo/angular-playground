import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "card",
  templateUrl: "./card.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./card.css"]
})
export class Card {
  @Input() cardText: string;
  @Input() cardTitle: string;
  @Input() avatarUrl: string;
  @Input() cardHref: string;
}
