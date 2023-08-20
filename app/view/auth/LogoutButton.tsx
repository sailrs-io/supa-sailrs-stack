import { Form } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export function LogoutButton() {
  const { t } = useTranslation("auth");

  return (
    <Form action="/logout" method="post">
      <button
        data-test-id="logout"
        type="submit"
        className="py-2 px-4 text-blue-100 rounded hover:bg-blue-500 active:bg-blue-600 bg-slate-600"
      >
        {t("logout.action")}
      </button>
    </Form>
  );
}
