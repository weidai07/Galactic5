import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Earth, Mercury, Venus, Mars, Jupiter } from './scripts';


$(document).ready(function() {

  let human = new Earth ("30");
  const mercuryHuman = (this.earthAge * 0.24)
  const venusHuman = (this.earthAge * 0.62)
  const marsHuman = (this.earthAge * 1.88)
  const jupiterHuman = (this.earthAge * 11.86)

    if (human.age === "30"){
      $("#display").append("I am 30!");
      $("#years").show();
}});
