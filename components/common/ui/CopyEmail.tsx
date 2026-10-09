'use client';

import { useState } from 'react';
import { Icon } from '@/components/common/ui/Icon';
import type { Dictionary } from '@/i18n/types';

type CopyEmailProps = {
  email: string;
  labels: Dictionary['aria'];
};

export function CopyEmail({ email, labels }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard permissions may be denied – fail silently */
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? labels.emailCopied : labels.copyEmail}
      className="group/email inline-flex min-w-0 max-w-full cursor-pointer items-center gap-3 text-left transition-opacity hover:opacity-90"
    >
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal transition-colors group-hover/email:bg-teal/30">
        <Icon name="email" size={18} />
      </span>
      <span className="min-w-0 [overflow-wrap:anywhere] text-lg font-semibold text-white md:text-xl" aria-live="polite">
        {copied ? labels.copied : email}
      </span>
    </button>
  );
}
