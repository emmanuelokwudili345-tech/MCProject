import { useEffect } from 'react';
import type { FC } from 'react';
import { Icon } from '../common/Icons';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle?: string;
  videoUrl?: string;
  duration?: string;
  highlightsSummary?: string;
}

export const VideoModal: FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoTitle = 'Sammy K - 2026 Stage Showreel',
  videoUrl = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1',
  duration = '2:30 min',
  highlightsSummary = 'Featured: Global AI Summit, Forbes Leaders Dinner & Children\'s Oncology Gala'
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(2, 3, 5, 0.82)',
        backdropFilter: 'blur(6px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '920px',
          background: 'linear-gradient(180deg, rgba(17, 19, 25, 0.99), rgba(9, 10, 13, 0.96))',
          border: '1px solid rgba(229, 169, 60, 0.35)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 28px 80px rgba(0, 0, 0, 0.85)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '18px 20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(255, 255, 255, 0.01)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#e5a93c',
                display: 'inline-block',
                boxShadow: '0 0 10px rgba(229, 169, 60, 0.8)'
              }}
            />
            <h4
              style={{
                fontSize: '1rem',
                color: '#f8fafc',
                margin: 0,
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {videoTitle}
            </h4>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#cbd5e1',
              cursor: 'pointer',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            aria-label="Close video"
          >
            <Icon name="x" size={18} />
          </button>
        </div>

        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#000' }}>
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0
            }}
            src={videoUrl}
            title={videoTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
          />
        </div>

        <div
          style={{
            padding: '14px 20px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
            background: 'rgba(10, 11, 13, 0.92)',
            color: '#a8b0bc',
            fontSize: '0.82rem',
            lineHeight: 1.6
          }}
        >
          <span>{highlightsSummary}</span>
          <span style={{ color: '#e5a93c', fontWeight: 700, letterSpacing: '0.04em' }}>Runtime: {duration}</span>
        </div>
      </div>
    </div>
  );
};

