# Tasks

## Serve

```sh
PORT=$(env -u FORCE_COLOR -u CLICOLOR_FORCE npx --yes get-port-cli)
npx --yes watch-http-server . -p "$PORT" -o -a localhost
```
