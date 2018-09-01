import clock from "clock";
import document from "document";

//Set when the clock activate itself.
clock.granularity = "minutes";

const timeLabel = document.getElementById("timeLabel");
clock.ontick = (evt) => {
	let today = evt.date;
	let hours = today.getHours();
	let mins = today.getMinutes();
	timeLabel.text = `${hours}:${mins}`;
}
