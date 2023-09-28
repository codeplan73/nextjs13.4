'use client'
import React from 'react'
import styles from './AddtoCard.module.css'

const AddToCart = () => {
  return (
    <div>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
      <button onClick={() => console.log('click')}>Add to Cart</button>
    </div>
  )
}

export default AddToCart
