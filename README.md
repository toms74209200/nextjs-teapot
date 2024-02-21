# nextjs-teapot

"418 I'm a teapot" response by Next.js

## Environments

- Node.js v20.11.0
- React 18
- Next.js 14.1.0

- Visual Studio Code(Dev Containers)

## Usage

```bash
next-teapot$ npm run dev

> next-teapot@0.1.0 dev
> next dev

   ▲ Next.js 14.1.0
   - Local:        http://localhost:3000
```

The index page is implemented by ErrorPage. So, it returns a status code of 200, not 418.

```bash
$ curl -i localhost:3000
HTTP/1.1 200 OK
```

The endpoint `/teapot`, implemented as a Server-side API endpoint, returns a status code of 418.

```bash
$ curl -i localhost:3000/teapot
HTTP/1.1 418 I'm a teapot.
```

## References

- [2.3.2 418 I'm a teapot | RFC 2324: Hyper Text Coffee Pot Control Protocol (HTCPCP/1.0)](https://www.rfc-editor.org/rfc/rfc2324#section-2.3.2)
- [15.5.19. 418 (Unused) | RFC 9110: HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html#name-418-unused)

## License

[MIT License](LICENSE)

## Author

[toms74209200](<https://github.com/toms74209200>)
