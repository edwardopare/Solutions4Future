import { Component, ElementRef, ViewChild, AfterViewChecked, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
}

interface Rule {
  keywords: string[];
  response: string;
}

const GREETING =
  "Hi there! 👋 I'm the Solutions4Future assistant. Ask me about our services, pricing, contact details, or how to book a consultation.";

const FALLBACK =
  "I don't have an answer for that just yet. For a detailed response, please reach our team at info@solutions4future.com or (233) 20 307 2584, or use the contact form.";

const RULES: Rule[] = [
  {
    keywords: ['hello', 'hi', 'hey'],
    response: 'Hello! How can I help you today? You can ask about our services, pricing, or how to get in touch.',
  },
  {
    keywords: ['service', 'offer', 'what do you do', 'workflow', 'automation', 'development', 'integration', 'consulting'],
    response:
      'We offer Workflow Automation, Custom Development, System Integration, and Strategic Consulting. Visit the Services page for full details on each.',
  },
  {
    keywords: ['price', 'pricing', 'cost', 'quote', 'budget'],
    response:
      'Pricing depends on your project scope \u2014 we offer fixed-price, time-and-materials, and outcome-based engagements. Reach out via the Contact page for a custom quote.',
  },
  {
    keywords: ['contact', 'phone', 'email', 'reach', 'call'],
    response: 'You can reach us at info@solutions4future.com or (233) 20 307 2584.',
  },
  {
    keywords: ['address', 'location', 'office', 'where'],
    response: 'Our office is at 12 Independence Avenue, Airport Residential Area, Accra, Ghana.',
  },
  {
    keywords: ['hours', 'open', 'time'],
    response: 'Our business hours are Monday - Friday 9:00 AM - 6:00 PM GMT, and Saturday 10:00 AM - 4:00 PM GMT. Closed Sundays.',
  },
  {
    keywords: ['consultation', 'meeting', 'demo', 'book', 'schedule'],
    response: "You can request a consultation any time from the Contact page \u2014 we'll get back to you within 24 hours.",
  },
  {
    keywords: ['about', 'company', 'who are you', 'mission', 'vision'],
    response:
      "We're Solutions4Future \u2014 we design, develop, and deploy intelligent automation and custom software solutions. Visit the About page to learn more about our mission and values.",
  },
  {
    keywords: ['thank', 'thanks'],
    response: "You're welcome! Let me know if there's anything else I can help with.",
  },
];

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule, RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss',
})
export class Chatbot implements AfterViewChecked {
  @ViewChild('scrollAnchor') private scrollAnchor?: ElementRef<HTMLElement>;

  readonly isOpen = signal(false);
  readonly draft = signal('');
  readonly messages = signal<ChatMessage[]>([{ from: 'bot', text: GREETING }]);

  readonly quickReplies = ['Our Services', 'Pricing', 'Contact Info', 'Book a Consultation'];

  private shouldScroll = false;

  toggle(): void {
    this.isOpen.update((open) => !open);
    if (this.isOpen()) {
      this.shouldScroll = true;
    }
  }

  close(): void {
    this.isOpen.set(false);
  }

  sendQuickReply(text: string): void {
    this.send(text);
  }

  send(text?: string): void {
    const message = (text ?? this.draft()).trim();
    if (!message) {
      return;
    }

    this.messages.update((msgs) => [...msgs, { from: 'user', text: message }]);
    this.draft.set('');
    this.shouldScroll = true;

    setTimeout(() => {
      this.messages.update((msgs) => [...msgs, { from: 'bot', text: this.getResponse(message) }]);
      this.shouldScroll = true;
    }, 500);
  }

  private getResponse(message: string): string {
    const normalized = message.toLowerCase();
    const rule = RULES.find((r) => r.keywords.some((keyword) => normalized.includes(keyword)));
    return rule?.response ?? FALLBACK;
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll && this.scrollAnchor) {
      this.scrollAnchor.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      this.shouldScroll = false;
    }
  }
}
