import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import emailjs from "@emailjs/browser";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.css"],
})
export class TicketsComponent implements AfterViewInit {
  @ViewChild("delayedText") delayedText!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ticketForm = new FormGroup({
    name: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    category: new FormControl("", Validators.required),
  });

  categories = ["Bronze 299kr", "Silver 399kr", "Gold 499kr"];

  onSubmit() {
    this.sendEmail();

    console.log(this.ticketForm.value);

    alert("Tack för ditt köp! Du kommer att få en bekräftelse via mejl");
    this.ticketForm.reset();
  }

  async sendEmail() {
    emailjs.init("K99hSUZG2BVzHetGn");
    let response = await emailjs.send("service_vlgjx65", "template_vca8s7i", {
      name: this.ticketForm.value.name,
      phone: this.ticketForm.value.phone,
      email: this.ticketForm.value.email,
      category: this.ticketForm.value.category,
    });
  }

  ngAfterViewInit() {
    // Wait for the view to be initialized and then add the visible class after 1000 milliseconds (1 second)
    setTimeout(() => {
      this.renderer.addClass(this.delayedText.nativeElement, "visible");
    }, 500);
  }
}
