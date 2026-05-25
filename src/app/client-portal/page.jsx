"use client";

import { useState } from "react";
import clientsData from "@/data/clients.json";

export default function ClientPortalPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInClient, setLoggedInClient] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const client = clientsData.clients.find(
      (item) =>
        item.username.toLowerCase().trim() === username.toLowerCase().trim() &&
        item.password === password
    );

    if (!client) {
      setError("Invalid username or password.");
      return;
    }

    setLoggedInClient(client);
  };

  const handleLogout = () => {
    setLoggedInClient(null);
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl items-center justify-center">
        <section className="w-full rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur md:p-10">
          {!loggedInClient ? (
            <div className="mx-auto max-w-md">
              <div className="mb-8 text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                  Client Portal
                </p>
                <h1 className="text-3xl font-bold md:text-4xl">
                  Login to Download
                </h1>
                <p className="mt-3 text-sm text-slate-300">
                  Enter your assigned username and password to access your
                  software files.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-blue-400"
                  />
                </div>

                {error && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-600"
                >
                  Login
                </button>
              </form>
            </div>
          ) : (
            <div>
              <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                    Downloads
                  </p>
                  <h1 className="text-3xl font-bold md:text-4xl">
                    {loggedInClient.clientName || loggedInClient.username}
                  </h1>
                  <p className="mt-3 text-sm text-slate-300">
                    Available files for your account.
                  </p>
                </div>

                <button
                  onClick={handleLogout}
                  className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Logout
                </button>
              </div>

              {loggedInClient.downloads?.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {loggedInClient.downloads.map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="rounded-2xl border border-white/10 bg-slate-900/80 p-5"
                    >
                      <div className="mb-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                          File {index + 1}
                        </p>
                        <h2 className="mt-2 break-words text-xl font-bold text-white">
                          {file.name}
                        </h2>
                      </div>

                      <a
                        href={file.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-emerald-600"
                      >
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5 text-yellow-100">
                  No downloads assigned to this client.
                </div>
              )}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}