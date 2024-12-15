import confetti from 'canvas-confetti';

export const fireConfetti = () => {
    const end = Date.now() + 4 * 1000; // Duration: 2 seconds

    const colors = ['#bb0000', '#ffffff', '#00bb00', '#0000bb'];

    (function frame() {
        confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });
        confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
};
