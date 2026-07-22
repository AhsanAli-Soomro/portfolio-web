"use client";

import { useEffect, useState } from "react";
import clientsData from "@/data/clients.json";

export default function ClientPortalPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInClient, setLoggedInClient] = useState(null);
  const [downloadCounts, setDownloadCounts] = useState({});
  const [error, setError] = useState("");

  const getStorageKey = (clientUsername, fileId) => {
    return `download_count_${clientUsername}_${fileId}`;
  };

  const getRequestText = (fileName) => {
    const clientName = loggedInClient?.clientName || loggedInClient?.username || "";
    return `Hello, I need download access again.\nClient: ${clientName}\nFile: ${fileName}`;
  };

  useEffect(() => {
    if (!loggedInClient) return;

    const counts = {};

    loggedInClient.downloads.forEach((file) => {
      const key = getStorageKey(loggedInClient.username, file.id);
      counts[file.id] = Number(localStorage.getItem(key) || 0);
    });

    setDownloadCounts(counts);
  }, [loggedInClient]);

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
    setDownloadCounts({});
  };

  const handleDownload = (file) => {
    if (!loggedInClient) return;

    const currentCount = downloadCounts[file.id] || 0;
    const limit = Number(file.downloadLimit || 1);

    if (currentCount >= limit) {
      return;
    }

    const newCount = currentCount + 1;
    const key = getStorageKey(loggedInClient.username, file.id);

    localStorage.setItem(key, String(newCount));

    setDownloadCounts((prev) => ({
      ...prev,
      [file.id]: newCount,
    }));

    window.open(file.link, "_blank", "noopener,noreferrer");
  };

  const handleRequestAccess = (file) => {
    const message = encodeURIComponent(getRequestText(file.name));
    const whatsappNumber = "923173215380";

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="inner-page portal-page">
      <div className="portal-container">
        <section className="portal-card">
          {!loggedInClient ? (
            <div className="portal-login">
              <div className="portal-heading">
                <p className="section-index">
                  Client Portal
                </p>
                <h1>
                  Your files, securely delivered.
                </h1>
                <p>
                  Enter your assigned username and password to access your files.
                </p>
              </div>

              <form onSubmit={handleLogin} className="portal-form">
                <label className="form-field">
                  <span>
                    Username
                  </span>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    autoComplete="username"
                  />
                </label>

                <label className="form-field">
                  <span>
                    Password
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    autoComplete="current-password"
                  />
                </label>

                {error && (
                  <div className="portal-error">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="button-primary portal-submit"
                >
                  Login
                </button>
              </form>
            </div>
          ) : (
            <div>
              <div className="portal-dashboard-head">
                <div>
                  <p className="section-index">
                    Downloads
                  </p>
                  <h1>
                    {loggedInClient.clientName || loggedInClient.username}
                  </h1>
                  <p>
                    Available files for your account.
                  </p>
                </div>

                <button
                  onClick={handleLogout}
                  className="button-ghost"
                >
                  Logout
                </button>
              </div>

              {loggedInClient.downloads?.length > 0 ? (
                <div className="download-grid">
                  {loggedInClient.downloads.map((file, index) => {
                    const count = downloadCounts[file.id] || 0;
                    const limit = Number(file.downloadLimit || 1);
                    const remaining = Math.max(limit - count, 0);
                    const limitReached = count >= limit;

                    return (
                      <div
                        key={`${file.id}-${index}`}
                        className="download-card"
                      >
                        <div>
                          <p className="section-index">
                            File {index + 1}
                          </p>
                          <h2>
                            {file.name}
                          </h2>

                          <p className="download-count">
                            Downloads left:{" "}
                            <span className={limitReached ? "limit-hit" : "limit-ok"}>
                              {remaining}
                            </span>{" "}
                            / {limit}
                          </p>
                        </div>

                        {!limitReached ? (
                          <button
                            type="button"
                            onClick={() => handleDownload(file)}
                            className="button-primary portal-submit"
                          >
                            Download
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleRequestAccess(file)}
                            className="button-ghost portal-submit"
                          >
                            Request Access
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="portal-empty">
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
