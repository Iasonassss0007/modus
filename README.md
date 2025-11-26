# Modus - Enterprise AI Platform

A modern AI platform inspired by Palantir AIP, built with Next.js 15, TypeScript, and cutting-edge AI technologies.

## Features

### Core Capabilities
- **AIP Assist** - Platform-wide AI assistant with context-aware responses
- **Agent Studio** - Create and manage custom AI agents with enterprise tools
- **Workflow Automation** - Build no-code/low-code automated workflows
- **Document Intelligence** - Process and analyze enterprise documents with RAG
- **Data Integration** - Connect multiple data sources (databases, APIs, files)
- **Real-time Analytics** - Monitor agents, workflows, and system performance
- **Security & Compliance** - Role-based access control and audit logging

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Shadcn/UI** - Beautiful, accessible components
- **Lucide Icons** - Modern icon library

### Backend
- **Prisma ORM** - Type-safe database access
- **PostgreSQL** - Relational database with pgvector extension
- **NextAuth.js** - Authentication
- **Zod** - Runtime validation

### AI/LLM
- **Vercel AI SDK** - Streaming AI responses
- **OpenAI API** - GPT-4 integration
- **LangChain.js** - Advanced agent workflows
- **Vector Embeddings** - Document search and RAG

### State Management
- **Zustand** - Lightweight state management
- **React Query** - Server state management

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- OpenAI API key

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Set up environment variables**

Edit `.env.local` and add your credentials:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/modus?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
OPENAI_API_KEY="your-openai-api-key"
```

3. **Set up database**

Make sure PostgreSQL is running with pgvector extension:
```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

Then run Prisma migrations:
```bash
npx prisma generate
npx prisma db push
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

## Project Structure

```
modus/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── chat/         # Chat API endpoint
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Dashboard page
├── components/            # React components
│   ├── ui/               # UI primitives
│   └── dashboard/        # Dashboard components
├── lib/                   # Utilities
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Helper functions
├── prisma/               # Database
│   └── schema.prisma     # Database schema
├── public/               # Static files
└── tailwind.config.js    # Tailwind configuration
```

## Key Features Implementation

### 1. AI Assist Chat
- Real-time streaming responses
- Context-aware assistance
- Quick action buttons
- Platform-wide integration

### 2. Agent Management
- Create custom AI agents
- Configure agent instructions and tools
- Monitor agent performance
- Real-time status updates

### 3. Workflow Builder
- Visual workflow designer (coming soon)
- Automated task execution
- Conditional logic and branching
- Integration with agents and data sources

### 4. Document Processing
- Upload and index documents
- Vector embeddings for semantic search
- RAG-powered Q&A
- Multi-format support

### 5. Data Sources
- Connect to databases (PostgreSQL, MySQL, etc.)
- API integrations
- File storage (S3, Azure Blob)
- Real-time data sync

## Database Schema

The platform includes models for:
- **Users & Authentication** - User accounts and sessions
- **Agents** - AI agent configurations
- **Conversations** - Chat history and messages
- **Documents** - Document storage with embeddings
- **Workflows** - Workflow definitions and executions

## Security

- Role-based access control (RBAC)
- API key authentication
- Audit logging
- Data encryption at rest and in transit
- Secure session management

## Development Roadmap

- [ ] Visual workflow builder
- [ ] Advanced agent tools (web search, code execution)
- [ ] Multi-user collaboration
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Mobile app
- [ ] API documentation and SDK
- [ ] Marketplace for agents and workflows

## Contributing

Contributions are welcome! Please read the contributing guidelines before getting started.

## License

ISC License

## Support

For questions and support, please open an issue on GitHub.
