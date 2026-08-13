"use client";

import { useEffect, useState } from "react";
import { contactPageStyles } from "@/public/dummyStyles";
import { LampContainer } from "../../app/components/ui/lampContainer";
import emailjs from "@emailjs/browser";
import { Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const publicKey = "kkX5qxELuGEamwXR2";
    if (publicKey) emailjs.init(publicKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    const serviceId = "service_yzatgfu";
    const templateId = "template_022ssqb";

    try {
      if (!serviceId || !templateId) {
        throw new Error("EmailJS service or template ID not configured.");
      }

      await emailjs.send(serviceId, templateId, templateParams);

      setFormData({ name: "", email: "", subject: "", message: "" });
      setFocused(null);

      alert("Mensagem enviada, Obrigado!");
    } catch (err) {
      console.error("EmailJS error:", err);
      alert(
        "Falha ao enviar a mensagem. Por favor, tente novamente mais tarde",
      );
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getLabelClass = (fieldName: string) => {
    const baseClass = contactPageStyles.formLabelBase;
    const focusedClass =
      focused === fieldName || formData[fieldName as keyof typeof formData]
        ? contactPageStyles.formLabelFocused
        : contactPageStyles.formLabelUnfocused;
    return `${baseClass} ${focusedClass}`;
  };

  return (
    <LampContainer>
      <div className={contactPageStyles.pageContainer}>
        <div className={contactPageStyles.contentContainer}>
          <div className={contactPageStyles.formOuterContainer}>
            <div className={contactPageStyles.backgroundOverlay} />

            {/* Título */}
            <div className={contactPageStyles.headerContainer}>
              <h1 className={contactPageStyles.headerTitle}>
                Entre em contato
              </h1>
              <p className={contactPageStyles.headerSubtitle}>
                Envie uma mensagem e vou entrar em retorno o mais breve
                possível.
              </p>
            </div>

            {/* Cards de contato */}
            <div className={contactPageStyles.contactMethodsGrid}>
              <a
                href="mailto:niicolas.sa@hotmail.com"
                className={contactPageStyles.contactCard}
              >
                <div className={contactPageStyles.contactIconContainer}>
                  <Mail className={contactPageStyles.contactIcon} />
                </div>

                <div>
                  <p className={contactPageStyles.contactLabel}>Email</p>

                  <p className={contactPageStyles.contactValue}>
                    niicolas.sa@hotmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/5511933363585?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre."
                target="_blank"
                rel="noopener noreferrer"
                className={contactPageStyles.contactCard}
              >
                <div className={contactPageStyles.contactIconContainer}>
                  <MessageCircle className={contactPageStyles.contactIcon} />
                </div>

                <div>
                  <p className={contactPageStyles.contactLabel}>WhatsApp</p>

                  <p className={contactPageStyles.contactValue}>Clique aqui</p>
                </div>
              </a>
            </div>
            <p className="mt-6 mb-6 flex items-center justify-center gap-3 text-sm text-zinc-400">
              <span className="h-px w-10 bg-zinc-700"></span>
              <span>Me conte mais sobre o seu projeto</span>
              <span className="h-px w-10 bg-zinc-700"></span>
            </p>
            {/* Formulário EmailJS */}
            <form
              onSubmit={handleSubmit}
              className={contactPageStyles.formContainer}
            >
              <div className={contactPageStyles.formGrid}>
                <div className={contactPageStyles.formFieldContainer}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={contactPageStyles.formInput}
                    placeholder="Nome"
                    required
                  />

                  <label className={getLabelClass("name")}>Nome</label>
                </div>

                <div className={contactPageStyles.formFieldContainer}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={contactPageStyles.formInput}
                    placeholder="Email@example.com"
                    required
                  />

                  <label className={getLabelClass("email")}>Email</label>
                </div>
              </div>

              <div className={contactPageStyles.formFieldContainer}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                  className={contactPageStyles.formInput}
                  placeholder="Assunto"
                  required
                />

                <label className={getLabelClass("subject")}>Assunto</label>
              </div>

              <div className={contactPageStyles.formFieldContainer}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={contactPageStyles.formTextarea}
                  placeholder="Me conte mais.."
                  rows={6}
                  required
                />

                <label className={getLabelClass("message")}>Mensagem</label>
              </div>

              <div className={contactPageStyles.submitButtonContainer}>
                <button
                  type="submit"
                  className={contactPageStyles.submitButton}
                  disabled={sending}
                  aria-busy={sending}
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className={contactPageStyles.submitButtonText}>
                    {sending ? "Enviando..." : "Enviar mensagem"}

                    <svg
                      className={contactPageStyles.submitButtonIcon}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>

          <p className={contactPageStyles.alternativeText}>
            Estou disponível para uma ligação.{" "}
            <a href="#" className={contactPageStyles.alternativeLink}>
              +55 (11) 93336-3585
            </a>
          </p>
        </div>
      </div>
    </LampContainer>
  );
}
