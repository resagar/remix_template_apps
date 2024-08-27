import { type ActionFunctionArgs } from "@remix-run/node";
import { createSupabase } from "~/.server/supabase";
import { makeDomainFunction } from "domain-functions";
import { Card } from "~/components/landingPage/sections/pricing/Card";
import { formAction } from "~/.server/form-action";
import { FormAuth, schema } from "~/components/forms/FormAuth";

export async function action({ request }: ActionFunctionArgs) {
  const { supabase, headers } = createSupabase(request);

  const mutation = makeDomainFunction(schema)(async ({ email, password }) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw error;
    }
  });

  return formAction({
    request,
    schema,
    mutation,
    successPath: "/login",
    beforeSuccess: async ({ body }) => new Response(body, { headers }),
  });
}

export default function Login() {
  return (
    <>
      <div>
        <Card className="shadow-xl gap-4">
          <div className="flex flex-row justify-center">
            <p className="text-lg font-semibold">Log In</p>
          </div>
          <FormAuth buttonTitle="Log In" />
        </Card>
      </div>
    </>
  );
}
