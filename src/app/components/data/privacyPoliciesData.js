export const privacyPoliciesData = [
  {
    slug: "arrow-out",
    appName: "Arrow Out",
    effectiveDate: "October 2, 2026",
    intro:
      "This policy explains how Arrow Out handles information when you use the game.",

    sections: [
      {
        title: "Information stored on your device",
        paragraphs: [
          "Arrow Out stores the name and age you enter, game progress, hints, settings, and purchase-state preferences locally on your device. This information is used to provide your profile and save your progress.",
          "Arrow Out does not operate an account server and does not transmit this locally stored profile information to the developer.",
        ],
      },
      {
        title: "Advertising and third-party processing",
        paragraphs: [
          "Arrow Out uses Google AdMob to show rewarded and interstitial advertisements. Google and its partners may process information such as device identifiers, IP address, general location derived from IP, diagnostics, and ad interactions to provide, secure, measure, and personalize advertising where permitted.",
          "Consent choices may be requested before ads are loaded.",
        ],
        links: [
          {
            label: "Google's Privacy Policy",
            href: "https://policies.google.com/privacy",
          },
          {
            label: "Google's advertising information",
            href: "https://policies.google.com/technologies/ads",
          },
        ],
      },
      {
        title: "Children",
        paragraphs: [
          "The age entered in the game is stored locally. The app's Play Store target-audience declaration and advertising configuration must accurately reflect the audiences selected by the developer.",
          "The developer does not knowingly collect children's profile information on a server.",
        ],
      },
      {
        title: "Data retention and deletion",
        paragraphs: [
          "Local game data remains on your device until you select Settings → Reset Progress, clear the app's storage, or uninstall the app.",
          "Information processed by Google is retained according to Google's policies and your Google settings.",
        ],
      },
      {
        title: "Security and policy changes",
        paragraphs: [
          "Reasonable measures are used to limit collection and keep game data local.",
          "This policy may be updated when the game's features or legal requirements change. The effective date above will be revised when changes are made.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "For privacy-related questions or support, contact us at:",
        ],
        email: "dev.ahsan01@gmail.com",
      },
    ],
  },
];