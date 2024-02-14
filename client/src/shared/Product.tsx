import React from "react";

type Props = {};

const Product = (props: Props) => {
    return (
        <div className="layered-box-shadow cursor-pointer">
            <div>
                <img src="https://static.pullandbear.net/2/photos//2024/V/0/1/p/3555/325/712/3555325712_2_1_8.jpg" />
            </div>
            <div className="bg-grey1 p-1 border-t text-center">
                <div className=" font-semibold text-xs lg:text-sm line-clamp-1 lg:line-clamp-2 mb-2">
                    YAKASI FERMUARLI CROP KAZAK
                </div>
                <div className="text-sm lg:text-xl font-bold">$49.90</div>
            </div>
        </div>
    );
};

export default Product;
