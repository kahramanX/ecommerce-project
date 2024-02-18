// Components
import Accordion from "shared/Accordion";

type Props = {
    commentHeader: string;
    commentItems: string[];
};

const Comments = ({ commentHeader, commentItems }: Props): JSX.Element => {
    return (
        <Accordion headerContent={commentHeader}>
            {commentItems.map((comment, index) => {
                return (
                    <div className="border border-grey2 p-2 lg:p-4 mb-2 lg:mb-4">
                        <div className="flex justify-between">
                            <div className="mb-2">Celina Novotna</div>
                            <div className="text-grey4 text-sm font-bold">
                                01 January 2024
                            </div>
                        </div>
                        <div>
                            Uzun kollu, bisiklet yaka, dikiş detaylı, kırmızı
                            sweatshirt.
                        </div>
                    </div>
                );
            })}
        </Accordion>
    );
};

export default Comments;
