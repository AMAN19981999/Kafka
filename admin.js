const { kafka } = require("./client");

async function main() {
  const admin = kafka.admin();
  //   console.log("admin connecting");
  admin.connect();
  //   console.log("admin connected"); // connecting adimin

  //   console.log("created0");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-update",
        numPartitions: 4,
      },
    ],
  }); // topic creation
  //   console.log("succescs cerated  topic");

  //   console.log("Disconnecting");
  await admin.disconnect();
  //   console.log("disconnected");
}
main();
