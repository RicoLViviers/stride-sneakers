import Product from "./Product";

export default function FeaturedProducts () {
    return (
        <div className="p-12 bg-neutral-900 border-t border-gray-800">
            <h1 className="text-4xl mb-8 cursor-pointer">Featured Products</h1>
            <div className="flex flex-row gap-4">
                <Product name="Stealth" description="The stealthiest sneakers" image="/images/products/stealth.jpeg"/>
                <Product name="Afterhour" description="The best sneakers after work" image="/images/products/afterhour.jpeg"/>
                <Product name="Monolith" description="The best shoes for outgoings" image="/images/products/monolith.jpeg"/>
                <Product name="Vector" description="The artists shoes" image="/images/products/vector.jpeg"/>
            </div>
        </div>
    )
}