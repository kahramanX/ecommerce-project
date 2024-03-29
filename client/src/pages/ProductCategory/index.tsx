import React, { useState } from "react";

// Components
import ReactHelmet from "components/ReactHelmet";
import Top from "./Top";
import Bottom from "./Bottom";
import Product from "shared/Product";
import FilterSection from "./FilterSection";

type Props = {};

const ProductCategory: React.FC<Props> = () => {
    const [filterJustifications, setFilterJustifications] =
        useState<boolean>(false);

    return (
        <>
            <ReactHelmet
                titleName="Product Category"
                description="Product Category"
            />
            <main className="p-2 lg:px-10 ">
                <Top setFilterJustifications={setFilterJustifications} />
                <div
                    className={`grid ${
                        filterJustifications
                            ? "lg:grid-cols-3_2-1"
                            : "lg:grid-cols-1"
                    }  gap-8 my-5`}
                >
                    <div
                        className={`grid gap-4 lg:gap-8 grid-cols-2 ${
                            filterJustifications
                                ? "lg:grid-cols-3"
                                : "lg:grid-cols-4"
                        }`}
                    >
                        {Array.from({ length: 8 }).map(() => (
                            <Product />
                        ))}
                    </div>

                    {filterJustifications && (
                        <FilterSection
                            setFilterJustifications={setFilterJustifications}
                        />
                    )}
                </div>
                <Bottom />
            </main>
        </>
    );
};

export default ProductCategory;
