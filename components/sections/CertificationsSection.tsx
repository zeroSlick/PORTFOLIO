import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { certifications } from '@/data/certifications';

export const CertificationsSection: React.FC = () => {
  const openLink = (url: string) => window.open(url, '_blank');

  return (
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-primary mb-4">
        <Award size={48} />
      </div>

      <h2 className="font-title text-4xl text-foreground">Certifications</h2>

      <p className="text-muted-foreground max-w-md">
        Selected certifications and course completions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl px-4">
        {certifications.map((c) => (
          <div key={c.id} className="p-4 rounded-lg bg-card/50 border border-border flex items-center justify-between gap-4">
            <div className="text-left">
              <div className="font-semibold text-lg text-foreground">{c.title}</div>
              <div className="text-sm text-muted-foreground">{c.issuer}</div>
            </div>
            <button onClick={() => openLink(c.link)} className="ml-4 px-3 py-2 bg-primary text-primary-foreground rounded-full flex items-center gap-2 hover:bg-primary/90 transition">
              View <ExternalLink size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
