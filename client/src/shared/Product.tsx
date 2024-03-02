import React from "react";

// Components
import Text from "shared/Text";

type Props = {};

const Product = (props: Props) => {
    return (
        <div className="layered-box-shadow cursor-pointer">
            <div>
                <img src="https://static.pullandbear.net/2/photos//2024/V/0/1/p/3555/325/712/3555325712_2_1_8.jpg" />
            </div>
            <div className="bg-grey1 p-1 border-t text-center">
                <Text
                    ElementTag="div"
                    fontSize="text-xs lg:text-sm"
                    fontColor="text-grey6"
                    fontWeight="font-semibold"
                    extraClass="line-clamp-1 lg:line-clamp-2 mb-2"
                    textContent={<>YAKASI FERMUARLI CROP KAZAK</>}
                />
                <Text
                    ElementTag="div"
                    fontSize="text-sm lg:text-xl"
                    fontColor="text-grey6"
                    fontWeight="font-bold"
                    textContent={<>$49.90</>}
                />
            </div>
        </div>
    );
};

export default Product;
