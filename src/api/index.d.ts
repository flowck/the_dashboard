type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

type SubmitExpenseParams0 = { "body"?: { "category": string; "currency": string; "notes"?: string; "purchasedAt": string; "receipts": (string)[]; "taxAmount": number; "title": string; "totalAmount": number; }; };
type SubmitExpenseResult0 = RequestResult<null>;
/**
* Submit an expense
*/
export function submitExpense(params: SubmitExpenseParams0): SubmitExpenseResult0;

type SignUpParams0 = { "body"?: { "companyName": string; "email": string; "firstName": string; "lastName": string; "password": string; }; };
type SignUpResult0 = RequestResult<{ "message": string; }>;
/**
* Sign up a user
*/
export function signUp(params: SignUpParams0): SignUpResult0;

type ConfirmAccountParams0 = { "path": { "accountConfirmationToken": string; }; };
type ConfirmAccountResult0 = RequestResult<{ "message": string; }>;
/**
* Enables a newly signed up user to confirm the email used during the sign up
*/
export function confirmAccount(params: ConfirmAccountParams0): ConfirmAccountResult0;

