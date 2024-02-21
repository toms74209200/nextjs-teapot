export async function GET(request: Request) {
  return new Response("I'm a teapot", {
    status: 418,
    statusText: "I'm a teapot",
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
