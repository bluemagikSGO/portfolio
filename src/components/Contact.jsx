import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Check, Copy } from "lucide-react";
import Reveal from "./Reveal";
import { SITE, SOCIALS, STUDIO, studioMailto } from "../config/site";

const EMAILJS = {
  service: "service_56vf85l",
  template: "template_7up3rad",
  publicKey: "rX-Q7uQmFYKniQDoU",
};

const field =
  "mt-2 block w-full rounded-[3px] border border-on-ink-line bg-ink-2 px-4 py-3 text-[16px] text-on-ink placeholder:text-on-ink-subtle transition-colors focus:border-accent-on-ink";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message }
  const [copied, setCopied] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Honeypot: bots fill hidden fields, people never see this one.
    if (formRef.current.website.value) return;

    setSending(true);
    setStatus(null);
    emailjs
      .sendForm(EMAILJS.service, EMAILJS.template, formRef.current, EMAILJS.publicKey)
      .then(
        () => {
          setForm({ name: "", email: "", message: "" });
          setStatus({ type: "success", message: "Thanks, your message is on its way. I'll reply soon." });
        },
        (error) => {
          console.error(error?.text || error);
          setStatus({
            type: "error",
            message: `That didn't send. Please try again, or email ${SITE.email} directly.`,
          });
        }
      )
      .finally(() => setSending(false));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="on-ink bg-ink text-on-ink"
    >
      <div className="wrap grid gap-y-16 py-24 sm:py-32 lg:grid-cols-12 lg:gap-x-10">
        <Reveal className="lg:col-span-6">
          <p className="label flex gap-4 text-on-ink-subtle">
            <span>05</span>
            <span>Contact</span>
          </p>
          <h2
            id="contact-title"
            className="heading mt-8 max-w-[14ch] text-[clamp(2.5rem,6vw,5.25rem)]"
          >
            Have a project, a role or a question?
          </h2>
          <p className="mt-8 max-w-[30rem] text-[17px] leading-relaxed text-on-ink-muted">
            Write to me directly or use the form. I read and answer everything myself.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-2">
            <a
              href={`mailto:${SITE.email}`}
              className="link font-serif text-[clamp(1.375rem,2.6vw,2rem)] break-all"
            >
              {SITE.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="grid size-10 place-items-center rounded-full text-on-ink-muted transition-colors hover:bg-ink-2 hover:text-on-ink"
              aria-label={copied ? "Email address copied" : "Copy email address"}
            >
              {copied ? (
                <Check size={16} strokeWidth={1.5} aria-hidden />
              ) : (
                <Copy size={16} strokeWidth={1.5} aria-hidden />
              )}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>

          <dl className="mt-14 grid max-w-[30rem] gap-y-0 border-t border-on-ink-line text-[15px]">
            {SOCIALS.map((s) => (
              <div key={s.label} className="flex justify-between gap-6 border-b border-on-ink-line py-3.5">
                <dt className="text-on-ink-subtle">{s.label}</dt>
                <dd>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="link">
                    {s.handle}
                  </a>
                </dd>
              </div>
            ))}
            <div className="flex justify-between gap-6 border-b border-on-ink-line py-3.5">
              <dt className="text-on-ink-subtle">Studio and investors</dt>
              <dd>
                <a href={studioMailto("Enquiry for Iteminder")} className="link">
                  {STUDIO.email}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={80} className="lg:col-span-5 lg:col-start-8 lg:pt-24">
          <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
            <h3 className="label text-on-ink-subtle">Send a message</h3>

            {/* Honeypot, hidden from people and assistive tech. */}
            <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div>
              <label htmlFor="contact-name" className="text-[14px] text-on-ink-muted">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={onChange}
                required
                className={field}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-[14px] text-on-ink-muted">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={onChange}
                required
                className={field}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="text-[14px] text-on-ink-muted">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                required
                className={`${field} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-3 rounded-[3px] bg-paper px-5 py-3.5 text-[15px] font-medium text-ink transition-colors duration-300 hover:bg-accent-on-ink disabled:cursor-wait disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send message"}
            </button>

            <p
              role="status"
              aria-live="polite"
              className={`min-h-[1.5em] text-[15px] ${
                status?.type === "error" ? "text-accent-on-ink" : "text-on-ink-muted"
              }`}
            >
              {status?.message}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
