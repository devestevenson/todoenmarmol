
// eslint-disable-next-line react/prop-types
const Button = ({ link, text }) => {
  return (
    <a
      className="w-fit block border border-tmgray rounded-full px-6 py-3 text-lg text-tmgray font-medium transition duration-300 hover:bg-tmgray hover:text-tmwhite"
      href={link}
    >
      { text }
    </a>
  )
}

export default Button