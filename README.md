# WkndNite Tech Documentation Site

Welcome to the WkndNite Tech Documentation Site! This project serves as my personal platform to share knowledge, document learning experiences, and explore various technical topics related to frontend development, backend integration, and more. It is a continuous work-in-progress and aims to inspire, educate, and connect with like-minded developers.

Explore my documentation site at [notion.wkndnite-tech.cn](https://notion.wkndnite-tech.cn) and [wkndnite-tech.vercel.app](https://wkndnite-tech.vercel.app) to learn more about my project and its features.

## 🌟 About the Project

This website is a technical blog and documentation hub designed to:

-   Record **frontend learning journeys** in areas like **HTML**, **CSS**, **JavaScript**, and **Vue.js**.
-   Explore and implement **frontend engineering concepts**, including build tools and performance optimization.
-   Share development practices and experiences in **Astro-Starlight**, **Docker**, and more.
-   Discuss principles, algorithms, and best practices.

The project is built with the goal of maintaining a balance between **learning**, **sharing**, and **practical application**.

## 🔥 Features

-   **Categorized Topics**: Organized into intuitive sections such as "CSS", "JavaScript", "Frontend Engineering", etc., for easier navigation.
-   **Interactive Design**: Uses a clean, modern interface with dark mode support.
-   **Personalized Content**: Focused on sharing insights gained from personal and professional projects.
-   **Performance-Oriented**: Built with optimization in mind to ensure fast loading and smooth interactions.

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🛠️ Getting Started

To run this project locally:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/wkndnite/WkndNite-Tech.git
    cd WkndNite-Tech
    ```

2. **Install dependencies**:
   Ensure you have Node.js installed, then run:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm run dev
    ```

4. **Visit the local server**:
   Open your browser and navigate to `http://localhost:4321`.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

⚠️ Commands above are provided by Starlight,if you have noticed that it doesn't run in my project,that's right!Cause I even didn't registered commands except dev.

## 📚 Documentation

Visit the site to explore topics on:

-   **Frontend Development**: Deep dives into CSS, JavaScript, and frameworks like Vue.js.
-   **Frontend Engineering**: Insights into tools like Webpack, Docker, and build optimizations.
-   **Algorithm Notes**: Personal takes on problem-solving and efficiency.
-   **Development Projects**: Detailed logs of hands-on project experiences.

## 🤝 Contributions

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and make improvements or raise issues directly in the GitHub repo.

## 📫 Connect with Me

-   **Personal Blog**: [notion.wkndnite-tech.cn](https://notion.wkndnite-tech.cn)
-   **Email**: [WkndNite@126.com](mailto:WkndNite@126.com)
-   **GitHub**: [github.com/wkndnite](https://github.com/wkndnite)

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 📝 Acknowledgments

-   Thanks to the [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/) communities for their amazing frameworks and tools.

-   Inspiration from my learning journey and fellow developers who share their knowledge.

---

> “Code is like humor. When you have to explain it, it’s bad.” – Cory House
