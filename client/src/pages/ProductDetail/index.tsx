// Components
import ReactHelmet from "components/ReactHelmet";
import ProductGallery from "./ProductGallery";
import ProductContent from "./ProductContent";

type Props = {};

const ProductDetail = (props: Props): JSX.Element => {
    return (
        <>
            <ReactHelmet
                titleName="Product Detail"
                description="Product Detail"
            />
            <main className="p-2 lg:px-10 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ProductGallery />

                    <ProductContent />
                </div>
            </main>
        </>
    );
};

export default ProductDetail;
