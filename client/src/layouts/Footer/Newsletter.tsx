import React from "react";

type Props = {};

const Newsletter = (props: Props) => {
    return (
        <section className="px-2 lg:px-10">
            <div className="layered-box-shadow bg-blue flex flex-col items-center p-4 gap-4">
                <div className="text-2xl lg:text-3xl font-bold">
                    Get 10% Discount
                </div>
                <div className="text-sm italic">
                    Subscribe to out newsletter to get the latest offers &
                    promotion
                </div>
                <div className="flex flex-col gap-4 w-72">
                    <input
                        placeholder="First Name *"
                        className="input text-xs"
                        type="text"
                    />
                    <button className="button bg-grey1 text-xs py-2">
                        Submit
                    </button>
                    <div className="text-xs text-center">
                        Proceeding I confirm that I have read and understand the
                        information on the use of my personal data explained in
                        the Privacy Policy, and I agree to receive customized
                        commercial communications from Pull&Bear by email and
                        other means.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
