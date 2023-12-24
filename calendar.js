const calendar = document.getElementsByClassName("days").item(0);
const actualDay = document.getElementById("actual-day");
const yesterday = document.getElementById("yesterday");
const tomorrow = document.getElementById("tomorrow");
const days = document.getElementsByClassName("day");

const monthText = [
	'January', 'February', 'March', 'April',
	'May', 'June', 'July', 'August',
	'September', 'October', 'November', 'December'
];

const ACTUAL = "actual framed day inverse";
const DAY = "framed day";

export class Calendar {
	constructor(month, year, day) {
		this.month = month;
		this.year = year;
		this.day = day;
		this.bindControls();
		this.printCalendar();
	}

	increaseYear = () => this.year++;

	increaseMonth = () => {
		if (this.month == 12) {
			this.increaseYear();
			this.month = 1;
		} else {
			this.month += 1;
		}
		this.printCalendar();
		dispatchEvent(new Event('dateUpdated'));
	}

	increaseDay = () => {
		if (this.day == this.daysInMonth()) {
			this.increaseMonth();
			this.day = 1;
		} else {
			this.day += 1;
		}
		this.updateDay();
	}

	reduceDay = () => {
		if (this.day == 1) {
			this.reduceMonth();
			this.day = this.daysInMonth();
		} else {
			this.day -= 1;
		}
		this.updateDay();
	}

	reduceMonth = () => {
		if (this.month == 1) {
			this.reduceYear();
			this.month = 12;
		} else {
			this.month -= 1;
		}
		this.printCalendar();
		dispatchEvent(new Event('dateUpdated'));
	}

	reduceYear = () => this.year -= 1;

	printFullDay = (element) => element.textContent = `${monthText[this.month - 1]} ${this.day}, ${this.year}`;
	printDay = (element) => element.textContent = `${monthText[this.month - 1]} ${this.year}`;

	daysInMonth = () => new Date(this.year, this.month, 0).getDate();

	firstDay = () => new Date(this.year, this.month - 1, 1).getDay();

	printCalendar = () => {
		const calendarChildNodes = [];
		const firstDay = this.firstDay();
		const daysInMonth = this.daysInMonth();
		if (firstDay > 1) {
			for (let index = 1; index < firstDay; index++) {
				calendarChildNodes.push(Calendar.appendDay('', false));
			}
		}
		for (let index = 1; index <= daysInMonth; index++) {
			const dayElement = index == this.day
				? Calendar.appendDay(index, true)
				: Calendar.appendDay(index, false);
			calendarChildNodes.push(dayElement);
		}
		calendar.replaceChildren(...calendarChildNodes);
		this.printFullDay(actualDay);
	}

	setDay = (day) => {
		this.day = day;
		this.updateDay();
	}

	updateDay = () => {
		[...days].forEach((day, index) => {
			if (day.textContent == this.day) {
				days.item(index).setAttribute("class", ACTUAL);
			} else if (day.getAttribute("class") == ACTUAL) {
				days.item(index).setAttribute("class", DAY);
			}
		});
		this.printFullDay(actualDay);
	}

	static appendDay = (day, actual) => {
		const dayElement = document.createElement("time");
		if (actual) {
			dayElement.setAttribute("class", ACTUAL);
		} else {
			dayElement.setAttribute("class", DAY);
		}
		dayElement.textContent = day;
		return dayElement;
	}

	getDate = () => {
		return new Date(this.year, this.month, this.day);
	}

	bindControls = () => {
		yesterday.onclick = () => this.reduceDay();
		tomorrow.onclick = () => this.increaseDay();
		calendar.addEventListener("click", (day) => {
			if (day.target && day.target.tagName == "TIME" && day.target.textContent.length != 0) {
				this.setDay(parseInt(day.target.textContent));
			}
		})
	}
}