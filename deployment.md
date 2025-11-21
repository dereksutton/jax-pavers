# Deployment Guide for Jax Pavers

This guide outlines the steps to deploy the Jax Pavers application to [Render.com](https://render.com). The application consists of a React frontend (Static Site) and an Express backend (Web Service).

## Prerequisites

1.  **GitHub Account**: Ensure your code is pushed to a GitHub repository.
2.  **Render Account**: Sign up or log in to [Render.com](https://dashboard.render.com/).
3.  **Supabase Project**: You should have your Supabase project set up and the connection string ready.

## Deployment Steps

### 1. Connect to Render

1.  Go to the [Render Dashboard](https://dashboard.render.com/).
2.  Click **New +** and select **Blueprint**.
3.  Connect your GitHub account if you haven't already.
4.  Select the repository `jax-pavers`.
5.  Render will automatically detect the `render.yaml` file in the root of your repository.

### 2. Configure Environment Variables

Render will prompt you to review the services and environment variables defined in `render.yaml`.

#### Backend Service (`jax-pavers-api`)

You will need to provide the following environment variables for the backend. Some may be pre-filled from `render.yaml`, but you must ensure the sensitive ones are set correctly:

| Variable | Description | Value / Where to find |
| :--- | :--- | :--- |
| `NODE_VERSION` | Node.js version | `20.11.0` (Pre-filled) |
| `PORT` | Server port | `10000` (Pre-filled) |
| `SUPABASE_URL` | Supabase Project URL | Your Supabase Project Settings |
| `SUPABASE_KEY` | Supabase Anon Key | Your Supabase Project Settings |
| `SUPABASE_DB_URL` | PostgreSQL Connection String | Your Supabase Database Settings |
| `FRONTEND_URL` | URL of the deployed frontend | Leave blank initially, update after frontend deploy |

> [!IMPORTANT]
> For `SUPABASE_DB_URL`, ensure you use the connection string meant for "Transaction Mode" (port 6543) if you are in a serverless environment, or "Session Mode" (port 5432) otherwise. Render Web Services are persistent, so Session Mode (5432) is usually fine, but Transaction Mode is safer for scaling.

#### Frontend Service (`jax-pavers-web`)

| Variable | Description | Value |
| :--- | :--- | :--- |
| `VITE_API_URL` | URL of the backend API | Render will try to auto-link this. If not, you can set it manually after the backend is created. |

### 3. Apply Blueprint

1.  Click **Apply Blueprint**.
2.  Render will start deploying both services.
3.  You can monitor the logs for both the Web Service and the Static Site.

### 4. Post-Deployment Configuration

Once both services are live:

1.  **Get the Frontend URL**: Copy the URL of your deployed static site (e.g., `https://jax-pavers-web.onrender.com`).
2.  **Update Backend CORS**:
    - Go to your **Dashboard** > **jax-pavers-api** > **Environment**.
    - Add or Update `FRONTEND_URL` with the actual frontend URL.
    - Save changes. The service will restart automatically.
3.  **Verify**: Visit your frontend URL and test the application.

## Troubleshooting

-   **Build Failed**: Check the logs. Common issues include missing dependencies or script errors.
-   **CORS Errors**: Ensure the `FRONTEND_URL` in the backend environment variables matches exactly what is in your browser address bar (no trailing slash usually).
-   **Database Connection**: Verify your `SUPABASE_DB_URL` is correct and that your database is accepting connections.

## Local Development vs Production

-   **Local**: Uses `.env` file.
-   **Production**: Uses Render Environment Variables. Never commit `.env` files to GitHub.
