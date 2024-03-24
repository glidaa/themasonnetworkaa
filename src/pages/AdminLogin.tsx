import { useState, useContext } from "react";
import Button from "@components/Button";
import SLink from "@/components/SLink";
import AdminAuthContext from "@contexts/AdminAuthContext";
import Cookies from "js-cookie";

import inputStyles from "@components/Input.module.sass";
import icons from "@assets/admin-login";

const AdminLogin = () => {
    const { setLoggedIn } = useContext(AdminAuthContext);

    const [enteredPassword, setEnteredPassword] = useState<{ value: string; isValid: boolean, isTouched: boolean }>({
        value: "",
        isValid: false,
        isTouched: false,
    });

    const formSubmittedHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (enteredPassword.value === import.meta.env.VITE_adminPassword) {
            setLoggedIn(true);
            Cookies.set("adminLoggedIn", "true", { expires: 1 });
        }
        else
            setEnteredPassword({
                ...enteredPassword,
                value: "",
                isValid: false,
            });
    };

    return (
        <div className="wrapper flex flex-col justify-center items-center gap-10 p-4">
            <header className="flex items-center gap-3 sm:gap-6">
                {[
                    icons["no-food"],
                    icons["no-drinks"],
                    icons["key"],
                    icons["no-pets"],
                    icons["no-babies"],
                ].map((icon, index) => (
                    <img
                        key={index}
                        src={icon}
                        alt=""
                        style={{
                            width: index == 2 ? "80px" : "36px",
                            height: index == 2 ? "80px" : "36px",
                            opacity: index != 2 ? 0.4 : 1,
                        }}
                    />
                ))}
            </header>

            <main
                style={{
                    width: "min(400px, 100%)",
                }}
            >
                <p className="text-2xl font-semibold uppercase text-center">
                    Staff only
                </p>

                <form
                    className="flex flex-col items-stretch gap-4 py-8"
                    onSubmit={formSubmittedHandler}
                >
                    <input
                        className={inputStyles["textbox"]}
                        type="password"
                        name="admin-password"
                        placeholder="Password"
                        value={enteredPassword.value}
                        onChange={(e) =>
                            setEnteredPassword({ ...enteredPassword, value: e.target.value })
                        }
                        onBlur={() =>
                            setEnteredPassword({ ...enteredPassword, isTouched: true })
                        }
                    />
                    <Button className="w-full" type="submit">
                        Log in
                    </Button>
                </form>
                <small
                    className="inline-block w-full text-center text-[#DC3545]"
                    style={{
                        visibility:
                            enteredPassword.isTouched && !enteredPassword.isValid
                                ? "visible"
                                : "hidden",
                    }}
                >
                    Incorrect password
                </small>
            </main>

            <footer>
                <p className="max-w-[66ch] text-center text-[#727272] leading-snug">
                    If you&apos;re not from The Mason Network team, this page shouldn&apos;t
                    concern you. To go back to the homepage,{" "}
                    <SLink to="/">Click here</SLink>
                </p>
            </footer>
        </div>
    );
};

export default AdminLogin;
