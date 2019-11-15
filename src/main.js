import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Earth, Mercury, Venus, Mars, Jupiter } from './scripts';


$(document).ready(function() {

  let human = new Earth ("30");
  const mercuryHuman = (human * 0.24)
  const venusHuman = (human * 0.62)
  const marsHuman = (human * 1.88)
  const jupiterHuman = (human * 11.86)

    if (human.earthAge === "30"){
      $("#display").append("I am 30!");
      $("#years").show();
}
});
