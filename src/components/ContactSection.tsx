
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid overflow-hidden rounded-2xl bg-gray-950 lg:grid-cols-2">

          {/* Information */}
          <div className="p-8 text-white sm:p-12">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
              Contact Us
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Let's Discuss Your Project
            </h2>

            <p className="mt-6 leading-7 text-gray-400">
              Need equipment for your next project? Send us your requirement
              and our team will get back to you.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-black">
                  <Phone size={19} />
                </div>

                <div>
                  <div className="text-sm text-gray-500">
                    Phone
                  </div>

                  <a
                    href="tel:+966500000000"
                    className="mt-1 block font-semibold hover:text-yellow-400"
                  >
                    +966 50 000 0000
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-black">
                  <Mail size={19} />
                </div>

                <div>
                  <div className="text-sm text-gray-500">
                    Email
                  </div>

                  <a
                    href="mailto:info@example.com"
                    className="mt-1 block font-semibold hover:text-yellow-400"
                  >
                    info@example.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-400 text-black">
                  <MapPin size={19} />
                </div>

                <div>
                  <div className="text-sm text-gray-500">
                    Location
                  </div>

                  <div className="mt-1 font-semibold">
                    Saudi Arabia
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 sm:p-12">

            <h3 className="text-2xl font-black">
              Request a Quote
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Fill in your requirements and we'll contact you.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Name *
                  </label>

                  <input
                    required
                    name="from_name"
                    type="text"
                    placeholder="Your name"
                    disabled={status === "sending"}
                    className="h-12 w-full rounded-md border border-gray-200 px-4 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Phone *
                  </label>

                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="+966..."
                    disabled={status === "sending"}
                    className="h-12 w-full rounded-md border border-gray-200 px-4 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email
                </label>

                <input
                  name="from_email"
                  type="email"
                  placeholder="you@example.com"
                  disabled={status === "sending"}
                  className="h-12 w-full rounded-md border border-gray-200 px-4 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Equipment Required *
                </label>

                <select
                  required
                  name="equipment"
                  disabled={status === "sending"}
                  className="h-12 w-full rounded-md border border-gray-200 bg-white px-4 outline-none focus:border-yellow-400"
                >
                  <option value="">Select equipment</option>
                  <option value="Excavator">Excavator</option>
                  <option value="Mobile Crane">Mobile Crane</option>
                  <option value="Wheel Loader">Wheel Loader</option>
                  <option value="Forklift">Forklift</option>
                  <option value="Bulldozer">Bulldozer</option>
                  <option value="Telehandler">Telehandler</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Project Details
                </label>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  disabled={status === "sending"}
                  className="w-full resize-none rounded-md border border-gray-200 p-4 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              {status === "success" && (
                <p className="text-sm font-semibold text-green-600">
                  ✓ Request sent successfully. We'll contact you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm font-semibold text-red-600">
                  ✕ Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-black font-bold text-white transition hover:bg-yellow-400 hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send size={17} />

                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                    ? "Request Sent!"
                    : "Send Request"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

