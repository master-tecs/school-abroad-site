# Docker Deployment Guide for Hostinger VPS

This guide will help you deploy the School Abroad application to your Hostinger VPS using Docker.

## Prerequisites

- Hostinger VPS with Docker and Docker Compose installed
- SSH access to your VPS
- Domain name pointing to your VPS IP (optional but recommended)

## Step 1: Install Docker on Hostinger VPS

If Docker is not already installed, run:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose-plugin -y

# Add your user to docker group (optional, to run without sudo)
sudo usermod -aG docker $USER

# Verify installation
docker --version
docker compose version
```

## Step 2: Upload Your Code to VPS

### Option A: Using Git (Recommended)

```bash
# SSH into your VPS
ssh root@your-vps-ip

# Clone your repository
git clone <your-repo-url> school-abroad-site
cd school-abroad-site
```

### Option B: Using SCP

```bash
# From your local machine
scp -r . root@your-vps-ip:/root/school-abroad-site
```

## Step 3: Create Environment File

Create a `.env.production` file on your VPS with all required environment variables:

```bash
cd /root/school-abroad-site
nano .env.production
```

Add all your environment variables:

```env
# Database
DATABASE_URL="your-neon-database-url"

# Authentication
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="https://dev.schoolabroad.org"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Polar.sh
POLAR_ACCESS_TOKEN="your-polar-access-token"
POLAR_WEBHOOK_SECRET="your-webhook-secret"
NEXT_PUBLIC_STARTER_TIER="your-starter-product-id"
NEXT_PUBLIC_STARTER_SLUG="your-starter-slug"

# OpenAI
OPENAI_API_KEY="your-openai-api-key"

# Cloudflare R2 Storage
CLOUDFLARE_ACCOUNT_ID="your-cloudflare-account-id"
R2_UPLOAD_IMAGE_ACCESS_KEY_ID="your-r2-access-key-id"
R2_UPLOAD_IMAGE_SECRET_ACCESS_KEY="your-r2-secret-access-key"
R2_UPLOAD_IMAGE_BUCKET_NAME="your-r2-bucket-name"

# Email (Resend)
RESEND_API_KEY="your-resend-api-key"
```

Save and exit (Ctrl+X, then Y, then Enter).

## Step 4: Build and Run with Docker

```bash
# Build the Docker image
docker compose build

# Start the container
docker compose up -d

# Check if container is running
docker ps

# View logs
docker compose logs -f
```

## Step 5: Configure Nginx (Reverse Proxy)

If you want to use Nginx as a reverse proxy (recommended), create a configuration:

```bash
sudo nano /etc/nginx/sites-available/school-abroad
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name dev.schoolabroad.org;

    location / {
        proxy_pass http://localhost:10001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/school-abroad /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Step 6: Set Up SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d dev.schoolabroad.org

# Auto-renewal is set up automatically
```

## Step 7: Useful Docker Commands

```bash
# View logs
docker compose logs -f

# Stop the container
docker compose down

# Restart the container
docker compose restart

# Rebuild and restart
docker compose up -d --build

# View container status
docker ps

# Execute commands inside container
docker exec -it school-abroad-app sh
```

## Step 8: Update Your Application

When you need to update your application:

```bash
# Pull latest changes (if using Git)
git pull

# Rebuild and restart
docker compose up -d --build
```

## Troubleshooting

### Container won't start
```bash
# Check logs
docker compose logs

# Check if port is already in use
sudo netstat -tulpn | grep 10001
```

### Database connection issues
- Verify DATABASE_URL is correct
- Check if database allows connections from your VPS IP

### Build fails
- Ensure all environment variables are set
- Check Docker has enough memory (at least 2GB recommended)

### Nginx 502 Bad Gateway
- Verify Docker container is running: `docker ps`
- Check Nginx proxy_pass URL matches container port
- Verify firewall allows port 10001

## Security Recommendations

1. **Firewall Setup:**
```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

2. **Keep Docker Updated:**
```bash
sudo apt update && sudo apt upgrade docker.io -y
```

3. **Regular Backups:**
- Backup your `.env.production` file
- Backup your database regularly

## Monitoring

You can set up monitoring with:

```bash
# View resource usage
docker stats school-abroad-app

# View container logs
docker compose logs --tail=100 -f
```

---

For more help, check the Docker documentation or contact support.

