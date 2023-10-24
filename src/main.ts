import type { CreateURLInput } from "./types";

function createLmgtfy(query: string, opts: CreateURLInput) {
  const encodedQuery = encodeURIComponent(query);
  switch (opts.service) {
    case "letmegooglethat.com":
      return `https://letmegooglethat.com/?q=${encodedQuery}`;
    case "lmgtfy.app":
      if (!opts.images && !opts.internetExplainer)
        return `https://lmgtfy.app/?q=${encodedQuery}`;
      if (opts.images && !opts.internetExplainer)
        return `https://lmgtfy.app/?q=${encodedQuery}&t=i`;
      if (!opts.images && opts.internetExplainer)
        return `https://lmgtfy.app/?q=${encodedQuery}&iie=1`;
      if (opts.images && opts.internetExplainer)
        return `https://lmgtfy.app/?q=${encodedQuery}&t=i&iie=1`;
  }
}

export { createLmgtfy };
