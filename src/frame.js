import React from 'react'

import styles from './form-style';

export default function Frame({ children }) {
  return <div style={styles.root}>{children}</div>
}
