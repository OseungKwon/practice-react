export const users = [
    { email: "a@a.a", password: 'aaa', name: 'A' },
    { email: "b@b.b", password: 'bbb', name: 'B' },
    { email: "c@c.c", password: 'ccc', name: 'C' },
];
export function signIn({ email, password }) {
    const user = users.find(
        (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
}