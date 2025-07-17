# 🚀 Next.js + Prisma CRUD Application

<div align="center">
  <p align="center">
    <a href="https://nextjs.org">
      <img src="https://assets.vercel.com/image/upload/v1662131399/nextjs/Icon_light_background.png" height="64" alt="Next.js" />
    </a>
    <span style="font-size: 2em; margin: 0 10px;">+</span>
    <a href="https://www.prisma.io">
      <img src="https://raw.githubusercontent.com/prisma/presskit/main/Assets/Prisma-DarkSymbol.png" height="64" alt="Prisma" />
    </a>
  </p>
  <h1>Modern Full-Stack CRUD Application</h1>
  <p>
    A production-ready CRUD application built with Next.js 14, Prisma, TypeScript, and Tailwind CSS
  </p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

## 📋 Table of Contents

- [✨ Features](#-features)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#-environment-variables)
  - [Database Setup](#-database-setup)
  - [Running the App](#-running-the-app)
- [🧩 Project Structure](#-project-structure)
- [🛠 Tech Stack](#-tech-stack)
- [🔧 Development](#-development)
  - [Available Scripts](#available-scripts)
  - [Code Formatting](#code-formatting)
  - [Linting](#linting)
- [🧪 Testing](#-testing)
- [🌐 API Endpoints](#-api-endpoints)
- [📦 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

- 🔍 Full CRUD operations
- ⚡ Server-side rendering (SSR) and Static Site Generation (SSG)
- 🛡️ Type-safe API routes with TypeScript
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🔄 Real-time data fetching with SWR
- 🔒 Authentication-ready (JWT)
- 🧪 Comprehensive test coverage
- 🐳 Docker support
- 🔄 CI/CD ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn
- PostgreSQL (or your preferred database)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nextjs-prisma-crud.git
   cd nextjs-prisma-crud
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update the `.env.local` file with your configuration.

### 🔧 Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/yourdb?schema=public"

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Authentication (if applicable)
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
```

### 🗄️ Database Setup

1. **Run database migrations**
   ```bash
   npx prisma migrate dev --name init
   ```

2. **Generate Prisma Client**
   ```bash
   npx prisma generate
   ```

3. **Seed the database (optional)**
   ```bash
   npx prisma db seed
   ```

### 🚀 Running the App

1. **Development mode**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

2. **Production build**
   ```bash
   npm run build
   npm start
   # or
   yarn build
   yarn start
   ```

## 🧩 Project Structure

```
nextjs-prisma-crud/
├── .github/                 # GitHub workflows and templates
├── app/                     # App Router
│   ├── api/                 # API routes
│   ├── components/          # Reusable components
│   ├── lib/                 # Utility functions and configurations
│   ├── styles/              # Global styles
│   └── ...
├── prisma/                  # Prisma schema and migrations
├── public/                  # Static files
├── tests/                   # Test files
├── .env.example             # Example environment variables
├── .eslintrc.json           # ESLint configuration
├── .gitignore
├── next.config.js           # Next.js configuration
├── package.json
├── README.md                # This file
└── tsconfig.json            # TypeScript configuration
```

## 🛠 Tech Stack

- **Frontend Framework**: [Next.js 14](https://nextjs.org/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) / [Jotai](https://jotai.org/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)
- **Linting**: [ESLint](https://eslint.org/)
- **Code Formatting**: [Prettier](https://prettier.io/)
- **Containerization**: [Docker](https://www.docker.com/)

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

## 📦 Deployment

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
  Made with ❤️ by Your Name
</div>
