interface Props {
  valueInSeconds: number
}

const HOUR_IN_SECONDS = 60 * 60

export function convertSecondsToHours({ valueInSeconds }: Props): string {
  const hours = Math.floor(valueInSeconds / HOUR_IN_SECONDS)
  const minutes = Math.floor((valueInSeconds - hours * HOUR_IN_SECONDS) / 60)
  // const seconds = valueInSeconds - hours * HOUR_IN_SECONDS - minutes * 60

  const padMinutes = String(minutes).padStart(2, '0')

  if (hours === 0) {
    return `${padMinutes} min`
  } else if (hours > 0 && minutes === 0) {
    return `${hours} h`
  } else {
    return `${hours} h e ${padMinutes} min`
  }
}
