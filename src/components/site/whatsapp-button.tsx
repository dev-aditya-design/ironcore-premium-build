export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/13125550142?text=Hi%20IronCore%20Fitness%2C%20I%27d%20like%20to%20book%20a%20free%20trial%20session."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with IronCore Fitness on WhatsApp"
      className="group fixed bottom-6 right-5 z-50 flex items-center gap-3 rounded-full border border-border bg-surface/90 p-3 shadow-panel backdrop-blur transition-all duration-300 hover:border-primary hover:pr-5 sm:bottom-8 sm:right-8"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ember text-primary-foreground">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.42-9.4 2.51 0 4.88.98 6.65 2.76a9.34 9.34 0 0 1 2.76 6.65c0 5.19-4.23 9.41-9.42 9.41M20.5 3.49A11.34 11.34 0 0 0 12.05 0C5.79 0 .7 5.09.7 11.34c0 2 .52 3.95 1.52 5.67L.6 24l7.14-1.87a11.3 11.3 0 0 0 5.41 1.38h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02" />
        </svg>
      </span>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap font-display text-xs uppercase tracking-[0.16em] text-foreground transition-all duration-300 group-hover:max-w-[12rem] sm:block">
        Chat with us
      </span>
    </a>
  );
}
