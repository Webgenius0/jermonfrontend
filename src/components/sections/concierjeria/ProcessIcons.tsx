type ProcessIconProps = {
  name: string;
  className?: string;
};

export default function ProcessIcon({ name, className = "h-5 w-5" }: ProcessIconProps) {
  switch (name) {
    case "user-friends":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0H2Zm16.5-2.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM15 19a6 6 0 0 1 5.5-3.5" />
        </svg>
      );
    case "project-diagram":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2 2 7v10l10 5 10-5V7L12 2Zm0 2.2 7.5 3.75L12 11.7 4.5 7.95 12 4.2ZM4 9.3l7 3.5v7.35l-7-3.5V9.3Zm9 10.85v-7.35l7-3.5v7.35l-7 3.5Z" />
        </svg>
      );
    case "shopping-bag":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7 4V2a5 5 0 0 1 10 0v2h2a1 1 0 0 1 1 1v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1h2Zm2 0a3 3 0 0 1 6 0V4H9Z" />
        </svg>
      );
    case "check-circle":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.5 13.5-3.5-3.5 1.4-1.4 2.1 2.1 5.1-5.1 1.4 1.4-6.5 6.5Z" />
        </svg>
      );
    case "truck":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3 6h11v9H3V6Zm12 2h3l3 3v4h-6V8ZM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM1 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v1H2V5Z" />
        </svg>
      );
    case "box":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2 2 7v10l10 5 10-5V7L12 2Zm0 2.2 7.5 3.75L12 11.7 4.5 7.95 12 4.2Z" />
        </svg>
      );
    case "plane-departure":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M10.5 13.5 3 16l1.5 2.5L12 15l8.5 3.5L22 16l-7.5-2.5L14 3h-3l-1.5 10.5Z" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a7 7 0 0 0-4 12.7V18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.3A7 7 0 0 0 12 2Z" />
        </svg>
      );
  }
}
