import './layout-style.css'

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

function MainLayout({children}:Props) {
  return (
    <div className='wrapper'>
        <h3>Above children</h3>
        {children}
        <p>More content</p>
    </div>
  )
}

export default MainLayout