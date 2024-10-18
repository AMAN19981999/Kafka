const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("> ");
rl.prompt();

rl.on("line ", async function (line) {
  const [riderName, location] = line.split(" ");
  await producer.send({
    topic: "rider-update",
    messages: [
      {
        partition: location.toLowerCase() === "north" ? 0 : 1,
        key: "rider-location",
        value: JSON.stringify({ name: riderName, location }),
      },
    ],
  });
}).on("close", async () => {
  await producer.disconnect();
});

async function main() {
  const producer = kafka.producer();
  console.log("connecting");
  await producer.connect();
  console.log("connected");
}
main();
