import type { Language } from '@/types';
import type { Dictionary } from '@/i18n/types';
import { Section } from '@/components/ui/Section';
import { LanguageItem } from '@/components/ui/LanguageItem';
import { Reveal } from '@/components/ui/Reveal';

export function Languages({ languages, copy }: { languages: Language[]; copy: Dictionary['languages'] }) {
  return (
    <Section id="languages" eyebrow={copy.eyebrow} title={copy.title}>
      <div className="grid gap-3 md:grid-cols-2">
        {languages.map((language, idx) => (
          <Reveal key={language.language} delay={idx * 90}>
            <LanguageItem language={language} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
