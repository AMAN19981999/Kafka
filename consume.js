const {kafka} = require("./client");


async function main(){
    const consumer = kafka.consumer({groupId:"userId"});
    await consumer.connect()

    await consumer.subscribe({topics:['rider-update'], fromBeginning:true});
    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(`[${topic}] : PART:${partition}` ,message.value.toString() )
        },
    })

    // await consumer.disconnect()
}
main()