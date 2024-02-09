const app = require('./src/app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
})

// process.on('SIGTERM', () => {
//     console.log('SIGTERM signal received.');
//     console.log('Closing http server.');
//     server.close(() => {
//         console.log('Http server closed.');
//     });
//     process.exit(0);
// })
