export const Role = {
    USER: 'USER',
    ASSISTANT: 'ASSISTANT',
} as const;

export type Role = (typeof Role)[keyof typeof Role];

export interface Message {
    conversationId: string;
    role: Role;
    messageId: string;
    content: string;
}
