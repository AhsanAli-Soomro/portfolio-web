
export default function PrivacyPolicy({ data }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          {/* Header */}
          <div className="border-b border-slate-200 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 px-6 py-10 text-white sm:px-10 sm:py-14">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-slate-200">
              Legal Information
            </div>

            <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {data.appName} Privacy Policy
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              {data.intro}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-slate-200">
                Effective date
              </span>

              <span className="font-medium text-white">
                {data.effectiveDate}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="space-y-10">
              {data.sections.map((section, sectionIndex) => (
                <section
                  key={section.title}
                  className="relative border-b border-slate-200 pb-10 last:border-b-0 last:pb-0"
                >
                  <div className="flex gap-4">
                    {/* Section Number */}
                    <div className="hidden shrink-0 sm:block">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700">
                        {String(sectionIndex + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                        {section.title}
                      </h2>

                      <div className="mt-4 space-y-4">
                        {section.paragraphs?.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* Links */}
                      {section.links?.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-3">
                          {section.links.map((link) => (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
                            >
                              {link.label}
                              <span className="ml-2" aria-hidden="true">
                                ↗
                              </span>
                            </a>
                          ))}
                        </div>
                      )}

                      {/* Email */}
                      {section.email && (
                        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-sm text-slate-500">
                            Contact email
                          </p>

                          <a
                            href={`mailto:${section.email}`}
                            className="mt-1 inline-block break-all font-semibold text-blue-700 transition hover:text-blue-800 hover:underline"
                          >
                            {section.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-200 bg-slate-50 px-6 py-5 sm:px-10">
            <p className="text-center text-sm text-slate-500">
              © {new Date().getFullYear()} {data.appName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}