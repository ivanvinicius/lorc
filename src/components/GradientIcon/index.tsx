import { IconType } from 'react-icons'

interface Props {
  icon: IconType
  size?: number
}

export function GradientIcon({ icon: Icon, size = 48 }: Props) {
  return <Icon style={{ fill: 'url(#gradient)' }} size={size} />
}
