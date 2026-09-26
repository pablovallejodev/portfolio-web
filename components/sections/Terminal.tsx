import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { TerminalSsh } from '@/components/ui/TerminalSsh';
import type { Dictionary } from '@/i18n/types';

export function Terminal({ copy }: { copy: Dictionary['terminal'] }) {
  return (
    <Section id="terminal" eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <Reveal direction="scale">
        <div className="mx-auto w-full max-w-xl">
          <TerminalSsh labels={copy} />
        </div>
      </Reveal>
    </Section>
  );
}
