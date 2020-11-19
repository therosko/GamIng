export class User {
    email?: string;
    password: string;
    nickname: string;

    hasEmail() {
        return this.email != '';
    }
}