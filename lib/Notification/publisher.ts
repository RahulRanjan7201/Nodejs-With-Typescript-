import {connect} from 'mqtt';
var client = connect("http://localhost", {
  port:  1883
});

client.on("connect", () => {
    console.log("Publisher Client is connected");
})

export const Notification = {
    sendSMS: (to, subject, data) => {
      client.publish(
        "sms",
        JSON.stringify({
          to: to,
          data: data,
          subject: subject
        }),
        {
          qos: 2
        }
      );
    }
}