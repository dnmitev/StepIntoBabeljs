function wait(time) {
    return new Promise((r) => setTimeout(r, time));
}

async function asyncMania() {
    console.log('Hello');
    await wait(5000);
    console.log("Goodbye");
}

asyncMania()
    .then(() => console.log("JS Rocks!"));