import React from "react";

import { useTranslation } from "react-i18next";

import { useTypedFetcher } from "~/hooks";
import type { action } from "~/routes/send-magic-link";

export function ContinueWithEmailForm() {
  const ref = React.useRef<HTMLFormElement>(null);
  const sendMagicLink = useTypedFetcher<typeof action>();
  // TODO: get rid of `type`
  const { data, state, type } = sendMagicLink;
  const isSuccessFull = type === "done" && !data?.error;
  const isLoading = state === "submitting" || state === "loading";
  const { t } = useTranslation("auth");
  const buttonLabel = isLoading
    ? t("register.sendingLink")
    : t("register.continueWithEmail");

  React.useEffect(() => {
    if (isSuccessFull) {
      ref.current?.reset();
    }
  }, [isSuccessFull]);

  return (
    <sendMagicLink.Form
      method="post"
      action="/send-magic-link"
      replace={false}
      ref={ref}
    >
      <input
        type="email"
        name="email"
        id="magic-link"
        className="py-1 px-2 mb-1 w-full text-lg rounded border border-gray-500"
        disabled={isLoading}
      />
      <div
        className={`mb-2 h-6 text-center ${data?.error ? "text-red-600" : ""} ${isSuccessFull ? "text-green-600" : ""
          }`}
      >
        {!isSuccessFull ? data?.error : t("register.checkEmail")}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="flex justify-center items-center py-3 px-4 w-full font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
      >
        {buttonLabel}
      </button>
    </sendMagicLink.Form>
  );
}
