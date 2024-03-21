import { NextResponse } from "next/server";

const error = {
  code: 418,
  message: "I'm a teapot.",
};

const BodyElement = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>I&apos;m a teapot</title>
        <meta name="description" content="I'm a teapot" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        />
        <script
          src="/_next/static/chunks/polyfills.js"
          noModule={false}
        ></script>
      </head>
      <body style={{ margin: 0, lineHeight: "inherit" }}>
        <div
          style={{
            fontFamily:
              'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ lineHeight: "48px" }}>
            <style>
              {`body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}`}
            </style>
            <h1
              className="next-error-h1"
              style={{
                display: "inline-block",
                margin: "0 20px 0 0",
                paddingRight: "23px",
                fontSize: "24px",
                fontWeight: "500",
                verticalAlign: "top",
              }}
            >
              {error.code}
            </h1>
            <div style={{ display: "inline-block" }}>
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "28px",
                }}
              >
                {error.message}
              </h2>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export async function GET(request: Request) {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const component = <BodyElement />;
  const bodyHtml = Buffer.from(ReactDOMServer.renderToString(component));

  return new NextResponse(bodyHtml, {
    status: error.code,
    statusText: error.message,
    headers: {
      "Content-Type": "text/html",
    },
  });
}
