const screenz = require(".")
const test = require("ava")

test("main", (t) => {
	t.is(typeof screenz.height, "number")
	t.is(typeof screenz.width, "number")
})
