# IlmUntisHub

A modern web application built with Laravel 13 and React.

## Requirements

- PHP 8.3+
- Composer
- Node.js 20+
- MySQL or PostgreSQL

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AhmadBakdash/IlmUntisHub.git
cd IlmUntisHub
```

### 2. Install Dependencies

```bash
composer install
npm install
```

### 3. Environment Setup

```bash
cp .env.example .env
php artisan key:generate
```

Edit `.env` with your database credentials:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ilmuntishub
DB_USERNAME=root
DB_PASSWORD=
```

### 4. Database Setup

```bash
php artisan migrate
```

Optionally seed with sample data:

```bash
php artisan db:seed
```

### 5. Build Frontend

```bash
npm run build
```

### 6. Start the App

```bash
php artisan serve
```

Visit `http://localhost:8000` in your browser.

---

## Development

Run the frontend in watch mode during development:

```bash
npm run dev
```

Run tests:

```bash
php artisan test
```

---

## Tech Stack

- **Backend** — Laravel 13
- **Frontend** — React 19, TypeScript
- **Styling** — Tailwind CSS 4
- **Components** — shadcn/ui
- **Routing** — Inertia.js 2
- **Auth** — Laravel Fortify (login, register, 2FA, password reset)

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'feat: add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## License

MIT License — see [LICENSE](LICENSE) for details.
