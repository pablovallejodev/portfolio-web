import type { SkillGroup } from '@/types';
import type { Dictionary } from '@/i18n/types';
import { Section } from '@/components/common/ui/Section';
import { SkillCard } from '@/components/common/ui/SkillCard';
import { Reveal } from '@/components/common/ui/Reveal';

export function Skills({ skillGroups, copy }: { skillGroups: SkillGroup[]; copy: Dictionary['skills'] }) {
  return (
    <Section id="skills" eyebrow={copy.eyebrow} title={copy.title} description={copy.description}>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <Reveal key={group.id} delay={(idx % 3) * 100 + Math.floor(idx / 3) * 80} direction="scale">
            <SkillCard group={group} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
