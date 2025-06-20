# UnidadSearch – Multilingual Immigrant Resource Search Tool

UnidadSearch is a lightweight, multilingual web app designed to help immigrants quickly find trusted legal and procedural resources related to U.S. immigration. The tool is tailored for individuals navigating immigration proceedings — especially those without legal representation — and is offered freely for public use and nonprofit adaptation.

## 🌐 What It Does

- ✅ Accepts natural-language questions from users (e.g. *"How do I check my court date?"*)
- ✅ Supports dynamic clarification through simple follow-up questions (e.g. *"Do you have a lawyer?"*)
- ✅ Refines queries based on user context (city, legal status, language)
- ✅ Returns trustworthy links only — government (.gov), nonprofit (.org), and community legal support pages
- ✅ Interface is available in: **English, Spanish, French, Arabic, and Chinese**

## ⚙️ How It Works

UnidadSearch is built with:

- **Next.js (React)** for the frontend
- A lightweight backend API that queries a search engine using refined terms
- AI-assisted logic that helps determine the user’s “query intent” and generates clarifying suggestions (e.g. whether their question involves emergency court issues, work permits, or asylum deadlines)
- **No AI is used to generate the answers** — only to guide and refine the search query itself. All search results are sourced directly from external, verifiable websites.

> ⚠️ **Important**: UnidadSearch does not provide legal advice. It is an informational tool that routes users to public resources.

## 🤖 Acknowledging AI Use

AI assistance (via OpenAI’s GPT) was used in:

- Developing the query classification logic
- Generating and translating multilingual UI text
- Structuring the follow-up logic to support non-expert users

We intentionally avoided using AI to generate legal information or responses. All legal content surfaced in results comes from external, publicly trusted sources.

## 📦 Features Still in Development

- Additional language support (Tagalog, Haitian Creole)
- Offline mode for saved information
- Admin dashboard for nonprofits to track user questions anonymously

## 🤝 Who It's For

UnidadSearch was designed with and for:
- Pro se respondents in immigration proceedings
- Community-based legal aid organizations
- Volunteers, interpreters, and advocates helping individuals navigate immigration

We welcome collaborators and feedback from nonprofit orgs, public defenders, and legal educators.

App is currently functional: unidadsearch.vercel.app
