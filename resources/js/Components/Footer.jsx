import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <footer class="bg-violet-200 py-4 text-sm text-center text-gray-600 fixed bottom-0 left-0 w-full">
  
  <p>&copy; {date} Bedspace. All rights reserved.</p>
</footer>
  )
}

export default Footer