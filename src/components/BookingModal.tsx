/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Calendar, Phone, Mail, User, Layers, CheckCircle, ArrowRight } from "lucide-react";
import { Estate } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEstate?: Estate;
  estatesList: Estate[];
}

export default function BookingModal({ isOpen, onClose, selectedEstate, estatesList }: BookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    selectedEstateId: selectedEstate?.id || estatesList[0]?.id || "",
    date: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  React.useEffect(() => {
    if (selectedEstate) {
      setFormData((prev) => ({ ...prev, selectedEstateId: selectedEstate.id }));
    }
  }, [selectedEstate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.date) {
      alert("Please fill in all required fields (Name, Phone, and Preferred Date).");
      return;
    }

    setLoading(true);
    // Simulate real server-side transaction ingestion
    setTimeout(() => {
      const refCode = "LSS-" + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(refCode);
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const activeEstateObj = estatesList.find(e => e.id === formData.selectedEstateId) || selectedEstate || estatesList[0];

  const handleWhatsAppFinalize = () => {
    const estateName = activeEstateObj ? activeEstateObj.title : "";
    const dateFormatted = formData.date;
    const text = `Hello LandSeeds Team, I just submitted an inspection/reservation booking on your website!
    
*Booking Ref*: ${bookingRef}
*Name*: ${formData.fullName}
*Phone*: ${formData.phone}
*Selected Estate*: ${estateName}
*Preferred Date*: ${dateFormatted}
*Comments*: ${formData.message || "None"}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/2348108640108?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            id="modal-overlay"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 shadow-2xl z-10"
            id="modal-panel"
          >
            {/* Red Gradient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-red-650/20 blur-[60px] pointer-events-none rounded-full" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div>
                <h3 className="text-xl font-semibold font-display tracking-tight text-white">
                  {isSubmitted ? "Investment Reservation Confirmed" : "Book Site Inspection"}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {isSubmitted ? "Your priority client slot is secured" : "Secure premium lands in Lagos State - Epe"}
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-neutral-400 hover:bg-white/10 hover:text-white transition-all"
                aria-label="Close modal"
                id="close-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
                        <User className="h-4 h-4" />
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-black/40 pl-10 pr-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                      />
                    </div>
                  </div>

                  {/* Contact Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
                          <Mail className="h-4 h-4" />
                        </span>
                        <input
                          type="email"
                          placeholder="johndoe@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-white/10 bg-black/40 pl-10 pr-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
                          <Phone className="h-4 h-4" />
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="+234 ..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border border-white/10 bg-black/40 pl-10 pr-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Estate Selection */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1">
                      Choose Estate Property
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
                        <Layers className="h-4 h-4" />
                      </span>
                      <select
                        value={formData.selectedEstateId}
                        onChange={(e) => setFormData({ ...formData, selectedEstateId: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-neutral-900 pl-10 pr-10 py-2 text-sm text-white focus:border-red-600 focus:outline-none"
                      >
                        {estatesList.map((est) => (
                          <option key={est.id} value={est.id} className="bg-neutral-900 text-white">
                            {est.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
                        <Calendar className="h-4 h-4" />
                      </span>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-black/40 pl-10 pr-3 py-2 text-sm text-white focus:border-red-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1">
                      Additional Messages or Request
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Special instructions, investment timeframe, group size..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-sm text-white placeholder-neutral-500 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer mt-2 flex items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-sm font-semibold text-white transition-all hover:bg-red-750 hover:shadow-lg hover:shadow-red-600/25 active:scale-[0.98] disabled:opacity-50"
                  >
                    {loading ? "Processing Secure Allocation..." : "Confirm Free Inspection Reservation"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                /* SUCCESS SCREEN */
                <div className="text-center py-6 space-y-6">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-500">
                    <CheckCircle className="w-12 h-12" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold font-display text-white">Reservation Initiated!</h4>
                    <p className="text-sm text-neutral-400">
                      Your premium slot for <strong className="text-white">{activeEstateObj?.title}</strong> is active.
                    </p>
                  </div>

                  {/* Ticket Container */}
                  <div className="rounded-xl border border-white/10 bg-black/50 p-5 space-y-4 text-left max-w-sm mx-auto relative overflow-hidden">
                    {/* Security stamp */}
                    <div className="absolute top-2 right-2 border-2 border-green-500/30 text-green-500/50 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded rotate-12">
                      Secured
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-neutral-500 block">Booking Reference</span>
                        <span className="text-white font-mono font-bold text-sm tracking-wide">{bookingRef}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block">Estate Location</span>
                        <span className="text-white font-semibold truncate block">{activeEstateObj?.location.split(",")[0]}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block">Reserved For</span>
                        <span className="text-white truncate">{formData.fullName}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block">Scheduled Date</span>
                        <span className="text-white">{formData.date}</span>
                      </div>
                    </div>

                    <div className="border-t border-dashed border-white/10 pt-3 text-xs text-neutral-500">
                      Please note: Inspections are completely <strong className="text-green-500">FREE of charge</strong>. All transport is fully sponsored by LandSeeds.
                    </div>
                  </div>

                  {/* Action Trigger */}
                  <div className="space-y-2">
                    <button
                      onClick={handleWhatsAppFinalize}
                      className="w-full cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/25 active:scale-[0.98]"
                    >
                      Connect on WhatsApp to Confirm
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: "",
                          email: "",
                          phone: "",
                          selectedEstateId: estatesList[0]?.id || "",
                          date: "",
                          message: ""
                        });
                        onClose();
                      }}
                      className="text-xs text-neutral-400 hover:text-white transition-colors py-2"
                    >
                      Done & Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
