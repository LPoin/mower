const mowerMove = (x, y, init, sequence) => {
	const lawn = { x, y };
	let indexSeq = 0;

	const orientations = ["N", "E", "S", "W"];

	const positionInit = {
		x: init.charAt(0),
		y: init.charAt(2),
		orientation: init.charAt(4),
	};

	let indexOrient = orientations.findIndex(
		(orient) => orient === positionInit.orientation
	);
	let mowerPosition = {
		x: positionInit.x,
		y: positionInit.y,
		direction: positionInit.orientation,
	};

	document.write(
		`Mower's starting position : ${mowerPosition.x}, ${mowerPosition.y}, ${mowerPosition.direction} </br>`
	);

	console.log("START");

	for (i = 0; i < sequence.length; i++) {
		switch (sequence.charAt(indexSeq)) {
			case "L":
				if (mowerPosition.direction == "N") {
					indexOrient = orientations.length - 1;
					mowerPosition.direction = orientations[indexOrient];
				} else {
					indexOrient = indexOrient - 1;
					mowerPosition.direction = orientations[indexOrient];
				}
				indexSeq++;

				console.log("LEFT");
				console.log(`Mower's orientation : ${mowerPosition.direction}`);
				break;

			case "R":
				if (mowerPosition.direction == "W") {
					indexOrient = 0;
					mowerPosition.direction = orientations[indexOrient];
				} else {
					indexOrient = indexOrient + 1;
					mowerPosition.direction = orientations[indexOrient];
				}
				indexSeq++;

				console.log("RIGHT");
				console.log(`Mower's orientation : ${mowerPosition.direction}`);
				break;

			case "F":
				switch (mowerPosition.direction) {
					case "N":
						if (mowerPosition.y == lawn.y) {
							console.log("Out of zone");
							break;
						} else mowerPosition.y++;

						break;
					case "E":
						if (mowerPosition.x == lawn.x) {
							console.log("Out of zone");
							break;
						} else mowerPosition.x++;
						break;
					case "S":
						if (mowerPosition.y == 0) {
							console.log("Out of zone");
							break;
						} else mowerPosition.y--;
						break;
					case "W":
						if (mowerPosition.x == 0) {
							console.log("Out of zone");
							break;
						} else mowerPosition.x--;
						break;
				}

				indexSeq++;
				console.log("FORWARD");
				break;
		}
	}

	document.write(
		`Mower's final position : ${mowerPosition.x}, ${mowerPosition.y}, ${mowerPosition.direction} </br>`
	);
};

mowerMove(5, 5, "1 2 N", "LFLFLFLFF");
mowerMove(5, 5, "3 3 E", "FFRFFRFRRF");
