interface PropType {
  img: string
  price: number
  name: string
}
const Box = (props: PropType) => {
  const { img, price, name } = props
  return (
    <>
      <div className="rounded-lg bg-white overflow-hidden p-1">
        <img className="w-full rounded-lg" src={img} alt="" />
        {price}
        {name}
      </div>
    </>
  )
}
export default Box
