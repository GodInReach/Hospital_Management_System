import type { Metadata } from "next";
import { CreateAccountForm } from "../../components/create-account-form";

export const metadata: Metadata = {
  title: "Create account",
  description: "Create a hospital admin account and submit the setup details.",
};

export default function CreateAccountPage() {
  return <CreateAccountForm />;
}
