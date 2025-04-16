// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          pulseGradient: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        },
        animation: {
          pulseGradient: 'pulseGradient 4s ease-in-out infinite',
        },
        backgroundSize: {
          '200': '200% 200%',
        },
      },
    },
  };
  