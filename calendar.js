

class Calendar {
	constructor(month, year, day) {
		this.month = month;
		this.year = year;
		this.actualDay = day;
		this.printCalendar();
		this.bindControls();
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
	};

	increaseDay = () => {
		if (this.actualDay == this.daysInMonth()) {
			this.increaseMonth();
			this.actualDay = 1;
		} else {
			this.actualDay += 1;
		}
		this.updateDay();
	};

	reduceDay = () => {
		if (this.actualDay == 1) {
			this.reduceMonth();
			this.actualDay = this.daysInMonth();
		} else {
			this.actualDay -= 1;
		}
		this.updateDay();
	};

	reduceMonth = () => {
		if (this.month == 1) {
			this.reduceYear();
			this.month = 12;
		} else {
			this.month -= 1;
		}
		this.printCalendar();
		dispatchEvent(new Event('dateUpdated'));
	};

	reduceYear = () => this.year -= 1;

	printFullDay = (element) => element.textContent = `${monthText[this.month - 1]} ${this.actualDay}, ${this.year}`;
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
			const dayElement = index == this.actualDay
				? Calendar.appendDay(index, true)
				: Calendar.appendDay(index, false);
			calendarChildNodes.push(dayElement);
		}
		calendar.replaceChildren(...calendarChildNodes);
		this.printFullDay(actualDay);
	};

	setDay = (day) => {
		this.actualDay = day;
		this.updateDay();
	};

	// Updates the days class attributes
	updateDay = () => {
		[...days].forEach((day, index) => {
			if (day.textContent == this.actualDay) {
				days.item(index).classList.add("actual", "framed", "day", "inverse");
			} else if (day.classList.contains("actual")) {
				days.item(index).classList.remove("actual");
				days.item(index).classList.remove("inverse");
			}
		});
		this.printFullDay(actualDay);
	};

	static appendDay = (day, actual) => {
		const dayElement = document.createElement("time");
		dayElement.classList.add("framed", "day");
		if (actual) {
			dayElement.classList.add("actual", "inverse");
		}
		dayElement.textContent = day;
		return dayElement;
	};

	getDate = () => {
		return new Date(this.year, this.month, this.actualDay);
	};

	bindControls = () => {
		yesterday.addEventListener("click", this.reduceDay);
		tomorrow.addEventListener("click", this.increaseDay);
		calendar.addEventListener("click", (day) => {
			if (day.target && day.target.tagName == "TIME" && day.target.textContent.length != 0) {
				this.setDay(parseInt(day.target.textContent));
			}
		});

		[...days].forEach(index => index.addEventListener("mouseover", () => {
			index.classList.add("hovered");
		}));

		[...days].forEach(index => index.addEventListener("mouseout", () => {
			index.classList.remove("hovered");
		}));
	};
}