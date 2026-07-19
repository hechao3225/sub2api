# Local-only deployment notes.
# Secrets are intentionally excluded from Git. Use .env on the server.
# Admin UI: https://ai.toolmate.cn
# Account import: 管理后台 -> 账号管理 -> 添加账号 -> OpenAI/Codex -> 导入 Session JSON

## Build The AIMate Image

Generate `backend/internal/web/dist` on a development machine, copy the clean
build context to the server, and run:

```bash
docker build \
  -f deploy/production/Dockerfile.prebuilt \
  -t aimate/sub2api:0.1.161-aimate.1 \
  --build-arg VERSION=0.1.161-aimate.1 \
  --build-arg COMMIT=<git-commit> \
  .
```

The production server compiles only the Go backend. The generated frontend is
embedded into the binary, and the existing official runtime image supplies the
entrypoint and PostgreSQL client libraries.
