import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("fadeInOut", [
      state("void", style({ opacity: 0 })),
      transition(":enter, :leave", [animate(1000)]), // Adjust the duration as needed
    ]),
    trigger("dateBounce", [
      state("void", style({ transform: "scale(0)" })),
      transition(":enter", [
        animate(
          "1s",
          keyframes([
            style({ transform: "scale(0)", offset: 0 }),
            style({ transform: "scale(1.2)", offset: 0.5 }),
            style({ transform: "scale(1)", offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild("delayedText") delayedText!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.renderer.addClass(this.delayedText.nativeElement, "visible");
    }, 650);
  }
}
