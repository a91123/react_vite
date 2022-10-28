interface PropType {
  src: string
}
const Slider = ({ src }: PropType) => {
  return (
    <>
      <img className="w-full h-[300px] object-cover flex-shrink-0" src={src} />
    </>
  )
}
export default Slider
