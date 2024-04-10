import createFeedbackAPI from "@upstash/feedback/api";

const handler = createFeedbackAPI({
  webhooks:[process.env.SLACK_WEBHOOK_URL],
});

console.log("api/feedback")
console.log(handler)

export  {handler as POST} ;

