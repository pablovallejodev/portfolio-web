import Image from 'next/image';
import type { Profile } from '@/types';
import type { Dictionary } from '@/i18n/types';
import { Section } from '@/components/common/ui/Section';
import { Icon } from '@/components/common/ui/Icon';
import { Reveal } from '@/components/common/ui/Reveal';
import { CopyEmail } from '@/components/common/ui/CopyEmail';
import { CompactIconLink } from '@/components/common/ui/SocialLinks';

const ACTION_ORDER = ['linkedin', 'github'] as const;

type HomeContactProps = {
  profile: Profile;
  copy: Dictionary['contact'];
  aria: Dictionary['aria'];
};

export function HomeContact({ profile, copy, aria }: HomeContactProps) {
  const email = profile.social.find((item) => item.icon === 'email');
  const actionIcons = ACTION_ORDER.flatMap((icon) => profile.social.filter((item) => item.href && item.icon === icon));

  return (
    <Section id="contact" title={copy.title} description={copy.description}>
      <Reveal direction="scale">
        <div className="relative overflow-hidden rounded-[24px] bg-ink text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(51,55,189,0.28),transparent_45%),radial-gradient(circle_at_0_100%,rgba(36,153,139,0.22),transparent_50%)]"
          />

          <div className="relative grid gap-8 p-6 md:grid-cols-[auto_1fr] md:items-center md:gap-12 md:p-10 lg:p-14">
            <div className="mx-auto size-40 shrink-0 overflow-hidden rounded-full md:mx-0 md:size-52 lg:size-60">
              <Image
                src="/pablo-dibujo.png"
                alt="Pablo Vallejo"
                width={240}
                height={240}
                className="size-full object-cover"
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 208px, 240px"
              />
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-xs font-semibold uppercase tracking-[0.06em] text-teal">{copy.bestWay}</p>

              {email ? <CopyEmail email={email.value} labels={aria} /> : null}

              <p className="max-w-md text-[15px] leading-relaxed text-white/70">{copy.message}</p>

              <div className="flex flex-wrap items-center gap-2.5">
                {actionIcons.map((item) => (
                  <CompactIconLink key={item.label} item={item} tone="dark" />
                ))}
                <a
                  href={email?.href}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-teal px-5 text-sm font-semibold text-white transition-all hover:bg-teal-deep hover:-translate-y-px hover:shadow-glow-teal"
                >
                  {copy.sendEmail}
                  <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
