import {
  bookings,
  contactMessages,
  testimonials,
  services,
  type Booking,
  type ContactMessage, 
  type Testimonial,
  type Service,
  type InsertBooking,
  type InsertContact,
  type InsertTestimonial,
  type InsertService
} from "@shared/schema";
import { db } from "./db";
import { randomUUID } from "crypto";

export interface IStorage {
  // Bookings
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
  
  // Contact Messages
  createContactMessage(contact: InsertContact): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  
  // Services
  getServices(): Promise<Service[]>;
}

export class DatabaseStorage implements IStorage {
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const [booking] = await db.insert(bookings).values({
      ...insertBooking,
      requirements: insertBooking.requirements || null
    }).returning();
    return booking;
  }

  async getBookings(): Promise<Booking[]> {
    return await db.select().from(bookings);
  }

  async createContactMessage(insertContact: InsertContact): Promise<ContactMessage> {
    const [contact] = await db.insert(contactMessages).values({
      ...insertContact,
      service: insertContact.service || null
    }).returning();
    return contact;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }
}

export const storage = new DatabaseStorage();
