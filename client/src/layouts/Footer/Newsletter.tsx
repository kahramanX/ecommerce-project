import React from "react";

// Components
import Text from "shared/Text";

type Props = {};

const Newsletter = (props: Props) => {
    return (
        <section className="px-2 lg:px-10 lg:my-60">
            <div className="layered-box-shadow bg-blue flex flex-col items-center text-center p-4 lg:p-8 gap-4">
                <Text
                    ElementTag="div"
                    fontSize="text-2xl lg:text-3xl"
                    fontColor="text-grey6"
                    fontWeight="font-bold"
                    textContent="Get 10% Discount"
                />
                <Text
                    ElementTag="div"
                    fontSize="text-xl italic"
                    fontColor="text-grey6"
                    fontWeight="font-normal"
                    textContent="Subscribe to out newsletter to get the latest offers &
                    promotion"
                />
                <div className="flex flex-col gap-4 lg:w-80">
                    <input
                        placeholder="First Name *"
                        className="input text-xs"
                        type="text"
                    />
                    <button className="button bg-grey1 text-sm py-2">
                        Submit
                    </button>

                    <Text
                        ElementTag="div"
                        fontSize="text-sm"
                        fontColor="text-grey6"
                        fontWeight="font-semibold"
                        extraClass="text-center"
                        textContent="Proceeding I confirm that I have read and understand the
                        information on the use of my personal data explained in
                        the Privacy Policy, and I agree to receive customized
                        commercial communications from Pull&Bear by email and
                        other means."
                    />
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
