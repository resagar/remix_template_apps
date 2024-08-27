import { type ActionFunctionArgs } from "@remix-run/node";
import { createSupabase } from "~/.server/supabase";
import { makeDomainFunction } from "domain-functions";
import { Card } from "~/components/landingPage/sections/pricing/Card";
import { formAction } from "~/.server/form-action";
import { FormAuth, schema } from "~/components/forms/FormAuth";
import { newUser } from "~/.server/repositories/users";

export async function action({ request }: ActionFunctionArgs) {
  const { supabase, headers } = createSupabase(request);

  const mutation = makeDomainFunction(schema)(async ({ email, password }) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "http://localhost:5173/login",
      },
    });
    if (error) {
      throw error;
    }
    const { error: errorLogin } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (errorLogin) {
      throw error;
    }
    const {
      data: { user },
    } = await supabase.auth.getUser();
    await newUser({ id: user?.id || "", email, password });
  });
  return formAction({
    request,
    schema,
    mutation,
    successPath: "/login",
    beforeSuccess: async ({ body }) => new Response(body, { headers }),
  });
}

export default function Register() {
  return (
    <>
      <div>
        <Card className="shadow-xl gap-4">
          <div className="flex flex-row justify-center">
            <p className="text-lg font-semibold">Register</p>
          </div>
          <FormAuth buttonTitle="Sign Up" />
        </Card>
      </div>
    </>
  );
}
