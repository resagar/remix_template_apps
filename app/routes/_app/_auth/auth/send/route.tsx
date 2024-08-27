import type { ActionFunctionArgs } from "@remix-run/node";
import { makeDomainFunction } from "domain-functions";
import { z } from "zod";
import { formAction } from "~/.server/form-action";
import { createSupabase } from "~/.server/supabase";
import { ErrorField, ErrorGlobal } from "~/components/forms/Errors";
import { Form } from "~/components/forms/form";
import { Input } from "~/components/forms/Input";
import { Card } from "~/components/landingPage/sections/pricing/Card";

const schema = z.object({
  email: z.string().min(3).email(),
});

export async function action({ request }: ActionFunctionArgs) {
  const { supabase, headers } = createSupabase(request);
  const mutation = makeDomainFunction(schema)(async ({ email }) => {
    const { error } = await supabase.auth.resend({ email, type: "signup" });
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

export default function SendEmail() {
  return (
    <>
      <div>
        <Card className="shadow-xl gap-4">
          <div className="flex flex-row justify-center">
            <p className="text-lg font-semibold">Confirmation email</p>
          </div>
          <Form
            schema={schema}
            inputTypes={{ email: "email" }}
            inputComponent={Input}
            fieldErrorsComponent={({ children }) => (
              <ErrorField>{children}</ErrorField>
            )}
            globalErrorsComponent={({ children }) => (
              <ErrorGlobal>{children}</ErrorGlobal>
            )}
          >
            {({ Field, Errors, Button }) => (
              <div className="flex flex-col justify-start gap-8">
                <div className="flex flex-col gap-4">
                  <Errors />
                  <Field name="email" className="flex flex-col" />
                </div>
                <div className="flex flex-row justify-center">
                  <Button className="btn btn-sm btn-wide btn-primary text-slate-200">
                    Send Confirmation Email
                  </Button>
                </div>
              </div>
            )}
          </Form>
        </Card>
      </div>
    </>
  );
}
