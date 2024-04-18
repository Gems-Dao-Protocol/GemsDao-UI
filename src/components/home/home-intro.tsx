import { useInView } from "react-intersection-observer";
import { cn } from "~/utils/cn";
import { motion } from "framer-motion";

const HomeIntro = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <div
      className={cn(
        inView ? "top-0 opacity-100" : "-top-10 opacity-0",
        "relative mx-auto flex max-w-7xl flex-col items-center justify-center space-y-10 transition-all duration-1000 ease-in md:flex-row md:space-x-40 md:space-y-0",
      )}
      ref={ref}
    >
      <div className="w-[260px] space-y-4 text-center">
        <h3 className="text-4xl font-bold md:text-6xl">500+</h3>
        <p className="text-text-gray md:text-2xl">
          Over 400 unique stakeholder addresses
        </p>
      </div>
      <div>
        <motion.svg
          width="400"
          height="449"
          viewBox="0 0 400 449"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[200px] w-[200px] md:h-auto md:w-auto"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ rotate: 180, scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: Infinity,
          }}
        >
          <path
            d="M378.505 170.785C388.441 165.05 395.547 155.79 398.519 144.707C401.487 133.628 399.963 122.051 394.227 112.12C382.382 91.6098 356.062 84.5582 335.549 96.4007C331.821 98.5511 328.54 101.187 325.731 104.172L241.126 55.3315C242.309 51.4061 242.95 47.251 242.95 42.9458C242.95 19.2651 223.682 0 199.998 0C176.314 0 157.046 19.2651 157.046 42.9458C157.046 47.251 157.686 51.4105 158.87 55.3315L74.2643 104.172C71.46 101.187 68.1787 98.5511 64.447 96.4007C54.5106 90.6649 42.9358 89.1415 31.8555 92.1088C20.7753 95.0761 11.5101 102.185 5.77344 112.12C0.0367956 122.055 -1.48678 133.628 1.4809 144.707C4.44859 155.786 11.5586 165.05 21.4951 170.785C25.2224 172.94 29.144 174.464 33.1362 175.4V273.081C29.144 274.017 25.2224 275.54 21.4951 277.695C0.98185 289.538 -6.07081 315.854 5.77344 336.365C13.7226 350.128 28.1856 357.829 43.0461 357.829C50.3285 357.829 57.7035 355.979 64.4514 352.084C68.1787 349.934 71.4599 347.298 74.2686 344.313L158.874 393.153C157.691 397.079 157.05 401.234 157.05 405.539C157.05 429.22 176.318 448.485 200.002 448.485C223.686 448.485 242.954 429.22 242.954 405.539C242.954 401.234 242.314 397.074 241.13 393.153L325.722 344.322C328.566 347.337 331.861 349.956 335.553 352.084C342.301 355.979 349.676 357.829 356.958 357.829C371.814 357.829 386.282 350.124 394.231 336.365C406.071 315.854 399.018 289.538 378.509 277.7C374.817 275.571 370.9 274.021 366.868 273.068V175.422C370.9 174.468 374.817 172.918 378.509 170.79L378.505 170.785ZM345.913 273.403C338.07 275.505 331.15 279.682 325.736 285.462L261.648 248.464C264.611 240.958 266.236 232.784 266.236 224.236C266.236 215.687 264.607 207.514 261.648 200.008L325.736 163.01C331.15 168.79 338.075 172.971 345.913 175.068C346.337 175.183 346.766 175.289 347.194 175.391V273.081C346.766 273.182 346.342 273.288 345.913 273.399V273.403ZM200.002 270.794C174.331 270.794 153.442 249.912 153.442 224.24C153.442 198.568 174.331 177.687 200.002 177.687C225.674 177.687 246.562 198.568 246.562 224.24C246.562 249.912 225.678 270.794 200.002 270.794ZM74.2686 285.466C68.3995 279.227 60.8832 275.01 52.8104 273.107V175.373C60.8832 173.47 68.3951 169.253 74.2643 163.014L138.356 200.012C135.393 207.518 133.768 215.692 133.768 224.24C133.768 232.789 135.398 240.962 138.356 248.468L74.2643 285.466H74.2686ZM345.392 113.436C349.049 111.325 353.046 110.323 356.994 110.323C365.044 110.323 372.887 114.5 377.193 121.958C380.302 127.341 381.128 133.615 379.521 139.62C377.913 145.625 374.058 150.646 368.674 153.755C363.291 156.863 357.016 157.689 351.01 156.082C345.004 154.474 339.982 150.619 336.873 145.237C330.457 134.123 334.277 119.856 345.392 113.44V113.436ZM315.923 121.221C313.534 129.164 313.428 137.779 315.901 145.983L251.782 182.999C241.576 170.216 226.742 161.279 209.842 158.753V84.7569C218.179 82.7963 225.59 78.3984 231.278 72.3579L315.927 121.221H315.923ZM200.002 19.6714C212.84 19.6714 223.28 30.1142 223.28 42.9458C223.28 55.7775 212.836 66.2203 200.002 66.2203C187.169 66.2203 176.724 55.7775 176.724 42.9458C176.724 30.1142 187.169 19.6714 200.002 19.6714ZM168.731 72.3579C174.415 78.3984 181.825 82.7963 190.167 84.7569V158.753C173.267 161.279 158.433 170.216 148.227 182.999L84.1079 145.983C86.581 137.779 86.4751 129.164 84.0859 121.221L168.736 72.3579H168.731ZM20.4838 139.62C18.8763 133.615 19.7022 127.341 22.8112 121.958C25.9202 116.575 30.9414 112.721 36.9474 111.113C38.9524 110.575 40.9882 110.31 43.0108 110.31C47.0428 110.31 51.0262 111.369 54.6122 113.44C65.7278 119.861 69.5522 134.123 63.131 145.237C56.7143 156.351 42.4455 160.175 31.33 153.755C25.9466 150.646 22.0913 145.625 20.4838 139.62ZM65.4584 320.915C63.8509 326.92 59.9955 331.94 54.6122 335.049C50.9556 337.16 46.9589 338.162 43.0108 338.162C34.9601 338.162 27.1169 333.985 22.8112 326.527C16.3944 315.413 20.2144 301.146 31.33 294.73C42.4455 288.315 56.7143 292.134 63.131 303.248C66.24 308.631 67.0658 314.905 65.4584 320.91V320.915ZM84.0815 327.264C86.4706 319.321 86.5766 310.706 84.1035 302.502L148.222 265.486C158.428 278.269 173.262 287.206 190.163 289.732V363.728C181.825 365.689 174.415 370.086 168.727 376.127L84.077 327.264H84.0815ZM200.002 428.813C187.164 428.813 176.724 418.371 176.724 405.539C176.724 392.707 187.169 382.265 200.002 382.265C212.836 382.265 223.28 392.707 223.28 405.539C223.28 418.371 212.836 428.813 200.002 428.813ZM231.273 376.127C225.59 370.086 218.179 365.689 209.837 363.728V289.732C226.738 287.206 241.572 278.269 251.778 265.486L315.888 302.497C313.587 310.074 313.437 318.164 315.539 326.006C315.654 326.43 315.786 326.849 315.91 327.269L231.269 376.127H231.273ZM377.193 326.527C370.777 337.641 356.508 341.465 345.392 335.044C340.009 331.936 336.154 326.915 334.546 320.91C332.939 314.905 333.764 308.631 336.873 303.248C339.982 297.865 345.004 294.011 351.01 292.403C353.015 291.865 355.05 291.6 357.073 291.6C361.105 291.6 365.088 292.659 368.674 294.726C379.79 301.142 383.614 315.408 377.193 326.522V326.527Z"
            fill="url(#paint0_linear_154_2724)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_154_2724"
              x1="0"
              y1="448.485"
              x2="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7806EA" />
              <stop offset="1" stopColor="#C387FF" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
      <div className="w-[260px] space-y-4 text-center">
        <h3 className="text-4xl font-bold md:text-6xl">$19.4M</h3>
        <p className="text-text-gray md:text-2xl">TVL in GemsDAO products</p>
      </div>
    </div>
  );
};

export { HomeIntro };
