import React from 'react';

interface LongShadowTextProps {
  children: string;
  className?: string;
  /** Shadow color (default: primary with opacity) */
  shadowColor?: string;
  /** Shadow length in px (default 12) */
  shadowLength?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

/**
 * Text with a long directional shadow. Theme-blended (yellow/dark).
 */
const LongShadowText: React.FC<LongShadowTextProps> = ({
  children,
  className = '',
  shadowColor = 'rgba(253, 224, 71, 0.35)',
  shadowLength = 12,
  as: Tag = 'h2',
}) => {
  const shadows = Array.from({ length: shadowLength }, (_, i) => {
    const n = i + 1;
    return `${n}px ${n}px 0 ${shadowColor}`;
  }).join(', ');

  return (
    <Tag
      className={className}
      style={{
        textShadow: shadows,
        color: 'var(--color-primary, #FDE047)',
      }}
    >
      {children}
    </Tag>
  );
};

export default LongShadowText;
