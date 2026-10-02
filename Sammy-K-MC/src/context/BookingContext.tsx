import React, { useState, useEffect } from 'react';
import type { Inquiry, InquiryStatus } from '../types';
import { initialInquiries, initialBlackoutDates } from '../data/initialInquiries';
import { BookingContext } from './useBooking';
import type { BookingStats } from './useBooking';

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    try {
      const saved = localStorage.getItem('sammy_k_inquiries');
      return saved ? JSON.parse(saved) : initialInquiries;
    } catch {
      return initialInquiries;
    }
  });

  const [blackoutDates, setBlackoutDates] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sammy_k_blackouts');
      return saved ? JSON.parse(saved) : initialBlackoutDates;
    } catch {
      return initialBlackoutDates;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sammy_k_inquiries', JSON.stringify(inquiries));
    } catch (e) {
      console.error('Error persisting inquiries:', e);
    }
  }, [inquiries]);

  useEffect(() => {
    try {
      localStorage.setItem('sammy_k_blackouts', JSON.stringify(blackoutDates));
    } catch (e) {
      console.error('Error persisting blackouts:', e);
    }
  }, [blackoutDates]);

  const addInquiry = (data: Omit<Inquiry, 'id' | 'status' | 'submittedAt'>): Inquiry => {
    const id = `INQ-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;
    const newInq: Inquiry = {
      ...data,
      id,
      status: 'new',
      submittedAt: new Date().toISOString()
    };
    setInquiries(prev => [newInq, ...prev]);
    return newInq;
  };

  const updateInquiryStatus = (id: string, status: InquiryStatus) => {
    setInquiries(prev =>
      prev.map(item => (item.id === id ? { ...item, status } : item))
    );
  };

  const updateInquiryDetails = (id: string, updates: Partial<Inquiry>) => {
    setInquiries(prev =>
      prev.map(item => (item.id === id ? { ...item, ...updates } : item))
    );
  };

  const toggleBlackoutDate = (dateStr: string) => {
    setBlackoutDates(prev =>
      prev.includes(dateStr) ? prev.filter(d => d !== dateStr) : [...prev, dateStr]
    );
  };

  const isDateUnavailable = (dateStr: string): boolean => {
    if (blackoutDates.includes(dateStr)) return true;
    return inquiries.some(
      inq => inq.eventDate === dateStr && (inq.status === 'confirmed' || inq.status === 'in_review')
    );
  };

  const stats: BookingStats = {
    totalInquiries: inquiries.length,
    newCount: inquiries.filter(i => i.status === 'new').length,
    confirmedCount: inquiries.filter(i => i.status === 'confirmed').length,
    pipelineValue: inquiries
      .filter(i => i.status !== 'declined')
      .reduce((sum, item) => sum + (Number(item.estimatedTotal) || 0), 0)
  };

  return (
    <BookingContext.Provider
      value={{
        inquiries,
        blackoutDates,
        addInquiry,
        updateInquiryStatus,
        updateInquiryDetails,
        toggleBlackoutDate,
        isDateUnavailable,
        stats
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

