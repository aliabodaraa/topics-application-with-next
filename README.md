# Topics System - Social Discussion Platform

A modern social platform where users can create topics, share posts, and engage in discussions with OAuth2 authentication.

<div className="text-center">
  <h3 className="flex flex justify-center gap-x-4">
    <a
      href="https://topics-application-with-next.vercel.app/"
      target="_blank"
      className="mt-3"
    >
      Live Demo 🚀
    </a>
  </h3>
</div>

## ✨ Features

- **OAuth2 Authentication** - Sign in with Google or GitHub
- **Topic Creation** - Create and manage discussion topics
- **Social Interaction** - Posts, comments, likes, and tags
- **Modern Stack** - Next.js 16, Tailwind CSS, NextUI
- **Serverless Database** - Neon PostgreSQL with Prisma

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, NextUI Components
- **Backend**: Next.js API Routes, Server Actions
- **Database**: Neon PostgreSQL (Serverless)
- **ORM**: Prisma with Neon Adapter
- **Authentication**: NextAuth.js (Google/GitHub OAuth)
- **Deployment**: Vercel

## 📦 Project Structure
```
topics-system/
├── app/ # Next.js app router
│ ├── api/ # API routes
│ ├── auth/ # Authentication pages
│ └── topic/ # Topic pages
├── components/ # React components
│ ├── topic/ # Topic-related components
│ ├── post/ # Post and comment components
│ └── ui/ # Reusable UI components
├── lib/ # Utilities and configs
│ ├── db/ # Database configuration
│ ├── auth.ts # Auth configuration
│ └── actions.ts # Server actions
├── prisma/ # Database schema
│ └── schema.prisma
└── public/ # Static assets
```

## 🗄️ Database Schema (Prisma)

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  image     String?
  createdAt DateTime @default(now())

  topics   Topic[]
  posts    Post[]
  comments Comment[]
}

model Topic {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  description String?
  tags        String[]
  createdAt   DateTime @default(now())

  createdBy User   @relation(fields: [userId], references: [id])
  userId    String
  posts     Post[]
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String
  createdAt DateTime @default(now())

  author   User   @relation(fields: [authorId], references: [id])
  authorId String
  topic    Topic  @relation(fields: [topicId], references: [id])
  topicId  String
  comments Comment[]
}

model Comment {
  id        String   @id @default(cuid())
  content   String
  createdAt DateTime @default(now())

  author   User   @relation(fields: [authorId], references: [id])
  authorId String
  post     Post   @relation(fields: [postId], references: [id])
  postId   String
}
```
## Environment Variables
```
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="NEXTAUTH_URL"
NEXTAUTH_SECRET="your-secret"

# GitHub OAuth
GITHUB_CLIENT_ID="..."
GITHUB_CLIENT_SECRET="..."

# Google OAuth
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
```

