exports.hey = (req, res) => {
	let message = req.query.message || "no message provided!";
	res.status(200).send(message);
};
