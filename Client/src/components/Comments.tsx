// Components
import Accordion from "shared/Accordion";
import CommentItem from "shared/CommentItem";

type Props = {
    commentHeader: string;
    commentItems: string[];
};

const Comments = ({ commentHeader, commentItems }: Props): JSX.Element => {
    return (
        <Accordion headerContent={commentHeader}>
            {commentItems.map((comment, index) => {
                return (
                    <CommentItem
                        commenterName="Celina Novotna"
                        commenterDate="01 January 2024"
                        commentContent="Uzun kollu, bisiklet yaka, dikiş detaylı, kırmızı
                sweatshirt."
                    />
                );
            })}
        </Accordion>
    );
};

export default Comments;
