type ProductProps = {
    name: string;
    description: string;
    image: string;
}

export default function Product({name, description, image}: ProductProps) {
    return (
        <div className=" bg-neutral-950">
            <img src={image} alt="" className="rounded-xl object-cover w-400 h-55"/>
            <h2 className="text-2xl pt-4">{name}</h2>
            <p className="pt-2 text-gray-300">{description}</p>
        </div>
    )
}