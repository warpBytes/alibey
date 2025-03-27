import Link from 'next/link';

import { ArrowRightIcon } from '@/lib/svgs';
import { cn } from '@/lib/utils';

import { contactInfo, contactLinks } from './contact-us.const';

const ContactUs = () => {
  return (
    <div className="mt-[120px]">
      <div
        className="h-[100px] w-full"
        style={{
          backgroundImage: 'url("/images/union.png")',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="content-wrapper my-10">
        <div className="grid h-full gap-16 bg-foreground p-16 lg:grid-cols-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.331223088589!2d-0.1940351232790834!3d51.36020732144553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876080921c0d24d%3A0xd78a74254cdd4058!2s12%20High%20St%2C%20Sutton%20SM1%201HN%2C%20UK!5e0!3m2!1sen!2shr!4v1743086938067!5m2!1sen!2shr"
            className="h-[400px] w-full lg:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              border: 0,
              filter: 'invert(90%) hue-rotate(180deg)',
            }}
          />
          <div className="flex w-full flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-heading-lg font-gambarino text-white">
                Contact us
              </h2>
              <p className="text-xl text-white/60">
                We accept private bookings and events. Contact us for more
                details!
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
                  <span className="text-xl">{link.label}</span>
                  <ArrowRightIcon className="h-[10px] w-3" />
                </Link>
              ))}
            </div>

            <div className="flex flex-col">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    'flex w-full items-center justify-between border-b border-white/10 py-4 text-white',
                    index === contactInfo.length - 1 && 'border-b-0',
                  )}
                >
                  {item.icon}
                  <span className="text-xl text-white/60">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
