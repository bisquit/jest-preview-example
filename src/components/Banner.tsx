import { useState } from 'react'
import { css } from '@emotion/react'

function Banner({ title }: { title: string; }) {

  return (
    <div css={{
      color: 'tomato',
      fontWeight: 'bold',
    }}>
      <p>{title}</p>
    </div>
  )
}

export default Banner
