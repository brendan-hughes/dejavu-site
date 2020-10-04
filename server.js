const express = require('express');
const path = require('path');

const app = express();
app.use(express.json({ extended: false }));
app.use('/api/contact', require('./routes/api/contact'));

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('./build'));
}
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
