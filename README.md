# Symphora - A Modern Music Player

Symphora is a sleek and intuitive web-based music player built with Next.js and Tailwind CSS. It allows you to browse and play a local collection of music, organized by genre.

## 🎵 About The Project

This project is a demonstration of a modern web application for streaming music. It features a clean interface, robust player controls, and a dynamic routing system for exploring albums.

### Built With

*   [Next.js](https://nextjs.org/) - React framework for production.
*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
*   [React Context API](https://reactjs.org/docs/context.html) - For state management of the music player.

## 🚀 Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/symphora.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

Here's a brief overview of the project's structure:

```
symphora/
├── public/                 # Contains all static assets like music and images
│   ├── electronic/
│   ├── hiphop/
│   ├── pop/
│   ├── randb/
│   └── rock/
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── album/[id]/     # Dynamic page for a single album
│   │   ├── search/         # Search page
│   │   ├── layout.js       # Main layout
│   │   └── page.js         # Home page
│   ├── components/         # Reusable React components
│   │   ├── AlbumCard.jsx
│   │   └── Sidebar.jsx
│   ├── context/            # React context for state management
│   │   └── PlayerContext.js
│   └── utils/              # Utility functions and data
│       └── localMusicData.js
├── next.config.mjs         # Next.js configuration
└── package.json            # Project dependencies and scripts
```

## ✨ Features

*   **Browse by Genre:** Discover music from a variety of genres.
*   **Album View:** View tracks within a specific album.
*   **Music Player:** A fully functional music player with play, pause, next, and previous track controls.
*   **Search Functionality:** Find your favorite songs and albums with a simple search.
*   **Responsive Design:** A seamless experience across all devices.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
