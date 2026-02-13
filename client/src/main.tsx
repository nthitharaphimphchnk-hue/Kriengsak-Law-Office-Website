import { trpc } from "@/lib/trpc";
import { UNAUTHED_ERR_MSG } from '@shared/const';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, TRPCClientError } from "@trpc/client";
import { createRoot } from "react-dom/client";
import superjson from "superjson";
import App from "./App";
import { getLoginUrl } from "./const";
import "./index.css";

const isValidAnalyticsEnvValue = (value?: string, placeholderToken?: string): value is string => {
  if (!value) return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (trimmed.includes("%")) return false;
  if (placeholderToken && trimmed.includes(placeholderToken)) return false;
  return true;
};

const injectUmamiScript = () => {
  if (typeof document === "undefined") return;

  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID as string | undefined;

  const isEndpointValid =
    isValidAnalyticsEnvValue(endpoint, "VITE_ANALYTICS_ENDPOINT") &&
    endpoint.trim().startsWith("http");
  const isWebsiteIdValid = isValidAnalyticsEnvValue(websiteId, "VITE_ANALYTICS_WEBSITE_ID");

  if (!isEndpointValid || !isWebsiteIdValid) return;

  const normalizedEndpoint = endpoint.trim().replace(/\/+$/, "");
  const src = `${normalizedEndpoint}/umami`;

  if (document.querySelector(`script[src="${src}"]`)) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = src;
  script.setAttribute("data-website-id", websiteId.trim());
  document.body.appendChild(script);
};

const queryClient = new QueryClient();

const redirectToLoginIfUnauthorized = (error: unknown) => {
  if (!(error instanceof TRPCClientError)) return;
  if (typeof window === "undefined") return;

  const isUnauthorized = error.message === UNAUTHED_ERR_MSG;

  if (!isUnauthorized) return;

  window.location.href = getLoginUrl();
};

queryClient.getQueryCache().subscribe(event => {
  if (event.type === "updated" && event.action.type === "error") {
    const error = event.query.state.error;
    redirectToLoginIfUnauthorized(error);
    console.error("[API Query Error]", error);
  }
});

queryClient.getMutationCache().subscribe(event => {
  if (event.type === "updated" && event.action.type === "error") {
    const error = event.mutation.state.error;
    redirectToLoginIfUnauthorized(error);
    console.error("[API Mutation Error]", error);
  }
});

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "/api/trpc",
      transformer: superjson,
      fetch(input, init) {
        return globalThis.fetch(input, {
          ...(init ?? {}),
          credentials: "include",
        });
      },
    }),
  ],
});

injectUmamiScript();

createRoot(document.getElementById("root")!).render(
  <trpc.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </trpc.Provider>
);
