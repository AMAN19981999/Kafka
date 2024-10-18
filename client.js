const { Kafka } = require("kafkajs"); // import of kafka

exports.kafka = new Kafka({
  clientId: "myapp",
  brokers: ["192.168.1.7:9092"],
}); // that kafka must have a id or address // db connection
