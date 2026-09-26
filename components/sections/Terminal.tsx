import { Section } from '@/components/common/ui/Section';
import { Reveal } from '@/components/common/ui/Reveal';
import { TerminalSsh } from '@/components/common/ui/TerminalSsh';
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
