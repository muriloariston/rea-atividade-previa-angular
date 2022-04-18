import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-calculo",
  templateUrl: "./calculo.component.html",
  styleUrls: ["./calculo.component.css"]
})
export class CalculoComponent implements OnInit {
  title: String = "";
  calculateForm = new FormGroup({
    inputAltura: new FormControl(""),
    inputPeso: new FormControl(""),
    inputIMC: new FormControl("")
  });

  constructor() {
    this.title = "Cálculo IMC";
  }

  calculate(peso, altura) {
    let result = (peso / (altura * altura)).toFixed(2);
    if (parseFloat(result) < 18.5) {
      result += " - MAGREZA";
    } else if (18.5 <= parseFloat(result) && parseFloat(result) < 25) {
      result += " - NORMAL";
    } else if (25 <= parseFloat(result) && parseFloat(result) < 30) {
      result += " - SOBREPESO";
    } else if (30 <= parseFloat(result) && parseFloat(result) < 40) {
      result += " - OBESIDADE";
    } else {
      result += " - OBESIDADE GRAVE";
    }

    return result;
  }

  onSubmit() {
    let peso = this.calculateForm.get("inputPeso").value;
    let altura = this.calculateForm.get("inputAltura").value / 100;
    let calculo = this.calculate(peso, altura);

    this.calculateForm.get("inputIMC").setValue(calculo);
  }

  ngOnInit() {}
}
