const WhatsAppButton = () => {
  const phoneNumber = "966500000000";

  const message = encodeURIComponent(
    "Hello, I am interested in your heavy equipment rental services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
      >
        <path d="M20.52 3.48A11.77 11.77 0 0012.06 0C5.54 0 .23 5.31.23 11.83c0 2.09.55 4.13 1.59 5.93L.12 24l6.39-1.67a11.8 11.8 0 005.55 1.41h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.38-8.43zM12.07 21.8h-.01a9.96 9.96 0 01-5.08-1.39l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.95 9.95 0 01-1.53-5.29C2.08 6.33 6.55 1.86 12.06 1.86c2.67 0 5.18 1.04 7.07 2.93a9.93 9.93 0 012.92 7.08c0 5.51-4.48 9.98-9.98 9.98zm5.48-7.48c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;