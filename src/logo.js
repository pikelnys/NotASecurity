export default () => {
  const size = '100%'
  const color = 'black'
  return `
    <svg stroke="${color}" width="${size}" viewBox="0 0 402 353" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M52.8276 267L13.8564 334.5C7.698 345.167 15.396 358.5 27.7128 358.5H386.247C398.564 358.5 406.262 345.167 400.104 334.5L355.936 258M113.449 162L123.842 144C123.842 144 123.842 144 123.842 144L193.124 24C199.282 13.3333 214.678 13.3333 220.836 24L303.975 168" transform="translate(-5.9801 -11)" stroke-width="10"/>
      <path d="M0 87.6049C133.761 -28.85 208.179 -29.5528 340 87.6049" transform="translate(28 139.072)" stroke-width="8"/>
      <path d="M0 85.4976C128.242 -28.3438 202.824 -28.6545 340 85.4976" transform="translate(368 307.413) rotate(180)" stroke-width="8"/>
      <path d="M2.808 66.008C2.808 65.432 3.024 64.856 3.456 64.28C3.936 63.656 4.44 63.344 4.968 63.344C5.304 63.344 5.76 63.632 6.336 64.208L8.352 66.224C9.072 66.944 10.224 67.616 11.808 68.24C13.392 68.864 15.192 69.2 17.208 69.248V48.296L15.264 47.576L13.464 46.928C12.504 46.544 11.856 46.256 11.52 46.064L9.936 45.2C9.12 44.816 8.544 44.456 8.208 44.12C7.92 43.784 7.488 43.352 6.912 42.824C6.336 42.296 5.928 41.768 5.688 41.24L4.896 39.44C4.608 38.768 4.392 38.048 4.248 37.28C4.152 36.464 4.104 35.6 4.104 34.688C4.104 30.56 5.352 27.536 7.848 25.616C10.392 23.648 13.512 22.544 17.208 22.304V20.072C17.208 19.688 17.352 19.376 17.64 19.136C17.976 18.848 18.384 18.704 18.864 18.704C19.248 18.704 19.608 18.848 19.944 19.136C20.328 19.424 20.52 19.736 20.52 20.072V22.16C23.304 22.256 25.824 22.736 28.08 23.6C30.336 24.416 31.464 25.4 31.464 26.552C31.464 27.128 31.248 27.728 30.816 28.352C30.432 28.928 29.952 29.216 29.376 29.216C29.232 29.216 28.248 28.808 26.424 27.992C24.6 27.128 22.632 26.648 20.52 26.552V44.408C22.344 45.08 23.856 45.728 25.056 46.352C26.256 46.976 27.504 47.864 28.8 49.016C30.096 50.12 31.08 51.56 31.752 53.336C32.424 55.064 32.76 57.104 32.76 59.456C32.76 63.632 31.656 66.92 29.448 69.32C27.288 71.672 24.312 73.088 20.52 73.568V76.376C20.52 76.712 20.328 77.024 19.944 77.312C19.608 77.6 19.248 77.744 18.864 77.744C18.384 77.744 17.976 77.6 17.64 77.312C17.352 77.072 17.208 76.76 17.208 76.376V73.784C13.08 73.736 9.648 72.824 6.912 71.048C4.176 69.272 2.808 67.592 2.808 66.008ZM8.64 34.256C8.64 36.8 9.36 38.696 10.8 39.944C12.288 41.192 14.472 42.32 17.352 43.328V26.624C11.544 27.104 8.64 29.648 8.64 34.256ZM20.304 69.104C25.536 68.288 28.152 65.216 28.152 59.888C28.152 57.008 27.48 54.824 26.136 53.336C24.792 51.8 22.848 50.504 20.304 49.448V69.104Z" transform="translate(183 174)" fill="${color}"/>
      <path d="M0 105.023C145.563 -34.5862 226.547 -35.4288 370 105.023" transform="translate(13 122.484)" stroke-width="10"/>
      <path d="M0 102.497C139.557 -33.9794 220.72 -34.3519 370 102.497" transform="translate(383 324.297) rotate(180)" stroke-width="10"/>
      <path d="M89.5632 46.9792C89.5632 70.7318 70.3934 89.9583 46.7816 89.9583C23.1699 89.9583 4 70.7318 4 46.9792C4 23.2265 23.1699 4 46.7816 4C70.3934 4 89.5632 23.2265 89.5632 46.9792Z" transform="translate(154.762 174.097)" stroke-width="8"/>
    </svg>
  `
}

export const blink = () => {
  const size = '100%'
  const color = 'black'
  return `
    <svg stroke="${color}" width="${size}" viewBox="0 0 402 353" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M52.8276 267L13.8564 334.5C7.698 345.167 15.396 358.5 27.7128 358.5H386.247C398.564 358.5 406.262 345.167 400.104 334.5L355.936 258M113.449 162L123.842 144C123.842 144 123.842 144 123.842 144L193.124 24C199.282 13.3333 214.678 13.3333 220.836 24L303.975 168" transform="translate(-5.9801 -11)" stroke-width="10"/>
      <path d="M0 11C133.523 -3.64667 211.176 -3.68665 354 11" transform="translate(376 235) rotate(180)" stroke-width="8"/>
      <path d="M0 104.511C145.563 -34.4175 226.547 -35.256 370 104.511" transform="translate(13 123.472)" stroke-width="10"/>
      <path d="M0 101.997C139.557 -33.8136 220.72 -34.1844 370 101.997" transform="translate(383 324.3) rotate(180)" stroke-width="10"/>
    </svg>

  `
}
