import React, { useState } from 'react'

export default function login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <form>
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
