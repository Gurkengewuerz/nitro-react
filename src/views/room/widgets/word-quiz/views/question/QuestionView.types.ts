
export interface QuestionViewProps
{
    question: string;
    canVote: boolean;
    vote(value: string): void;
}
