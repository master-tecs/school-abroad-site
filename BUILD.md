# Docker Build Instructions

## Quick Build (Local Platform)

For most cases, you can build without specifying a platform:

```bash
docker build -t school-abroad:latest .
```

## Build for Specific Platform

If you need to build for a specific platform (e.g., for VPS):

### For AMD64 (x86_64) - Most VPS servers:
```bash
docker build --platform linux/amd64 -t school-abroad:latest .
```

### For ARM64 (Apple Silicon / ARM servers):
```bash
docker build --platform linux/arm64 -t school-abroad:latest .
```

## Common Build Commands

### Build and tag for GitHub Container Registry:
```bash
docker build --platform linux/amd64 -t ghcr.io/master-tecs/school-abroad:latest .
```

### Build and push to registry:
```bash
docker build --platform linux/amd64 -t ghcr.io/master-tecs/school-abroad:latest .
docker push ghcr.io/master-tecs/school-abroad:latest
```

### Build using Docker Compose:
```bash
docker compose build
```

## Troubleshooting

### Error: "no match for platform in manifest"
- Make sure you're using the correct platform name:
  - `linux/amd64` (not `linux/am64`)
  - `linux/arm64` (not `linux/arm`)
- Try building without the `--platform` flag first

### Error: "failed to solve"
- Check your internet connection
- Try: `docker pull node:20-alpine` first
- Clear Docker cache: `docker builder prune`

### Build is slow
- Use Docker BuildKit: `DOCKER_BUILDKIT=1 docker build .`
- Or enable it permanently in Docker settings

## Notes

- The Dockerfile uses multi-stage builds for optimization
- The final image is based on Alpine Linux for smaller size
- The app runs on port 10001 by default
- Make sure `.env.production` exists before building

