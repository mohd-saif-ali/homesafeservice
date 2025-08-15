# Overview

This is a full-stack web application for a home painting and renovation service company called "HomeSafeService". The application serves as a customer-facing platform where users can browse services, view testimonials, submit booking requests, and contact the business. The app features a modern, responsive design built with React and uses a PostgreSQL database for data persistence.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React with TypeScript and follows a component-based architecture. Key architectural decisions include:

- **UI Framework**: Uses shadcn/ui components built on top of Radix UI primitives for consistent, accessible UI components
- **Styling**: TailwindCSS for utility-first styling with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod for validation
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
The backend follows a RESTful API design pattern built with Express.js:

- **Framework**: Express.js with TypeScript for type safety
- **API Design**: RESTful endpoints for CRUD operations on services, bookings, testimonials, and contact messages
- **Data Validation**: Zod schemas for runtime validation and type inference
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot reloading with Vite integration for seamless full-stack development

## Data Storage Solution
The application uses PostgreSQL as the primary database with full functionality:

- **Database**: PostgreSQL as the primary database (configured via Drizzle ORM)
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Production Storage**: `DatabaseStorage` implementation connected to PostgreSQL for all CRUD operations
- **Schema**: Shared TypeScript schema definitions between frontend and backend using Drizzle-Zod integration
- **Tables**: bookings, contact_messages, testimonials, services with proper relationships
- **Functionality**: Fully functional booking system, contact forms, and data persistence

The storage layer is abstracted through an interface (`IStorage`) with complete database integration.

## Authentication and Authorization
Currently, the application does not implement user authentication as it's designed as a public-facing service platform. All endpoints are publicly accessible for browsing services and submitting inquiries.

# External Dependencies

## Database Services
- **PostgreSQL**: Primary database for production (Neon Database configured)
- **Drizzle ORM**: Type-safe database toolkit for schema management and queries

## UI and Styling
- **Radix UI**: Headless UI primitives for accessible components
- **TailwindCSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon library (specifically for WhatsApp integration)

## State Management and Data Fetching
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime schema validation

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production builds

## Third-party Integrations
- **WhatsApp Business API**: Customer communication via floating WhatsApp button (Phone: +91 99081 27608)
- **Google Fonts**: Typography (Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Unsplash**: Image hosting for service galleries and testimonials

## Hosting and Deployment
- **Replit**: Development and hosting platform with integrated banner and cartographer tools for development environment