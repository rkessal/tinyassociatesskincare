
export default function Home() {
  return (
    <>
      <nav className="flex items-center w-full h-12 px-3 bg-white">
        <svg className="ml-2 mr-7" width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_5)">
            <path d="M22.5 0H18V9H22.5V0Z" fill="#070707" />
            <path d="M18 9H13.5V18H18V9Z" fill="#070707" />
            <path d="M27 9H22.5V18H27V9Z" fill="#070707" />
            <path d="M13.5 0H0V4.3668H4.6368V18H8.8668V4.3668H13.5V0Z" fill="#070707" />
          </g>
          <defs>
            <clipPath id="clip0_1_5">
              <rect width="27" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <ul className="flex flex-row">
          <li className="mr-7 last:mr-0">Shop</li>
          <li className="mr-7 last:mr-0">Science</li>
          <li className="mr-7 last:mr-0">Unlearn</li>
          <li className="mr-7 last:mr-0">About</li>
          <li className="mr-7 last:mr-0">Articles</li>
        </ul>
        <div className="ml-auto">Bag 0</div>
      </nav>
      <main className="w-full h-full px-3 text-black bg-white">
        <div className="flex lg:flex-row">
          <Image link='Shop skincare' src='https://tinyassociatesskincare.com/cdn/shop/files/TA-lipbalm_1100x.png?v=1670440364' />
          <Image link='Shop skin supplements' src='https://tinyassociatesskincare.com/cdn/shop/files/TA-skin-supplements_1b1f3fd3-9983-4276-9758-52682658a712_1100x.jpg?v=1670442073' />
        </div>
        <h2 className="my-12">As featured in</h2>
        <figure className="w-[709px] h-auto mx-auto">
          <img src="https://tinyassociatesskincare.com/cdn/shop/files/TA-with-vogue-desktop_1400x.jpg?v=1665996647" />
        </figure>

        <div className="flex flex-row mt-12">
          <h3 className="text-[52px] leading-[55px] max-w-[705px] w-full mr-1">
            The future of skincare.
            <br />
            A new natural.
          </h3>
          <h3 className="text-[52px] leading-[55px] max-w-[705px] w-full mr-1">
            Ushering in a new generation of luxury and sustainable skincare essentials. Microbiome-gentle and formulated with sustainably brewed natural molecules. Unisex.
          </h3>
        </div>

        <h2 className="mt-24 mb-12">Skincare best sellers</h2>
        <div className="flex lg:flex-row">
          <Image link='Shop The Serum' src='https://tinyassociatesskincare.com/cdn/shop/files/TA-Serum_1100x.jpg?v=1670440300' />
          <Image link='Shop The Lip Balm' src='https://tinyassociatesskincare.com/cdn/shop/files/Lib_Balm_1100x.jpg?v=1654263230' />
        </div>

        <IndustryReview>
          “Tiny Associates has perhaps the most complete products on the market [...] skin microbiome-certified, skin-natural, low-molecular weight, vegan, biotech-made, etc. [...] no doubt the products work“
        </IndustryReview>
        <div className="flex lg:flex-row">
          <Image src='https://tinyassociatesskincare.com/cdn/shop/files/Tiny-Associates-skin-microbiome-testing_1100x.jpg?v=1670440160' />
          <Image link='Shop Skincare' src='https://tinyassociatesskincare.com/cdn/shop/files/tiny-associates-product-3_1100x.jpg?v=1648145533' />
        </div>

        <h2 className="my-12">Supplement best sellers</h2>
        <div className="flex lg:flex-row">
          <Image link='Shop The Moisture' src='https://tinyassociatesskincare.com/cdn/shop/files/tiny-associates-texture-_8_1100x.jpg?v=1649057788' />
          <Image link='Shop supplements' src='https://tinyassociatesskincare.com/cdn/shop/files/1200x1600_1100x.jpg?v=1654881151' />
        </div>
        <IndustryReview>
          “Absorption and potency directly determine supplement performance [...] Tiny Associates has validated those properties through testing, not many companies do that"
        </IndustryReview>
        <div className="flex lg:flex-row">
          <Image link='Shop' src='https://tinyassociatesskincare.com/cdn/shop/files/TA-collection_1100x.png?v=1670594516' />
          <Image link='Read about our sustainability' src='https://tinyassociatesskincare.com/cdn/shop/files/1200x1600_9e598294-624c-4614-88b8-e0799e4775e0_1100x.jpg?v=1657623080' />
        </div>
        <div className='my-24 text-[52px] italic max-w-[705px] w-full'>
          “What icons of the fashion industry are doing for the planet, Tiny Associates is doing in the skincare industry […] enabled by biotechnology”
        </div>
        <h4 className="my-12 italic">
          BeautyMatter, Editor in Chief <br/>
          Kelly Kovack
        </h4>
        <div className="flex flex-row my-12">
          <span className="block text-[28px] leading-[55px] max-w-[705px] w-full mr-1"></span>
          <h2 className="text-[28px] max-w-[705px] w-full mr-1">
          Welcome to Tiny Associates’s world of molecules.
            The Post-Natural Campaign.
          </h2>
        </div>
        <div className="flex flex-row my-24">
          <span className="block max-w-[705px] w-full mr-1">
            <svg  width="129" height="18" viewBox="0 0 129 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_126)">
                <mask id="mask0_2_126"  maskUnits="userSpaceOnUse" x="0" y="0" width="129" height="18">
                  <path d="M129 0H0V18H129V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_2_126)">
                  <path d="M102.405 7.15794C102.436 6.60594 102.355 6.05335 102.169 5.53434C101.99 5.09487 101.707 4.70772 101.345 4.40754C100.972 4.10661 100.545 3.88285 100.088 3.74874C99.5811 3.59884 99.0558 3.52369 98.5281 3.52554C98.0117 3.52135 97.4984 3.60781 97.0105 3.78114C96.5494 3.93945 96.1208 4.18355 95.7464 4.50114C95.3953 4.8009 95.1047 5.16773 94.8908 5.58114C94.6819 5.99259 94.5731 6.44953 94.5739 6.91314H96.3662C96.3517 6.63953 96.401 6.36634 96.51 6.116C96.619 5.86567 96.7845 5.64535 96.9929 5.47314C97.4995 5.15388 98.0886 4.99831 98.6831 5.02674C98.9814 5.02237 99.2792 5.05379 99.5704 5.12034C99.8207 5.17738 100.055 5.29324 100.253 5.45874C100.46 5.63347 100.616 5.86251 100.704 6.12114C100.818 6.45024 100.871 6.79825 100.859 7.14714V7.99314L97.2535 8.31354C96.8271 8.32366 96.4072 8.42165 96.0187 8.60166C95.6303 8.78167 95.2814 9.03999 94.9929 9.36114C94.4795 9.92393 94.2004 10.6689 94.2148 11.4383C94.2303 12.2276 94.5357 12.982 95.0704 13.5515C95.3691 13.8854 95.7356 14.1483 96.1443 14.3219C96.5953 14.4904 97.0726 14.5734 97.5528 14.5667C98.2583 14.5865 98.9544 14.3964 99.5563 14.0195C100.145 13.6644 100.597 13.1126 100.834 12.4571H100.958V14.4011H103.521V12.8387H102.391L102.405 7.15794ZM100.845 10.0811C100.884 10.866 100.633 11.6371 100.141 12.2411C99.8884 12.5419 99.5725 12.7802 99.2169 12.938C98.8613 13.0958 98.4753 13.1689 98.088 13.1519C97.5633 13.1711 97.043 13.0469 96.581 12.7919C96.4125 12.6723 96.2777 12.5097 96.19 12.3201C96.1022 12.1306 96.0646 11.9209 96.0809 11.7119V10.9559C96.0701 10.7074 96.1197 10.46 96.2253 10.2359C96.3239 10.0595 96.5598 9.95514 96.9295 9.92994L100.845 9.56994V10.0811Z" fill="#070707" />
                  <path d="M21.0768 3.63477H17.5627V5.43117H21.0768V3.63477Z" fill="#070707" />
                  <path d="M15.8059 3.63477H14.0524V14.4096H15.8059V7.22757H17.563V5.43117H15.8059V3.63477Z" fill="#070707" />
                  <path d="M22.8339 5.43213H21.0769V14.4106H22.8339V5.43213Z" fill="#070707" />
                  <path d="M78.4078 5.42773H76.6507V12.6098H78.4078V5.42773Z" fill="#070707" />
                  <path d="M71.3804 5.42773H69.6234V12.6098H71.3804V5.42773Z" fill="#070707" />
                  <path d="M76.6486 12.6133H71.381V14.4097H76.6486V12.6133Z" fill="#070707" />
                  <path d="M76.6486 3.63477H71.381V5.43117H76.6486V3.63477Z" fill="#070707" />
                  <path d="M87.1868 3.63477H81.9192V5.43117H87.1868V3.63477Z" fill="#070707" />
                  <path d="M87.1868 12.6133H81.9192V14.4097H87.1868V12.6133Z" fill="#070707" />
                  <path d="M88.9474 10.8188H87.1904V12.6152H88.9474V10.8188Z" fill="#070707" />
                  <path d="M81.9188 5.42773H80.1617V12.6098H81.9188V5.42773Z" fill="#070707" />
                  <path d="M88.9474 5.42773H87.1904V7.22413H88.9474V5.42773Z" fill="#070707" />
                  <path d="M92.4584 3.63477H90.7013V14.4096H92.4584V3.63477Z" fill="#070707" />
                  <path d="M92.5038 0H90.6588V1.8864H92.5038V0Z" fill="#070707" />
                  <path d="M0 1.74968H5.26761V14.4109H7.02465V1.74968H12.2958V0.046875H0V1.74968Z" fill="#070707" />
                  <path d="M25.9088 3.63477H24.1518V7.22757H25.9088V3.63477Z" fill="#070707" />
                  <path d="M29.3983 9.6515L28.5638 12.0671H28.4723L27.6413 9.6515L27.6624 7.2251H25.9054L25.8842 9.6515L27.68 14.4071L27.0145 16.4591H24.5885V17.9999H28.1061L29.3983 14.4071L31.1519 9.6515L31.1765 7.2251H29.4195L29.3983 9.6515Z" fill="#070707" />
                  <path d="M32.9328 3.63477H31.1758V7.22757H32.9328V3.63477Z" fill="#070707" />
                  <path d="M107.38 0.046875H105.711V3.63608H103.954V5.19128L105.711 5.20568V14.4109H109.662V12.8377H107.38V5.20568H109.662V3.63608H107.38V0.046875Z" fill="#070707" />
                  <path d="M119.423 9.55068V8.56428C119.428 7.89398 119.336 7.22662 119.148 6.58428C118.98 6.0011 118.703 5.45696 118.331 4.98228C117.964 4.5199 117.498 4.15031 116.969 3.90228C116.297 3.63059 115.577 3.50788 114.856 3.54228C114.28 3.54066 113.713 3.67625 113.197 3.93828C112.653 4.20852 112.172 4.5967 111.789 5.07588C111.39 5.59059 111.093 6.18004 110.916 6.81108C110.727 7.57231 110.633 8.35497 110.638 9.14028V12.5999H112.398V9.55068H119.423ZM112.381 8.06748V7.48428C112.375 7.1265 112.444 6.77162 112.585 6.44388C112.711 6.1426 112.901 5.87345 113.141 5.65548C113.376 5.44021 113.65 5.27391 113.947 5.16588C114.289 5.05334 114.645 4.99743 115.004 5.00028C115.393 4.99821 115.781 5.05399 116.155 5.16588C116.454 5.27219 116.73 5.43866 116.965 5.65548C117.2 5.87654 117.389 6.14496 117.518 6.44388C117.655 6.77243 117.724 7.12692 117.719 7.48428V8.06748H112.381Z" fill="#070707" />
                  <path d="M119.43 10.8203H117.673V12.6131H119.43V10.8203Z" fill="#070707" />
                  <path d="M117.677 12.6133H112.409V14.4097H117.677V12.6133Z" fill="#070707" />
                  <path d="M12.2953 3.63477H10.5383V14.4096H12.2953V3.63477Z" fill="#070707" />
                  <path d="M46.5425 7.22203V3.62204H44.782V0.0400391H43.0214V3.64004H41.2608V7.24003H40.2362L37.8066 14.4401H39.8348L40.9932 10.8401H46.7961L47.958 14.4401H50.0003L47.5707 7.24003L46.5425 7.22203ZM41.5214 9.21284L42.1552 7.22203H43.032V3.62204H44.7925V7.22203H45.6693L46.2996 9.21284H41.5214Z" fill="#070707" />
                  <path d="M128.264 9.44351C127.613 8.8841 126.825 8.518 125.986 8.38513L124.243 8.02513C123.822 7.96204 123.427 7.77999 123.102 7.49952C122.979 7.36534 122.885 7.20708 122.825 7.03439C122.764 6.8617 122.739 6.67822 122.75 6.49513C122.748 6.26815 122.803 6.04449 122.91 5.8454C123.016 5.6463 123.171 5.47837 123.359 5.35753C123.794 5.06576 124.307 4.91748 124.827 4.93272C125.347 4.91919 125.858 5.07281 126.288 5.37193C126.501 5.54846 126.67 5.7731 126.782 6.02806C126.895 6.28302 126.947 6.56126 126.936 6.84072H128.669C128.662 6.33011 128.542 5.82779 128.317 5.37193C128.115 4.95976 127.823 4.60021 127.464 4.32072C127.092 4.04216 126.674 3.83593 126.229 3.71232C125.77 3.5837 125.296 3.51834 124.82 3.51793C124.302 3.51165 123.786 3.59066 123.292 3.75193C122.865 3.89601 122.464 4.11131 122.105 4.38913C121.784 4.64246 121.521 4.96433 121.334 5.33232C121.158 5.68838 121.067 6.08177 121.067 6.48073C121.032 7.19734 121.277 7.89871 121.746 8.43192C122.281 8.95674 122.958 9.30323 123.69 9.42552L125.394 9.78553C125.927 9.85007 126.433 10.0574 126.862 10.3867C127.017 10.5437 127.135 10.7349 127.206 10.9455C127.278 11.1562 127.301 11.3808 127.275 11.6021C127.248 11.8234 127.172 12.0356 127.053 12.2224C126.934 12.4092 126.775 12.5657 126.588 12.6799C126.099 12.9674 125.542 13.113 124.979 13.1011C124.377 13.1136 123.788 12.9267 123.299 12.5683C123.062 12.3889 122.869 12.1551 122.736 11.8856C122.603 11.6161 122.534 11.3184 122.535 11.0167H120.802C120.813 11.536 120.933 12.0469 121.155 12.5143C121.363 12.9475 121.666 13.3267 122.038 13.6231C122.43 13.9286 122.874 14.1558 123.348 14.2927C123.87 14.4631 124.413 14.5553 124.961 14.5663C125.524 14.5587 126.081 14.4578 126.612 14.2675C127.074 14.1197 127.51 13.8986 127.905 13.6123C128.25 13.3593 128.533 13.0278 128.732 12.6439C128.924 12.2673 129.023 11.8483 129.021 11.4235C129.036 11.0578 128.977 10.6928 128.847 10.3518C128.716 10.0109 128.518 9.70157 128.264 9.44351Z" fill="#070707" />
                  <path d="M65.0886 8.38515L63.3281 8.02515C62.9083 7.96217 62.5143 7.78007 62.1907 7.49955C62.0684 7.36537 61.974 7.20711 61.9135 7.03442C61.853 6.86173 61.8275 6.67824 61.8386 6.49515C61.8369 6.26817 61.892 6.04453 61.9986 5.84543C62.1052 5.64633 62.2598 5.47839 62.4478 5.35755C62.883 5.06535 63.3956 4.91705 63.9161 4.93275C64.4351 4.91851 64.9453 5.07222 65.3738 5.37195C65.5889 5.54811 65.7605 5.77345 65.8749 6.02981C65.9893 6.28617 66.0432 6.5664 66.0323 6.84795H67.7647C67.758 6.33735 67.6376 5.83502 67.4126 5.37915C67.2091 4.96275 66.9138 4.60041 66.5499 4.32075C66.1795 4.04159 65.7616 3.83529 65.3175 3.71235C64.8585 3.58403 64.3849 3.51866 63.909 3.51795C63.3918 3.51144 62.877 3.59045 62.3844 3.75195C61.9569 3.89529 61.5558 4.11066 61.1978 4.38915C60.8757 4.64146 60.6124 4.96358 60.4266 5.33235C60.2506 5.68841 60.159 6.0818 60.159 6.48075C60.1254 7.19663 60.3682 7.89737 60.8351 8.43195C61.3705 8.95547 62.0479 9.30174 62.7788 9.42555L64.483 9.78555C65.0169 9.84947 65.5248 10.0569 65.9548 10.3868C66.0948 10.5223 66.2049 10.6869 66.2778 10.8694C66.3506 11.0519 66.3846 11.2482 66.3773 11.4452C66.3831 11.6975 66.3204 11.9464 66.196 12.1644C66.0717 12.3824 65.8907 12.5609 65.6731 12.68C65.1831 12.968 64.6255 13.1136 64.0604 13.1012C63.4601 13.1137 62.872 12.9267 62.3844 12.5684C62.1473 12.3888 61.9546 12.1549 61.8219 11.8855C61.6892 11.616 61.6202 11.3185 61.6203 11.0168H59.895C59.9053 11.5361 60.0254 12.047 60.2471 12.5144C60.4544 12.9475 60.7555 13.3266 61.1274 13.6232C61.5189 13.9287 61.9633 14.1559 62.4372 14.2928C62.9602 14.4632 63.5046 14.5554 64.0534 14.5664C64.616 14.5585 65.1737 14.4576 65.7048 14.2676C66.1662 14.119 66.6021 13.898 66.9971 13.6124C67.3415 13.3583 67.6245 13.0271 67.8245 12.644C68.0156 12.2671 68.1136 11.8481 68.1097 11.4236C68.1279 11.0594 68.0719 10.6954 67.9452 10.3545C67.8185 10.0137 67.624 9.70345 67.3738 9.44355C66.722 8.88231 65.9312 8.51604 65.0886 8.38515Z" fill="#070707" />
                  <path d="M55.6942 8.38515L53.9336 8.02515C53.52 7.95595 53.1334 7.77019 52.8174 7.48875C52.6946 7.35415 52.6 7.19529 52.5395 7.02195C52.4789 6.84861 52.4537 6.66443 52.4653 6.48075C52.4636 6.25377 52.5187 6.03013 52.6253 5.83103C52.7319 5.63193 52.8865 5.46399 53.0744 5.34315C53.5097 5.05095 54.0223 4.90265 54.5428 4.91835C55.0574 4.90821 55.5622 5.06305 55.9864 5.36115C56.2015 5.53731 56.3731 5.76265 56.4875 6.01901C56.6019 6.27537 56.6558 6.5556 56.6449 6.83715H58.3773C58.3706 6.32655 58.2502 5.82422 58.0252 5.36835C57.8193 4.95658 57.5243 4.59828 57.1625 4.32075C56.7921 4.04159 56.3742 3.83529 55.9301 3.71235C55.4711 3.58403 54.9975 3.51866 54.5216 3.51795C54.0044 3.51144 53.4895 3.59045 52.997 3.75195C52.5695 3.89529 52.1684 4.11066 51.8104 4.38915C51.4883 4.64146 51.225 4.96358 51.0392 5.33235C50.8632 5.68841 50.7716 6.0818 50.7716 6.48075C50.738 7.19663 50.9808 7.89737 51.4477 8.43195C51.9831 8.95547 52.6605 9.30174 53.3913 9.42555L55.0956 9.78555C55.6295 9.84947 56.1374 10.0569 56.5674 10.3868C56.7074 10.5223 56.8175 10.6869 56.8904 10.8694C56.9632 11.0519 56.9972 11.2482 56.9899 11.4452C56.9957 11.6975 56.933 11.9464 56.8086 12.1644C56.6843 12.3824 56.5033 12.5609 56.2857 12.68C55.7957 12.968 55.2381 13.1136 54.673 13.1012C54.0727 13.1137 53.4846 12.9267 52.997 12.5684C52.7611 12.3881 52.5698 12.1538 52.4384 11.8844C52.3069 11.615 52.239 11.3179 52.2399 11.0168H50.5075C50.5179 11.5361 50.638 12.047 50.8597 12.5144C51.0659 12.9482 51.3671 13.3276 51.7399 13.6232C52.1314 13.9287 52.5758 14.1559 53.0498 14.2928C53.5728 14.4632 54.1172 14.5554 54.666 14.5664C55.2286 14.5585 55.7863 14.4576 56.3174 14.2676C56.7781 14.12 57.213 13.8989 57.6061 13.6124C57.9525 13.3595 58.237 13.028 58.4371 12.644C58.6283 12.2671 58.7262 11.8481 58.7223 11.4236C58.7405 11.0594 58.6845 10.6954 58.5578 10.3545C58.4311 10.0137 58.2366 9.70345 57.9864 9.44355C57.3326 8.88111 56.5392 8.51477 55.6942 8.38515Z" fill="#070707" />
                </g>
              </g>
              <defs>
            <clipPath id="clip0_2_126">
              <rect width="129" height="18" fill="white" />
            </clipPath>
          </defs>
            </svg>
          </span>

          <div className="flex flex-row max-w-[705px] w-full mr-1">
            <div className="flex flex-col w-1/3">
              <h4 className="mb-2">Contact</h4>
              <ul>
                <li>
                    <FooterLink link='Email' />
                    <FooterLink link='Instagram' />
                    <FooterLink link='Linkedin' />
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-1/3">
              <h4 className="mb-2">Info</h4>
              <ul>
                <li>
                    <FooterLink noSvg link='General FAQ' />
                    <FooterLink noSvg link='Terms & Conditions' />
                    <FooterLink noSvg link='Privacy Policy' />
                    <FooterLink noSvg link='Stockists' />
                </li>
              </ul>
            </div>
            <div className="flex flex-col w-1/3">
              <h4 className="mb-2">Location</h4>
              <ul>
                <li>
                    <FooterLink  link='Sweden' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const FooterLink = ({link, noSvg}) => {
  return (
    <a href="#" className="flex flex-row items-center">
      {!noSvg &&
      <svg className="mr-3" width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1_25)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.94973 4.17188L2.47485 1.697L3.18196 0.989886L6.36394 4.17188L3.18196 7.35385L2.47485 6.64675L4.94973 4.17188Z" fill="#070707" />
        </g>
        <defs>
          <clipPath id="clip0_1_25">
            <rect width="8" height="7" fill="white" transform="translate(0 8) rotate(-90)" />
          </clipPath>
        </defs>
      </svg>
       }
      {link}
    </a>
  );
}
const IndustryReview = ({ children }) => {
  return (
    <div className="flex flex-row my-12">
      <h2 className="text-[28px] leading-[55px] max-w-[705px] w-full mr-1">Industry review</h2>
      <h2 className="text-[28px] italic  max-w-[705px] w-full mr-1">{children}</h2>
    </div>
  );
}
const Image = ({ src, link }) => {
  return (
    <figure className="relative w-[705px] h-[881.25px] overflow-hidden lg:mr-2 lg:last:mr-0">
      <img className="object-cover w-full" src={src} />
      {link &&
        <span className="absolute bottom-0 left-0 block mb-3 ml-2">
          <a href="#" className="flex flex-row items-center">
            <svg className="mr-1" width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_25)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.94973 4.17188L2.47485 1.697L3.18196 0.989886L6.36394 4.17188L3.18196 7.35385L2.47485 6.64675L4.94973 4.17188Z" fill="#070707" />
              </g>
              <defs>
                <clipPath id="clip0_1_25">
                  <rect width="8" height="7" fill="white" transform="translate(0 8) rotate(-90)" />
                </clipPath>
              </defs>
            </svg>
            {link}
          </a>
        </span>
      }
    </figure>
  );
}
