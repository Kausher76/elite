import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState, type FormEvent } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
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
                    type="text"
                    placeholder="Your name"
                    className="h-12 w-full rounded-md border border-gray-200 px-4 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Phone *
                  </label>

                  <input
                    required
                    type="tel"
                    placeholder="+966..."
                    className="h-12 w-full rounded-md border border-gray-200 px-4 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-md border border-gray-200 px-4 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Equipment Required *
                </label>

                <select
                  required
                  className="h-12 w-full rounded-md border border-gray-200 bg-white px-4 outline-none focus:border-yellow-400"
                >
                  <option value="">Select equipment</option>
                  <option>Excavator</option>
                  <option>Mobile Crane</option>
                  <option>Wheel Loader</option>
                  <option>Forklift</option>
                  <option>Bulldozer</option>
                  <option>Telehandler</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Project Details
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-md border border-gray-200 p-4 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                />
              </div>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-black font-bold text-white transition hover:bg-yellow-400 hover:text-black"
              >
                <Send size={17} />

                {submitted ? "Request Sent!" : "Send Request"}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;