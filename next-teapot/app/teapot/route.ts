import { NextResponse } from "next/server";

const error = {
  code: 418,
  message: "I'm a teapot.",
};

const body = `
<html>
<head>
  <meta charSet="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>I'm a teapot</title>
  <meta name="description" content="I'm a teapot"/>
  <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"/>
  <script src="/_next/static/chunks/polyfills.js" noModule=""></script>
</head>
<body style="margin: 0;line-height: inherit;">
<div style="font-family:system-ui,&quot;Segoe UI&quot;,Roboto,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;;height:100vh;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center">
<div style="line-height:48px">
  <style>
    body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}
  </style>
  <h1 class="next-error-h1" style="display:inline-block;margin:0 20px 0 0;padding-right:23px;font-size:24px;font-weight:500;vertical-align:top">${error.code}</h1>
  <div style="display:inline-block">
    <h2 style="font-size:14px;font-weight:400;line-height:28px">${error.message}</h2>
  </div>
</div>
</div>
</body>
</html>
`;

export async function GET(request: Request) {
  return new NextResponse(body, {
    status: 418,
    statusText: "I'm a teapot.",
    headers: {
      "Content-Type": "text/html",
    },
  });
}
