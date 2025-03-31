import Link from 'next/link';

import {
  ArrowRightIcon,
  LetterIcon,
  LocationIcon,
  PhoneIcon,
} from '@/lib/svgs';
import { cn } from '@/lib/utils';

import { contactLinks } from './contact-us.const';

const ContactUs = () => {
  return (
    <div className="mt-20 md:mt-[170px]" id="contact">
      <div
        className="h-16 w-full -translate-y-1/2 bg-[length:64px_64px] md:h-[100px] md:bg-[length:100px_100px]"
        style={{
          backgroundImage: 'url("/images/union.png")',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="content-wrapper mt-[-14px] md:mt-[-10px]">
        <div className="grid h-full gap-8 bg-foreground p-4 sm:p-10 md:gap-16 md:p-16 lg:grid-cols-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.331223088589!2d-0.1940351232790834!3d51.36020732144553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876080921c0d24d%3A0xd78a74254cdd4058!2s12%20High%20St%2C%20Sutton%20SM1%201HN%2C%20UK!5e0!3m2!1sen!2shr!4v1743086938067!5m2!1sen!2shr"
            className="order-2 h-[400px] w-full lg:order-1 lg:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              border: 0,
              filter: 'invert(90%) hue-rotate(180deg)',
            }}
          />
          <div className="order-1 flex w-full flex-col justify-between gap-6 lg:order-2">
            <div className="flex flex-col gap-2 md:gap-4">
              <h2 className="font-gambarino text-heading-md text-white md:text-heading-lg">
                Contact us
              </h2>
              <p className="text-lg leading-[130%] text-white/60 md:text-xl">
                We accept private bookings and events.
                <br className="md:hidden" />
                Contact us for more details!
              </p>
            </div>

            <div className="flex flex-col">
              {contactLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className={cn(
                    'flex w-full items-center justify-between border-b border-white/10 py-4 text-white',
                    index === contactLinks.length - 1 && 'border-b-0',
                  )}
                >
                  <span className="text-lg md:text-xl">{link.label}</span>
                  <ArrowRightIcon className="h-[10px] w-3" />
                </Link>
              ))}
            </div>

            <div className="flex flex-col">
              <div className="flex w-full items-center justify-between border-b border-white/10 py-4 text-white">
                <LocationIcon />
                <span className="text-lg text-white/60 md:text-xl">
                  12 High Street, SM1 1HN Sutton
                </span>
              </div>
              <div className="flex w-full items-center justify-between border-b border-white/10 py-4 text-white">
                <PhoneIcon />
                <a
                  href="tel:02179534291"
                  className="text-lg text-white/60 md:text-xl"
                >
                  021 7953 4291
                </a>
              </div>
              <div className="flex w-full items-center justify-between border-b border-white/10 py-4 text-white">
                <LetterIcon />
                <a
                  href="mailto:info@alibey.co.uk"
                  className="text-lg text-white/60 md:text-xl"
                >
                  info@alibey.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
