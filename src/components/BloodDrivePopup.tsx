import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, CalendarDays, MapPin, ExternalLink } from "lucide-react";

const STORAGE_KEY = "bloodDrivePopupDismissed";
const SIGNUP_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSemfb-COwnd5gPsulCAUxnSwC52PU4AxILk1eiPPTAdZ_rdrQ/viewform";

const BloodDrivePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setIsOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Card */}
          <motion.div
            className="relative z-10 bg-white rounded-[20px] shadow-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col md:flex-row"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-md transition-all duration-200 hover:scale-110 cursor-pointer"
              aria-label="Close popup"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Image Side */}
            <div className="md:w-[45%] flex-shrink-0 bg-gradient-to-br from-red-50 to-red-100">
              <img
                src="/blood-drive.jpg"
                alt="National Blood Donation Drive 2026"
                className="w-full h-full object-cover md:min-h-[420px] max-h-[260px] md:max-h-none"
              />
            </div>

            {/* Content Side */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center overflow-y-auto">
              {/* Pulse Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 rounded-full mb-4 w-fit"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">
                  Upcoming Event
                </span>
              </motion.div>

              {/* Heading */}
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-2">
                National Blood
                <br />
                <span className="text-red-500">Donation Drive</span> 2026
              </h2>

              {/* Theme */}
              <p className="text-gray-500 italic mb-5 text-sm">
                Theme: "No Greater{" "}
                <span className="text-red-500 font-semibold not-italic">
                  LOVE
                </span>{" "}
                Than This."
              </p>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                    <CalendarDays className="w-4.5 h-4.5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">3rd April, 2026</p>
                    <p className="text-xs text-gray-400">Mark your calendar</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4.5 h-4.5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      All 36 States & FCT
                    </p>
                    <p className="text-xs text-gray-400">
                      Nationwide participation
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                A powerful national movement is coming. From every state, from
                every community, from every heart — millions will rise to share
                the gift of life.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href={SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sign Up Now
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.button
                  onClick={handleClose}
                  className="px-6 py-3 border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Maybe Later
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BloodDrivePopup;
