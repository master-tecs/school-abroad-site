#!/bin/bash

# School Abroad - Docker Deployment Script
# This script helps deploy the application to Hostinger VPS

set -e

echo "🚀 Starting deployment process..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Check if .env.production exists
if [ ! -f .env.production ]; then
    echo "⚠️  Warning: .env.production file not found!"
    echo "Please create .env.production with all required environment variables."
    read -p "Do you want to continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "📦 Building Docker image..."
docker compose build

echo "🛑 Stopping existing containers (if any)..."
docker compose down

echo "🚀 Starting containers..."
docker compose up -d

echo "⏳ Waiting for application to start..."
sleep 10

echo "📊 Checking container status..."
docker ps | grep school-abroad-app

echo "📝 Viewing recent logs..."
docker compose logs --tail=50

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your application should be running at:"
echo "  - http://localhost:10001"
echo "  - http://your-vps-ip:10001"
echo ""
echo "Useful commands:"
echo "  - View logs: docker compose logs -f"
echo "  - Stop app: docker compose down"
echo "  - Restart app: docker compose restart"
echo "  - Rebuild: docker compose up -d --build"
echo ""

