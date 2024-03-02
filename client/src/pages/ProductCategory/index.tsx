import React from "react";

// Components
import ReactHelmet from "components/ReactHelmet";

type Props = {};

const ProductCategory: React.FC<Props> = () => {
    return (
        <>
            <ReactHelmet
                titleName="Product Category"
                description="Product Category"
            />
            <main className="p-2 lg:px-10 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    anan
                </div>
            </main>
        </>
    );
};

export default ProductCategory;
