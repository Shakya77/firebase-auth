import React, { useState } from 'react'
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = "/profile";
            toast.success("Logged in successfully", { position: "top-right" });
        } catch (error) {
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="">
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}
