export default function IconIncentive({
  width = 20,
  height = 20,
  color = '#404040',
  ...props
}: Readonly<React.SVGProps<SVGSVGElement>>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.55556 7.5C8.55556 7.03976 8.92865 6.66666 9.38889 6.66666C11.5673 6.66666 13.3333 8.43265 13.3333 10.6111C13.3333 11.7146 12.8791 12.7136 12.1495 13.4285C11.99 13.5848 11.7745 13.6706 11.5512 13.6665C11.3279 13.6625 11.1156 13.5691 10.9619 13.4071L10.1179 12.5182C9.801 12.1845 9.81467 11.657 10.1484 11.3401C10.4822 11.0232 11.0096 11.0369 11.3265 11.3706L11.4752 11.5272C11.5984 11.2469 11.6667 10.9372 11.6667 10.6111C11.6667 9.35313 10.6469 8.33333 9.38889 8.33333C8.92865 8.33333 8.55556 7.96023 8.55556 7.5ZM5.98062 8.45275C5.37087 9.14674 5 10.0584 5 11.0556C5 13.234 6.76599 15 8.94444 15C9.40468 15 9.77778 14.6269 9.77778 14.1667C9.77778 13.7064 9.40468 13.3333 8.94444 13.3333C7.68646 13.3333 6.66667 12.3135 6.66667 11.0556C6.66667 10.7317 6.73396 10.424 6.85562 10.1452L7.02186 10.3115C7.34729 10.6369 7.87493 10.6369 8.20037 10.3115C8.5258 9.98604 8.5258 9.4584 8.20037 9.13296L7.49556 8.42816C7.46014 8.36456 7.41573 8.30459 7.36232 8.25008C7.19347 8.07777 6.96817 7.99432 6.74464 8.0003C6.52396 7.9944 6.30139 8.07566 6.13297 8.24408C6.07 8.30704 6.01922 8.37757 5.98062 8.45275Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.16601 5C5.94435 5 3.33268 7.61168 3.33268 10.8333C3.33268 14.055 5.94435 16.6667 9.16601 16.6667C12.3877 16.6667 14.9993 14.055 14.9993 10.8333C14.9993 7.61168 12.3877 5 9.16601 5ZM1.66602 10.8333C1.66602 6.6912 5.02388 3.33334 9.16601 3.33334C13.3082 3.33334 16.666 6.6912 16.666 10.8333C16.666 14.9755 13.3082 18.3333 9.16601 18.3333C5.02388 18.3333 1.66602 14.9755 1.66602 10.8333Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5901 3.49973C13.9743 4.22465 16.5116 7.23268 16.5116 10.8333C16.5116 11.1328 16.4941 11.4282 16.4599 11.7187C17.0197 10.8658 17.345 9.8457 17.345 8.75C17.345 5.75845 14.9199 3.33333 11.9283 3.33333C11.4664 3.33333 11.0181 3.39105 10.5901 3.49973ZM6.91061 3.75037C8.19223 2.46415 9.96793 1.66666 11.9283 1.66666C15.8403 1.66666 19.0116 4.83798 19.0116 8.75C19.0116 11.5518 17.3848 13.9721 15.028 15.1207L12.408 16.3975L13.957 13.9287C14.5196 13.0321 14.845 11.972 14.845 10.8333C14.845 7.61167 12.2333 5 9.01165 5C8.5558 5 8.11317 5.05213 7.68901 5.1504L4.86328 5.80506L6.91061 3.75037Z"
        fill={color}
      />
    </svg>
  )
}
