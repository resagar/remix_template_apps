import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { type EmailOtpType } from "@supabase/supabase-js";
import { confirmEmail } from "~/.server/repositories/users";
import { createSupabase } from "~/.server/supabase";

export async function loader({ request }: LoaderFunctionArgs) {
  const requestUrl = new URL(request.url);
  const token_hash = requestUrl.searchParams.get("token_hash");
  const type = requestUrl.searchParams.get("type") as EmailOtpType | null;
  const next = requestUrl.searchParams.get("next") || "/";
  const headers = new Headers();
  if (token_hash && type) {
    const { supabase, headers } = createSupabase(request);

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (!error) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      await confirmEmail(user?.email);
      return redirect(next, { headers });
    }
  }

  // return the user to an error page with instructions
  return redirect("/auth/auth-code-error", { headers });
}
