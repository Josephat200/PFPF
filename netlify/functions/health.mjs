export default async () => new Response(JSON.stringify({ status: "ok", service: "josphat-labs-api" }), {
  status: 200,
  headers: { "content-type": "application/json" }
});