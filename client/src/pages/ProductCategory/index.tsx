import React from "react";

// Components
import ReactHelmet from "components/ReactHelmet";
import Button from "shared/Button";
import Icon from "shared/Icon";
import Text from "shared/Text";
import Top from "./Top";
import Bottom from "./Bottom";
import Product from "shared/Product";

type Props = {};

const ProductCategory: React.FC<Props> = () => {
    return (
        <>
            <ReactHelmet
                titleName="Product Category"
                description="Product Category"
            />
            <main className="p-2 lg:px-10 ">
                <Top />
                <div className="grid gap-4 lg:gap-8 grid-cols-2 lg:grid-cols-4 my-5">
                    {Array.from({ length: 8 }).map(() => (
                        <Product />
                    ))}
                </div>
                <Bottom />
            </main>
        </>
    );
};

export default ProductCategory;
