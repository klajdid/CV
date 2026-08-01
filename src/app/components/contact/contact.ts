import { Component, computed } from '@angular/core';
import { CONTACT } from '../../data/cv-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  protected readonly contact = CONTACT;

  protected readonly mailtoLink = computed(() => `mailto:${CONTACT.email}`);

  protected readonly whatsappLink = computed(() => {
    const digits = CONTACT.whatsappNumber.replace(/\D/g, '');
    const text = encodeURIComponent(CONTACT.whatsappMessage);
    return `https://wa.me/${digits}?text=${text}`;
  });

  protected readonly hasWhatsapp = computed(() => CONTACT.whatsappNumber.replace(/\D/g, '').length > 0);
}
