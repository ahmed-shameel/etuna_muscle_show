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
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent implements AfterViewInit {
  @ViewChild("delayedText") delayedText!: ElementRef;

  constructor(private renderer: Renderer2) {}

  registrationForm = new FormGroup({
    from_name: new FormControl("", Validators.required),
    personnr: new FormControl("", Validators.required),
    from_email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", Validators.required),
    height: new FormControl("", Validators.required),
    weight: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    extra: new FormControl(""),
  });

  categories = [
    "Mens physique master open (40+)",
    "Mens physique junior -174 cm",
    "Mens physique junior +175 cm",
    "Mens physique senior -174 cm",
    "Mens physique senior +175 cm",
    "Mens physique senior +182 cm",
    "Wellness fitness master open (40+)",
    "Wellness fitness junior open",
    "Wellness fitness senior -163 cm",
    "Wellness fitness senior +164 cm",
    "Bodyfitness master open (40+)",
    "Bodyfitness junior open",
    "Bodyfitness -163 cm",
    "Bodyfitness +164 cm",
    "Bikini fitness master open (40+)",
    "Bikini fitness master open (35+)",
    "Bikini fitness junior open",
    "Bikini fitness -164 cm",
    "Bikini fitness -170 cm",
    "Bikini fitness +169 cm",
    "Womens physique master open (40+)",
    "Womens physique senior open",
    "Bodybuilding master Open (40+)",
    "Bodybuilding junior open",
    "Bodybuilding -85 kg",
    "Bodybuilding +85 kg",
    "Classic physique master open (40+)",
    "Classic physique junior open",
    "Classic physique -180 cm",
    "Classic physique + 180 cm",
    "Classic bodybuilding master open (40+)",
    "Classic bodybuilding junior",
    "Classic bodybuilding -180 cm",
    "Classic bodybuilding +180 cm",
  ];

  onSubmit() {
    this.sendEmail();

    console.log(this.registrationForm.value);

    alert("Your registration has been submitted");
    this.registrationForm.reset();
  }

  async sendEmail() {
    emailjs.init("K99hSUZG2BVzHetGn");
    let response = await emailjs.send("service_vlgjx65", "template_bhy12oi", {
      name: this.registrationForm.value.from_name,
      personnr: this.registrationForm.value.personnr,
      email: this.registrationForm.value.from_email,
      phone: this.registrationForm.value.phone,
      height: this.registrationForm.value.height,
      weight: this.registrationForm.value.weight,
      category: this.registrationForm.value.category,
    });
  }

  ngAfterViewInit() {
    // Wait for the view to be initialized and then add the visible class after 1000 milliseconds (1 second)
    setTimeout(() => {
      this.renderer.addClass(this.delayedText.nativeElement, "visible");
    }, 500);
  }
}
