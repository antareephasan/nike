import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
            src={imgURL} 
            alt={name}
            className="w-[282px] h-[282px]"
        />

        <div className="flex justify-start gap-2.5 mt-8">
            <img src={star} alt="rating icon" width={24} height={24} /> 
            <p className="leading-normal text-xl font-montserrat text-slate-gray">(4.5)</p>

        </div>
        <h3 className='mt-2 leading-normal font-palanquin text-2xl font-semibold'>{name}</h3>
        <p className="mt-2 text-2xl leading-normal text-coral-red font-montserrat font-semibold">{price}</p>
    </div>
  )
}

export default PopularProductCard