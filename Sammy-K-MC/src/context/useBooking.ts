import { createContext, useContext } from 'react';
import type { Inquiry, InquiryStatus } from '../types';

export interface BookingStats {
  totalInquiries: number;
  newCount: number;
  confirmedCount: number;
  pipelineValue: number;
}

export interface BookingContextType {
  inquiries: Inquiry[];
  blackoutDates: string[];
  addInquiry: (data: Omit<Inquiry, 'id' | 'status' | 'submittedAt'>) => Inquiry;
  updateInquiryStatus: (id: string, status: InquiryStatus) => void;
  updateInquiryDetails: (id: string, updates: Partial<Inquiry>) => void;
  toggleBlackoutDate: (dateStr: string) => void;
  isDateUnavailable: (dateStr: string) => boolean;
  stats: BookingStats;
}

export const BookingContext = createContext<BookingContextType | null>(null);

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

