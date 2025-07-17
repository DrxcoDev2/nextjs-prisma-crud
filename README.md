# Next.js & Prisma Enterprise-Grade Application

<div align="center">
  <h1>Enterprise-Grade Full-Stack Solution</h1>
  <p align="center">
    <a href="https://nextjs.org">
      <img src="https://assets.vercel.com/image/upload/v1662131399/nextjs/Icon_light_background.png" height="60" alt="Next.js" />
    </a>
    <span style="font-size: 2em; margin: 0 10px; color: #666; vertical-align: middle;">+</span>
    <a href="https://www.prisma.io">
      <img src="https://raw.githubusercontent.com/prisma/presskit/main/Assets/Prisma-DarkSymbol.png" height="60" alt="Prisma" />
    </a>
  </p>
  
  <p style="font-size: 1.2em; color: #555; max-width: 800px; margin: 0 auto 2em;">
    A robust, scalable, and maintainable full-stack application built with modern web technologies
  </p>
  
  <div style="margin: 1.5em 0;">
    <a href="https://nextjs.org/" target="_blank" style="margin: 0 5px;">
      <img src="https://img.shields.io/badge/Next.js-13.4+-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js">
    </a>
    <a href="https://www.prisma.io/" target="_blank" style="margin: 0 5px;">
      <img src="https://img.shields.io/badge/Prisma-5.0+-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma">
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank" style="margin: 0 5px;">
      <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
    </a>
    <a href="https://tailwindcss.com/" target="_blank" style="margin: 0 5px;">
      <img src="https://img.shields.io/badge/Tailwind_CSS-3.3+-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
    </a>
    <a href="https://nodejs.org/" target="_blank" style="margin: 0 5px;">
      <img src="https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js">
    </a>
  </div>
  
  <div style="margin: 1.5em 0;">
    <a href="#getting-started" style="margin: 0 10px; padding: 10px 20px; background-color: #2563eb; color: white; border-radius: 5px; text-decoration: none; font-weight: 500;">
      Get Started
    </a>
    <a href="#documentation" style="margin: 0 10px; padding: 10px 20px; border: 1px solid #2563eb; color: #2563eb; border-radius: 5px; text-decoration: none; font-weight: 500;">
      Documentation
    </a>
  </div>
</div>

## Table of Contents

- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Database Setup](#database-setup)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Key Features

### Core Functionality
- **Comprehensive CRUD Operations** - Full-featured Create, Read, Update, and Delete operations with proper validation
- **Type-Safe Development** - End-to-end type safety with TypeScript integration
- **Modern UI/UX** - Clean, responsive interface built with Tailwind CSS
- **Authentication System** - JWT-based authentication with role-based access control

### Performance & Scalability
- **Optimized Rendering** - Hybrid rendering with Server-Side Rendering (SSR) and Static Site Generation (SSG)
- **Efficient Data Fetching** - Real-time data synchronization using SWR
- **Database Optimization** - Prisma ORM with connection pooling and query optimization

### Developer Experience
- **Comprehensive Testing** - Unit, integration, and end-to-end testing with Jest and React Testing Library
- **Containerization** - Docker support for consistent development and deployment
- **CI/CD Ready** - Pre-configured GitHub Actions workflows for automated testing and deployment
- **Code Quality** - Enforced code style with ESLint and Prettier

### Security
- **Input Validation** - Robust validation using Zod schemas
- **Secure Authentication** - JWT with secure storage and refresh token rotation
- **API Protection** - Rate limiting and CORS policies

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0.0 or later
- **npm** 9.x or later, or **yarn** 1.22.x or later
- **PostgreSQL** 14+ (or your preferred database)
- **Git** 2.25.0 or later

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DrxcoDev2/nextjs-prisma-enterprise.git
   cd nextjs-prisma-enterprise
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Or using Yarn
   yarn install
   ```

3. **Set up environment configuration**
   ```bash
   cp .env.example .env.local
   ```

### Environment Configuration

Configure your environment by updating the `.env.local` file with the following variables:

```env
# Application
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/yourdb?schema=public"

# Authentication
NEXTAUTH_SECRET=generate-a-secure-secret-here
NEXTAUTH_URL=http://localhost:3000

# API Configuration
API_RATE_LIMIT=100
API_RATE_WINDOW=15m

# Logging
LOG_LEVEL=debug
ENABLE_REQUEST_LOGGING=true
```

> **Note**: For production deployments, ensure all sensitive values are properly secured and not committed to version control.

### Database Setup

#### Initial Setup

1. **Apply Database Migrations**
   ```bash
   # Create and apply initial migration
   npx prisma migrate dev --name init
   
   # Apply pending migrations in production
   npx prisma migrate deploy
   ```

2. **Generate Prisma Client**
   ```bash
   # Generate Prisma Client
   npx prisma generate
   
   # Regenerate client after schema changes
   npx prisma generate --watch
   ```

3. **Database Seeding (Optional)**
   ```bash
   # Seed the database with initial data
   npx prisma db seed
   ```

#### Development Workflow

```bash
# Start development server with Prisma Studio
npm run dev:with-studio

# Open Prisma Studio (separate terminal)
npx prisma studio
```

## Project Structure

```
nextjs-enterprise/
├── .github/                 # GitHub workflows and templates
│   ├── workflows/           # CI/CD pipelines
│   └── ISSUE_TEMPLATE/      # Issue templates
│
├── app/                     # Next.js 13+ App Router
│   ├── (auth)/              # Authentication routes
│   ├── api/                 # API route handlers
│   │   ├── v1/              # Versioned API endpoints
│   │   └── middleware.ts    # API middleware
│   │
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Base UI components
│   │   ├── forms/           # Form components
│   │   └── layout/          # Layout components
│   │
│   ├── config/              # Application configuration
│   ├── contexts/            # React contexts
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── styles/              # Global styles and themes
│   └── types/               # TypeScript type definitions
│
├── prisma/                  # Database schema and migrations
│   ├── migrations/          # Migration files
│   ├── schema.prisma        # Prisma schema
│   └── seed.ts              # Database seed script
│
├── public/                  # Static assets
│   ├── images/              # Image assets
│   └── favicon.ico          # Favicon
│
├── tests/                   # Test suites
│   ├── e2e/                 # End-to-end tests
│   ├── integration/         # Integration tests
│   └── unit/                # Unit tests
│
├── .env.example             # Environment variables template
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
└── tsconfig.json            # TypeScript configuration
```

## Technology Stack

### Core Technologies
- **Frontend Framework**: [Next.js 14](https://nextjs.org/) - React framework for server-rendered applications
- **Database ORM**: [Prisma 5.0+](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM
- **Styling**: [Tailwind CSS 3.3+](https://tailwindcss.com/) - Utility-first CSS framework
- **Type Safety**: [TypeScript 5.0+](https://www.typescriptlang.org/) - Type-safe JavaScript

### State Management & Data Fetching
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) - Minimalist state management
- **Data Fetching**: [SWR](https://swr.vercel.app/) - React Hooks for data fetching
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Performant form validation
- **Validation**: [Zod](https://zod.dev/) - TypeScript-first schema validation

### Development Tools
- **Testing**: 
  - [Jest](https://jestjs.io/) - Test runner
  - [React Testing Library](https://testing-library.com/) - React component testing
  - [MSW](https://mswjs.io/) - API mocking
- **Code Quality**: 
  - [ESLint](https://eslint.org/) - JavaScript/TypeScript linting
  - [Prettier](https://prettier.io/) - Code formatting
  - [Husky](https://typicode.github.io/husky/) - Git hooks
  - [lint-staged](https://github.com/okonet/lint-staged) - Run linters on git staged files

### Infrastructure
- **Containerization**: [Docker](https://www.docker.com/) - Container platform
- **CI/CD**: [GitHub Actions](https://github.com/features/actions) - Automated workflows
- **Hosting**: [Vercel](https://vercel.com/) - Cloud platform for static sites and Serverless Functions

## 🔧 Development

### Available Scripts

- `dev`: Start development server
- `build`: Create production build
- `start`: Start production server
- `lint`: Run ESLint
- `format`: Format code with Prettier
- `test`: Run tests
- `test:watch`: Run tests in watch mode
- `test:coverage`: Generate test coverage report
- `prisma:studio`: Open Prisma Studio

### Code Formatting

This project uses Prettier for code formatting. You can format your code using:

```bash
npm run format
# or
yarn format
```

### Linting

ESLint is used for linting. To check for linting errors:

```bash
npm run lint
# or
yarn lint
```

## 🧪 Testing

Run tests with the following commands:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Generate coverage report
npm run test:coverage
```

## 🌐 API Endpoints

### Items

- `GET /api/items` - Get all items
- `POST /api/items` - Create a new item
- `GET /api/items/:id` - Get a single item
- `PUT /api/items/:id` - Update an item
- `DELETE /api/items/:id` - Delete an item

## Deployment

### Kubernetes Deployment

This project includes Kubernetes manifests for deploying the application in a production environment.

#### Prerequisites

- [kubectl](https://kubernetes.io/docs/tasks/tools/) installed and configured
- [Minikube](https://minikube.sigs.k8s.io/docs/start/) (for local development) or access to a Kubernetes cluster
- [Docker](https://www.docker.com/) for building container images

#### Directory Structure

```
k8s/
├── namespace.yaml           # Kubernetes namespace
├── postgres-configmap.yaml  # PostgreSQL configuration
├── postgres-secret.yaml     # PostgreSQL secrets
├── postgres-deployment.yaml # PostgreSQL deployment
├── postgres-service.yaml    # PostgreSQL service
├── app-configmap.yaml       # Application configuration
├── app-secret.yaml          # Application secrets
├── app-deployment.yaml      # Application deployment
├── app-service.yaml         # Application service
├── ingress.yaml             # Ingress configuration (optional)
└── apply.sh                 # Deployment script
```

#### Local Development with Minikube

1. **Start Minikube**
   ```bash
   minikube start
   
   # Enable ingress addon if you want to use Ingress
   minikube addons enable ingress
   ```

2. **Build and load Docker image**
   ```bash
   # Build the Docker image
   docker build -t nextjs-prisma-app .
   
   # Load the image into Minikube
   minikube image load nextjs-prisma-app
   ```

3. **Deploy to Kubernetes**
   ```bash
   # Make the script executable
   chmod +x k8s/apply.sh
   
   # Run the deployment script
   ./k8s/apply.sh
   ```

4. **Access the application**
   ```bash
   # For Minikube, use the following to get the URL
   minikube service nextjs-app -n nextjs-prisma --url
   ```

#### Production Deployment

1. **Build and push your Docker image**
   ```bash
   docker build -t your-username/nextjs-prisma-app:latest .
   docker push your-username/nextjs-prisma-app:latest
   ```

2. **Update the image in app-deployment.yaml**
   ```yaml
   spec:
     containers:
     - name: nextjs-app
       image: your-username/nextjs-prisma-app:latest
   ```

3. **Apply the Kubernetes configurations**
   ```bash
   kubectl apply -f k8s/
   ```

4. **Set up Ingress (if needed)**
   - Update the `ingress.yaml` with your domain
   - Ensure you have an Ingress controller installed (e.g., nginx-ingress)
   - Apply the Ingress configuration:
     ```bash
     kubectl apply -f k8s/ingress.yaml
     ```

#### Database Migrations

To run database migrations in the Kubernetes cluster:

```bash
# Run migrations
kubectl run -n nextjs-prisma migrations --rm -it --restart=Never \
  --image=your-username/nextjs-prisma-app:latest -- \
  npx prisma migrate deploy

# Or run a shell in the pod for manual operations
kubectl exec -n nextjs-prisma -it $(kubectl get pods -n nextjs-prisma -l app=nextjs-app -o name | head -n 1) -- /bin/sh
```

#### Monitoring and Maintenance

```bash
# View all resources in the namespace
kubectl get all -n nextjs-prisma

# View logs
kubectl logs -n nextjs-prisma -l app=nextjs-app --tail=50

# Port forward for local access
kubectl port-forward -n nextjs-prisma svc/nextjs-app 3000:3000

# Access Prisma Studio
kubectl port-forward -n nextjs-prisma svc/postgres 5432:5432
```

### Docker Support

This project includes Docker configuration for both development and production environments.

#### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

#### Development with Docker

1. **Start the development environment**
   ```bash
   docker-compose up -d
   ```
   This will start:
   - Next.js development server on port 3000
   - PostgreSQL database on port 5432
   - Prisma Studio on port 5555

2. **Run database migrations**
   ```bash
   docker-compose exec app npx prisma migrate dev --name init
   ```

3. **Access the application**
   - Web application: http://localhost:3000
   - Prisma Studio (database GUI): http://localhost:5555

#### Production Build with Docker

1. **Build the production image**
   ```bash
   docker-compose -f docker-compose.prod.yml build
   ```

2. **Start the production stack**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

#### Useful Commands

- View logs:
  ```bash
  docker-compose logs -f app
  ```

- Run database migrations in production:
  ```bash
  docker-compose exec app npx prisma migrate deploy
  ```

- Access database shell:
  ```bash
  docker-compose exec db psql -U postgres
  ```

- Stop all containers:
  ```bash
  docker-compose down
  ```

- Stop and remove all containers, networks, and volumes:
  ```bash
  docker-compose down -v
  ```

#### Environment Variables

For production, create a `.env` file with your production database credentials and other environment variables. The Docker Compose file uses the following defaults:

```env
# Database
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=nextjs_prisma
DATABASE_URL=postgresql://postgres:postgres@db:5432/nextjs_prisma?schema=public

# Next.js
NODE_ENV=production
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### Multi-Stage Build

The Dockerfile uses multi-stage builds to optimize the final image size:
1. `base` - Base Node.js image
2. `deps` - Installs dependencies
3. `builder` - Builds the application
4. `runner` - Production-ready image with minimal dependencies

## Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fnextjs-prisma-crud)

1. Push your code to a GitHub repository
2. Import the repository on Vercel
3. Set up environment variables in the Vercel dashboard
4. Deploy!

### Docker

1. Build the Docker image:
   ```bash
   docker build -t nextjs-prisma-crud .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 nextjs-prisma-crud
   ```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with ❤️ by Drxco
</div>
