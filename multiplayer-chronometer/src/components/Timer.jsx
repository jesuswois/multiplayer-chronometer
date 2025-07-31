import React from 'react'
import { formatTime } from '../utils/formatTime'

export default function Timer({time}) {
  return (
    <div style={{fontSize:'5rem'}}>{formatTime(time,'h')}:{formatTime(time,'m')}:{formatTime(time,'s')}:{formatTime(time,'ms')}</div>
  )
}
