"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import logo from "@/public/webtodo_logo.png";
import { signupUser } from "@/lib/actions";
import { LoadingSpinner } from "@/components/ui/gb-spinner";

export default function LoginForm() {
  const initialState: SignupFormState = { errors: {}, message: '', apiError: '' };
  const [formState, dispatch] = useFormState(
    signupUser,
    initialState
  );

  // console.log(formState); // SCAFF

  return (
    <div className="w-full">
      <form
        action={dispatch}
        className="flex flex-col items-center gap-y-6"
      >
        <div className="w-full">
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            required
          />
          <div id="first-name-error" aria-live="polite" aria-atomic="true">
            {
              formState.errors?.firstName &&
              formState.errors.firstName.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))
            }
          </div>
        </div>

        <div className="w-full">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            required
          />
          <div id="last-name-error" aria-live="polite" aria-atomic="true">
            {
              formState.errors?.lastName &&
              formState.errors.lastName.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))
            }
          </div>
        </div>

        <div className="w-full">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {
              formState.errors?.email &&
              formState.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))
            }
          </div>
        </div>

        <div className="w-full">
          <Label htmlFor="password">Password</Label>
          {/*
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          */}
          <PasswordInput />
          <div id="password-error" aria-live="polite" aria-atomic="true">
            {
              formState.errors?.password &&
              formState.errors.password.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))
            }
          </div>
        </div>

        <div id="api-error" aria-live="polite" aria-atomic="true">
          {
            formState.apiError && (
              <p className="mt-2 text-sm text-red-500">
                {formState.apiError}
              </p>
            )
          }
        </div>

        <Buttn />
      </form>
    </div>
  );
}

const Buttn = () => {
  const { pending } = useFormStatus();

  // const pendingClasses = pending ? '' : '';

  return (
    <Button
      className="w-full"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? <LoadingSpinner srText="Processing..." /> : 'Sign Up'}
    </Button>
  );
};

const PasswordInput = () => {
  const [hide, setHide] = useState(true);

  const inputType = hide ? 'password' : 'text';
  const iconClasses= "absolute right-3 top-1/2 h-full w-5 -translate-y-1/2";
  // const iconClasses= "absolute inset-y-0 h-5 w-5";
  // const iconClasses = "absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none h-5 w-5";

  const handleClick = () => {
    setHide(!hide);
  };

  return (
    <div className="relative">
      <Input
        id="password"
        type={inputType}
        name="password"
        className="pr-10"
        placeholder="Enter your password"
        required
      />
      {
        hide
        ? <BiSolidShow onClick={handleClick} className={iconClasses} />
        : <BiSolidHide onClick={handleClick} className={iconClasses} />
      }
    </div>
  );
};
