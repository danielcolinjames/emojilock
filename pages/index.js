import React from "react";
import Head from "next/head";
import { useForm } from "@statickit/react";

const OptInForm = () => {
  const [state, submit] = useForm({
    site: "818599f0408b",
    form: "contact-form"
  });

  if (state.succeeded) {
    return (
      <p className="pb-3 font-bold text-gray-800 text-lg">
        Thank you for signing up!
      </p>
    );
  }

  return (
    <form onSubmit={submit}>
      <p className="pb-3 font-bold text-gray-800 text-lg">
        Coming soon! Sign up to find out when we launch.
      </p>
      <div className="flex flex-wrap items-center">
        <label htmlFor="email" className="hidden">
          Email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="flex-grow mr-3 mb-3 p-3 rounded-lg bg-gray-200 text-gray-700 text-lg border border-gray-200 focus:outline-none focus:border-gray-500 focus:bg-white"
          placeholder="Your email address"
          required
        />
        <button
          type="submit"
          className="mb-3 px-5 py-3 rounded-lg border border-purple-700 bg-purple-700 text-lg font-bold text-white"
        >
          Notify me
        </button>
      </div>
    </form>
  );
};

const title = "EmojiLock | Making your Caps Lock key useful again!";
const description =
  "EmojiLock is a desktop app that will let you quickly and easily write emojis from your computer.";
const imagePath = "https://emojilock.app/static/og.jpg";

const Home = () => (
  <div>
    <Head>
      {/* General */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@EmojiLock" />
      <meta name="twitter:creator" content="@EmojiLock" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imagePath} />

      {/* Facebook */}
      <meta property="og:url" content="https://emojilock.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imagePath} />

      {/* Imports */}
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </Head>
    <div className="mx-auto container px-8 py-16 sm:py-32 antialiased">
      <div className="max-w-lg mx-auto">
        <div className="flex flex-wrap items-center pb-4 text-5xl font-bold text-gray-800">
          <h1 className="mr-3">EmojiLock</h1>
          <div className="mt-2 px-3 py-1 text-sm font-bold bg-orange-300 text-orange-800 rounded-full">
            COMING SOON
          </div>
        </div>
        <p className="pb-6 text-gray-700 text-lg">
          EmojiLock will make your Caps Lock key useful again 🤘
        </p>
        <OptInForm />
      </div>
    </div>
  </div>
);

export default Home;
